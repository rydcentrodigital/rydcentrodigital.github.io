export class Product {
  constructor({ id, code, category, svgType, name, fabric, tags, description, sizes, colors }) {
    this.id = id;
    this.code = code;
    this.category = category;
    this.svgType = svgType;
    this.name = name;
    this.fabric = fabric;
    this.tags = tags;
    this.description = description;
    this.sizes = sizes;
    this.colors = colors;
  }

  matchesFilter({ category, fabric, searchTerm }) {
    const matchCat = category === 'Todos' || this.category === category;
    const matchFab = fabric === 'Todos' || this.tags.includes(fabric);
    const q = searchTerm.trim().toLowerCase();
    
    const matchSearch = !q ||
      this.name.toLowerCase().includes(q) ||
      this.code.toLowerCase().includes(q) ||
      this.fabric.toLowerCase().includes(q) ||
      this.category.toLowerCase().includes(q) ||
      this.colors.some(c => c.name.toLowerCase().includes(q));

    return matchCat && matchFab && matchSearch;
  }
}