import { StaticProductRepository } from './infrastructure/adapters/StaticProductRepository.js';
import { WhatsAppQuoteAdapter } from './infrastructure/adapters/WhatsAppQuoteAdapter.js';
import { FilterCatalogUseCase } from './application/use-cases/FilterCatalogUseCase.js';
import { ManageQuoteUseCase } from './application/use-cases/ManageQuoteUseCase.js';
import { CatalogDomController } from './infrastructure/ui/CatalogDomController.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Instanciar Adaptadores de Infraestructura
  const productRepository = new StaticProductRepository();
  const whatsAppAdapter = new WhatsAppQuoteAdapter();

  // 2. Inyectar Adaptadores en los Casos de Uso
  const filterCatalogUseCase = new FilterCatalogUseCase(productRepository);
  const manageQuoteUseCase = new ManageQuoteUseCase(whatsAppAdapter);

  // 3. Iniciar Controlador de UI
  const uiController = new CatalogDomController({
    productRepo: productRepository,
    filterCatalogUseCase,
    manageQuoteUseCase
  });

  uiController.init();
});