export class ProductRepositoryPort {
  getAll() {
    throw new Error('Método getAll() debe ser implementado por un adaptador');
  }
  getById(id) {
    throw new Error('Método getById() debe ser implementado por un adaptador');
  }
}