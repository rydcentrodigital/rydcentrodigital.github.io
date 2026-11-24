export class QuoteItem {
  constructor({ id, productId, code, name, colorName, colorHex, size, customType, placement, qty }) {
    this.id = id || Date.now().toString();
    this.productId = productId;
    this.code = code;
    this.name = name;
    this.colorName = colorName;
    this.colorHex = colorHex;
    this.size = size;
    this.customType = customType;
    this.placement = placement;
    this.qty = Math.max(1, parseInt(qty, 10) || 1);
  }

  isSameConfiguration(other) {
    return (
      this.productId === other.productId &&
      this.colorName === other.colorName &&
      this.size === other.size &&
      this.customType === other.customType &&
      this.placement === other.placement
    );
  }
}