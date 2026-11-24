import { GarmentSvgRenderer } from './GarmentSvgRenderer.js';

export class CatalogDomController {
  constructor({ productRepo, filterCatalogUseCase, manageQuoteUseCase }) {
    this.productRepo = productRepo;
    this.filterCatalogUseCase = filterCatalogUseCase;
    this.manageQuoteUseCase = manageQuoteUseCase;

    this.uiState = {
      category: 'Todos',
      fabric: 'Todos',
      search: '',
      selectedColors: {},
      modalProduct: null,
      modalColorIdx: 0,
      modalSize: '',
      modalCustomType: 'Bordado Computarizado',
      modalPlacement: 'Pecho Izquierdo',
      modalQty: 12
    };

    this.productRepo.getAll().forEach(p => {
      this.uiState.selectedColors[p.id] = 0;
    });
  }

  init() {
    this.bindGlobalEvents();
    this.renderCatalog();
    this.updateCartUI(this.manageQuoteUseCase.getSummary());
  }

  bindGlobalEvents() {
    // Búsqueda
    ['searchInputDesktop', 'searchInputMobile'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('input', (e) => {
        this.uiState.search = e.target.value;
        document.getElementById('searchInputDesktop').value = this.uiState.search;
        document.getElementById('searchInputMobile').value = this.uiState.search;
        document.getElementById('clearSearchDesktop').classList.toggle('hidden', this.uiState.search.length === 0);
        this.renderCatalog();
      });
    });

    // Delegación para botones con atributos data-* o llamadas expuestas
    window.app = this;
  }

  renderCatalog() {
    const grid = document.getElementById('productsGrid');
    const emptyState = document.getElementById('emptyState');
    const countEl = document.getElementById('productCount');

    const filtered = this.filterCatalogUseCase.execute({
      category: this.uiState.category,
      fabric: this.uiState.fabric,
      searchTerm: this.uiState.search
    });

    countEl.textContent = filtered.length;

    if (filtered.length === 0) {
      grid.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    }

    emptyState.classList.add('hidden');
    grid.innerHTML = filtered.map(product => this.createProductCardHtml(product)).join('');
  }

  createProductCardHtml(product) {
    const activeColorIdx = this.uiState.selectedColors[product.id] || 0;
    const activeColor = product.colors[activeColorIdx];
    const visibleColors = product.colors.slice(0, 10);
    const extraColorsCount = product.colors.length - 10;

    const swatchesHtml = visibleColors.map((col, idx) => {
      const isActive = idx === activeColorIdx;
      const isWhite = ['#FFFFFF', '#F3EAC2'].includes(col.primary.toUpperCase());
      const bg = col.visor
        ? `linear-gradient(135deg, ${col.primary} 55%, ${col.visor} 55%)`
        : col.front
        ? `linear-gradient(135deg, ${col.front} 55%, ${col.primary} 55%)`
        : col.primary;

      return `
        <button type="button" title="${col.name}"
          onclick="event.stopPropagation(); window.app.changeCardColor('${product.id}', ${idx})"
          class="w-5 h-5 rounded-full swatch-ring ${isActive ? 'swatch-active' : ''} ${isWhite ? 'border border-gray-300' : ''}"
          style="background: ${bg};"></button>
      `;
    }).join('');

    return `
      <article onclick="window.app.openProductModal('${product.id}')" class="group bg-white rounded-2xl border border-gray-200 hover:border-brand-gold shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer">
        <div>
          <div class="relative bg-brand-gray p-5 flex items-center justify-center h-56 border-b border-gray-100 overflow-hidden">
            <span class="absolute top-3 left-3 bg-brand-black text-brand-gold font-display font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-lg tracking-wider">${product.code}</span>
            <span class="absolute top-3 right-3 bg-white/90 text-gray-700 font-semibold text-[11px] px-2.5 py-1 rounded-lg border border-gray-200">${product.category}</span>
            <div class="transform group-hover:scale-105 transition-transform duration-300">
              ${GarmentSvgRenderer.render(product, activeColor, null, false)}
            </div>
            <span class="absolute bottom-2.5 left-3 text-[11px] font-semibold text-gray-700 bg-white/90 px-2.5 py-0.5 rounded-md border border-gray-200">
              Color: <strong>${activeColor.name}</strong>
            </span>
          </div>
          <div class="p-4 space-y-2.5">
            <div class="text-[11px] font-bold uppercase tracking-wider text-amber-600">${product.fabric}</div>
            <h3 class="font-display font-extrabold text-sm sm:text-base text-brand-black leading-snug group-hover:text-amber-600 transition">${product.name}</h3>
            <p class="text-xs text-gray-500 line-clamp-2">Tallas: <span class="text-gray-700 font-medium">${product.sizes.slice(0, 5).join(', ')}${product.sizes.length > 5 ? '...' : ''}</span></p>
            <div class="pt-1 flex flex-wrap items-center gap-1.5">
              ${swatchesHtml}
              ${extraColorsCount > 0 ? `<span class="text-[11px] font-bold text-gray-500 ml-1">+${extraColorsCount} más</span>` : ''}
            </div>
          </div>
        </div>
        <div class="p-4 pt-0">
          <button type="button" class="w-full py-2.5 px-4 bg-brand-black group-hover:bg-brand-gold text-white group-hover:text-brand-black font-display font-extrabold text-xs uppercase rounded-xl transition flex items-center justify-center gap-2">
            <i class="fa-solid fa-sliders"></i><span>Personalizar y Cotizar</span>
          </button>
        </div>
      </article>
    `;
  }

  // Aquí van los métodos de interacción (selectCategory, selectFabric, openProductModal, addCurrentModalToCart, sendWhatsAppQuote, etc.)
  // llamando a this.manageQuoteUseCase y actualizando la UI.
  sendWhatsAppQuote(phone) {
    try {
      const clientName = document.getElementById('clientNameInput').value;
      this.manageQuoteUseCase.submitQuote(clientName, phone);
    } catch (error) {
      this.showToast(error.message);
    }
  }

  showToast(msg) {
    const toast = document.getElementById('toastNotification');
    document.getElementById('toastMessage').textContent = msg;
    toast.classList.remove('hidden');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => toast.classList.add('hidden'), 3200);
  }
}