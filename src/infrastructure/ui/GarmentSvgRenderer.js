export class GarmentSvgRenderer {
  static render(product, colorObj, placement = null, isLarge = false) {
    // Copia aquí exactamente el cuerpo de tu función renderGarmentSVG(product, colorObj, placement, isLarge)
    const fill = colorObj.primary || '#18191B';
    const isLight = ['#FFFFFF', '#F3EAC2', '#FEF3C7', '#FEF08A', '#FDE047', '#D9F99D', '#D4E11E', '#7DD3FC', '#5EEAD4', '#E0D4B7', '#D2C29D'].includes(fill.toUpperCase());
    const stroke = isLight ? '#475569' : '#0F172A';
    const detailStroke = isLight ? '#94A3B8' : 'rgba(255,255,255,0.28)';
    const sizeClass = isLarge ? 'w-full h-full max-h-[250px]' : 'w-44 h-44';

      // Marcador visual de ubicación de bordado/estampado en el modal
      let logoOverlay = '';
      if (placement && placement !== 'Sin Logo') {
        const coords = {
          'Frente Gorra': { x: 100, y: 82, w: 34, h: 18, label: 'R&D' },
          'Lateral Gorra': { x: 138, y: 86, w: 22, h: 14, label: 'R&D' },
          'Pecho Izquierdo': { x: 123, y: 82, w: 24, h: 14, label: 'R&D' },
          'Pecho Centro': { x: 100, y: 92, w: 46, h: 24, label: 'TU LOGO' },
          'Espalda Completa': { x: 100, y: 95, w: 54, h: 32, label: 'ESPALDA' },
          'Manga': { x: 158, y: 78, w: 18, h: 12, label: 'R&D' }
        }[placement];

        if (coords) {
          logoOverlay = `
            <g class="embroidery-zone">
              <rect x="${coords.x - coords.w/2}" y="${coords.y - coords.h/2}" width="${coords.w}" height="${coords.h}" rx="3" fill="#111315" fill-opacity="0.88" stroke="#F4C414" stroke-width="1.5" stroke-dasharray="3,2"/>
              <text x="${coords.x}" y="${coords.y + 3}" text-anchor="middle" fill="#F4C414" font-family="Montserrat, sans-serif" font-weight="900" font-size="7.5">${coords.label}</text>
            </g>
          `;
        }
      }

      // GORRAS
      if (product.svgType.startsWith('cap')) {
        const visorColor = colorObj.visor || fill;
        const frontColor = colorObj.front || fill;
        const meshPattern = (product.svgType === 'cap-mesh' || product.svgType === 'cap-trucker') ? `
          <g opacity="0.35" stroke="${detailStroke}" stroke-width="1" stroke-dasharray="2,2">
            <path d="M52,62 L52,108 M62,52 L62,108 M138,52 L138,108 M148,62 L148,108"/>
          </g>` : '';
        const holesPattern = product.svgType === 'cap-perforated' ? `
          <g fill="${isLight ? '#64748B' : '#090D16'}" opacity="0.55">
            <circle cx="54" cy="75" r="1.6"/><circle cx="60" cy="70" r="1.6"/><circle cx="54" cy="84" r="1.6"/><circle cx="60" cy="80" r="1.6"/><circle cx="54" cy="93" r="1.6"/><circle cx="60" cy="90" r="1.6"/>
            <circle cx="146" cy="75" r="1.6"/><circle cx="140" cy="70" r="1.6"/><circle cx="146" cy="84" r="1.6"/><circle cx="140" cy="80" r="1.6"/><circle cx="146" cy="93" r="1.6"/><circle cx="140" cy="90" r="1.6"/>
          </g>` : '';

        return `
          <svg viewBox="0 0 200 170" class="${sizeClass} drop-shadow-md transition-all duration-300">
            <!-- Botón superior -->
            <ellipse cx="100" cy="40" rx="7" ry="4" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>
            <!-- Copa de la gorra -->
            <path d="M44,108 C44,64 68,42 100,42 C132,42 156,64 156,108 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- Panel frontal (para Trucker / 5 paneles) -->
            <path d="M72,108 C72,62 84,42 100,42 C116,42 128,62 128,108 Z" fill="${frontColor}" stroke="${detailStroke}" stroke-width="1.2"/>
            <!-- Costuras paneles -->
            ${product.svgType !== 'cap-5panel' ? `<line x1="100" y1="42" x2="100" y2="108" stroke="${detailStroke}" stroke-width="1.2"/>` : ''}
            <!-- Ojetes -->
            <circle cx="84" cy="58" r="2.2" fill="none" stroke="${detailStroke}" stroke-width="1.3"/>
            <circle cx="116" cy="58" r="2.2" fill="none" stroke="${detailStroke}" stroke-width="1.3"/>
            ${meshPattern}
            ${holesPattern}
            <!-- Visera curva -->
            <path d="M44,108 Q100,98 156,108 L166,124 Q100,142 34,124 Z" fill="${visorColor}" stroke="${stroke}" stroke-width="2" stroke-linejoin="round"/>
            <!-- Costuras de visera -->
            <path d="M46,115 Q100,128 154,115" fill="none" stroke="${detailStroke}" stroke-width="1"/>
            <path d="M42,120 Q100,135 158,120" fill="none" stroke="${detailStroke}" stroke-width="1"/>
            ${logoOverlay}
          </svg>
        `;
      }

      // POLOSHIRTS
      if (product.svgType.startsWith('polo')) {
        const trimColor = colorObj.trim || detailStroke;
        const hasTrim = product.svgType === 'polo-trim';
        return `
          <svg viewBox="0 0 200 190" class="${sizeClass} drop-shadow-md transition-all duration-300">
            <!-- Cuerpo y mangas -->
            <path d="M68,30 L32,48 L18,84 L44,94 L52,72 L52,168 L148,168 L148,72 L156,94 L182,84 L168,48 L132,30 Q100,42 68,30 Z" fill="${fill}" stroke="${stroke}" stroke-width="2" stroke-linejoin="round"/>
            <!-- Ribetes en mangas -->
            <path d="M20,80 L45,90" stroke="${hasTrim ? trimColor : detailStroke}" stroke-width="${hasTrim ? '3.5' : '1.5'}"/>
            <path d="M180,80 L155,90" stroke="${hasTrim ? trimColor : detailStroke}" stroke-width="${hasTrim ? '3.5' : '1.5'}"/>
            <!-- Cuello Polo -->
            <path d="M68,30 L78,52 L100,42 L122,52 L132,30 Q100,38 68,30 Z" fill="${fill}" stroke="${hasTrim ? trimColor : stroke}" stroke-width="2"/>
            <!-- Pechera con botones -->
            <rect x="94" y="42" width="12" height="36" rx="2" fill="${fill}" stroke="${detailStroke}" stroke-width="1.2"/>
            <circle cx="100" cy="51" r="2" fill="${detailStroke}"/>
            <circle cx="100" cy="61" r="2" fill="${detailStroke}"/>
            <circle cx="100" cy="71" r="2" fill="${detailStroke}"/>
            ${product.svgType === 'polo-columbia' ? `<path d="M52,74 L148,74" stroke="${detailStroke}" stroke-width="1.2" stroke-dasharray="4,2"/>` : ''}
            ${logoOverlay}
          </svg>
        `;
      }

      // CAMISETAS (Redondo, Cuello V, Manga Larga, Capucha, Sin Mangas, Oversize)
      if (['tshirt', 'tshirt-v', 'longsleeve', 'hoodie-light', 'tanktop', 'oversize'].includes(product.svgType)) {
        if (product.svgType === 'tanktop') {
          return `
            <svg viewBox="0 0 200 190" class="${sizeClass} drop-shadow-md transition-all duration-300">
              <path d="M66,28 L78,28 Q100,56 122,28 L134,28 L146,72 L146,168 L54,168 L54,72 Z" fill="${fill}" stroke="${stroke}" stroke-width="2" stroke-linejoin="round"/>
              <path d="M76,28 Q100,58 124,28" fill="none" stroke="${detailStroke}" stroke-width="2.5"/>
              ${logoOverlay}
            </svg>
          `;
        }
        const isLong = product.svgType === 'longsleeve' || product.svgType === 'hoodie-light';
        const isOver = product.svgType === 'oversize';
        const neckPath = product.svgType === 'tshirt-v'
          ? 'M74,30 L100,56 L126,30'
          : 'M74,30 Q100,48 126,30';
        const sleevesPath = isLong
          ? 'M74,30 L34,46 L16,144 L36,148 L52,76 L52,168 L148,168 L148,76 L164,148 L184,144 L166,46 L126,30'
          : isOver
          ? 'M72,30 L26,48 L14,96 L46,104 L50,76 L50,172 L150,172 L150,76 L154,104 L186,96 L174,48 L128,30'
          : 'M74,30 L32,48 L18,86 L46,95 L52,72 L52,168 L148,168 L148,72 L154,95 L182,86 L168,48 L126,30';

        return `
          <svg viewBox="0 0 200 190" class="${sizeClass} drop-shadow-md transition-all duration-300">
            ${product.svgType === 'hoodie-light' ? `<path d="M72,32 C72,10 128,10 128,32 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>` : ''}
            <path d="${sleevesPath} Z" fill="${fill}" stroke="${stroke}" stroke-width="2" stroke-linejoin="round"/>
            <path d="${neckPath}" fill="none" stroke="${detailStroke}" stroke-width="2.5"/>
            ${logoOverlay}
          </svg>
        `;
      }

      // CAMISAS (Columbia y Oxford)
      if (product.svgType.startsWith('shirt')) {
        const isColumbia = product.svgType.includes('columbia');
        return `
          <svg viewBox="0 0 200 190" class="${sizeClass} drop-shadow-md transition-all duration-300">
            <path d="M70,28 L30,46 L16,90 L44,98 L52,72 L52,168 Q100,176 148,168 L148,72 L156,98 L184,90 L170,46 L130,28 Q100,38 70,28 Z" fill="${fill}" stroke="${stroke}" stroke-width="2" stroke-linejoin="round"/>
            <!-- Cuello camisero -->
            <path d="M70,28 L80,50 L100,38 L120,50 L130,28 Z" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>
            <!-- Tapeta central y botones -->
            <line x1="100" y1="38" x2="100" y2="171" stroke="${detailStroke}" stroke-width="1.5"/>
            <circle cx="100" cy="56" r="1.8" fill="${detailStroke}"/>
            <circle cx="100" cy="76" r="1.8" fill="${detailStroke}"/>
            <circle cx="100" cy="96" r="1.8" fill="${detailStroke}"/>
            <circle cx="100" cy="116" r="1.8" fill="${detailStroke}"/>
            <!-- Bolsillos -->
            ${isColumbia ? `
              <rect x="62" y="64" width="24" height="26" rx="2" fill="none" stroke="${detailStroke}" stroke-width="1.4"/>
              <path d="M62,71 L86,71" stroke="${detailStroke}" stroke-width="1.4"/>
              <rect x="114" y="64" width="24" height="26" rx="2" fill="none" stroke="${detailStroke}" stroke-width="1.4"/>
              <path d="M114,71 L138,71" stroke="${detailStroke}" stroke-width="1.4"/>
            ` : `
              <path d="M114,66 L136,66 L136,88 L125,93 L114,88 Z" fill="none" stroke="${detailStroke}" stroke-width="1.3"/>
            `}
            ${logoOverlay}
          </svg>
        `;
      }

      // ABRIGOS Y HOODIES
      if (product.svgType.startsWith('hoodie') || product.svgType === 'jacket-bomber') {
        const hasHood = product.svgType !== 'jacket-bomber';
        const hasZip = product.svgType === 'hoodie-zip' || product.svgType === 'jacket-bomber';
        const jacquard = product.svgType === 'hoodie-jacquard' ? `
          <g stroke="${detailStroke}" stroke-width="0.9" opacity="0.45">
            <path d="M55,65 H145 M55,80 H145 M55,95 H145 M55,110 H145 M75,50 V155 M100,50 V155 M125,50 V155"/>
          </g>` : '';

        return `
          <svg viewBox="0 0 200 190" class="${sizeClass} drop-shadow-md transition-all duration-300">
            ${hasHood ? `<path d="M68,34 C68,8 132,8 132,34 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>` : `<path d="M72,30 Q100,40 128,30 L124,40 Q100,48 76,40 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`}
            <path d="M70,32 L32,48 L16,144 L36,148 L52,78 L52,168 L148,168 L148,78 L164,148 L184,144 L168,48 L130,32 Z" fill="${fill}" stroke="${stroke}" stroke-width="2" stroke-linejoin="round"/>
            ${jacquard}
            <!-- Pretina inferior y puños -->
            <rect x="52" y="156" width="96" height="12" fill="none" stroke="${detailStroke}" stroke-width="1.3"/>
            <!-- Bolsillo canguro -->
            <path d="M68,156 L76,122 L124,122 L132,156" fill="none" stroke="${detailStroke}" stroke-width="1.5"/>
            ${hasZip ? `<line x1="100" y1="36" x2="100" y2="168" stroke="#CBD5E1" stroke-width="2.2" stroke-dasharray="3,1.5"/>` : `
              <line x1="92" y1="42" x2="92" y2="72" stroke="${detailStroke}" stroke-width="2"/>
              <line x1="108" y1="42" x2="108" y2="72" stroke="${detailStroke}" stroke-width="2"/>
            `}
            ${logoOverlay}
          </svg>
        `;
      }

      // CHALECOS REFLECTIVOS
      if (product.svgType.startsWith('vest')) {
        const hasZip = product.svgType !== 'vest-velcro';
        const isCH003 = product.svgType === 'vest-mesh';
        return `
          <svg viewBox="0 0 200 190" class="${sizeClass} drop-shadow-md transition-all duration-300">
            <!-- Cuerpo del chaleco -->
            <path d="M66,24 L82,24 L100,66 L118,24 L134,24 L154,72 L154,168 L46,168 L46,72 Z" fill="${fill}" stroke="#111315" stroke-width="2.5" stroke-linejoin="round"/>
            <!-- Cintas reflectantes 360° -->
            ${isCH003 ? `<rect x="46" y="96" width="108" height="22" fill="#D4E11E"/>` : ''}
            <rect x="46" y="101" width="108" height="12" fill="#CBD5E1" stroke="#64748B" stroke-width="0.8"/>
            ${isCH003 ? `<rect x="46" y="131" width="108" height="22" fill="#D4E11E"/>` : ''}
            <rect x="46" y="136" width="108" height="12" fill="#CBD5E1" stroke="#64748B" stroke-width="0.8"/>
            <!-- Cierre central -->
            <line x1="100" y1="66" x2="100" y2="168" stroke="#111315" stroke-width="${hasZip ? '2.5' : '1.8'}" ${hasZip ? 'stroke-dasharray="3,1"' : ''}/>
            ${product.svgType === 'vest-zipper' ? `<rect x="114" y="64" width="22" height="26" rx="2" fill="${fill}" stroke="#111315" stroke-width="1.5"/>` : ''}
            ${logoOverlay}
          </svg>
        `;
      }

      return '';
    }  
}
