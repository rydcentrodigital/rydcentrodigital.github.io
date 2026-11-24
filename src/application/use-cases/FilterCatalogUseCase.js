export class FilterCatalogUseCase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  execute(filters) {
    const allProducts = this.productRepository.getAll();
    return allProducts.filter(product => product.matchesFilter(filters));
  }
}