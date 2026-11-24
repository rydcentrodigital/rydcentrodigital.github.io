import { QuoteItem } from '../../domain/models/QuoteItem.js';
import { QuoteCalculatorService } from '../../domain/services/QuoteCalculatorService.js';

export class ManageQuoteUseCase {
  constructor(quoteSenderPort) {
    this.quoteSender = quoteSenderPort;
    this.items = [];
  }

  addItem(itemData) {
    const newItem = new QuoteItem(itemData);
    const existingIndex = this.items.findIndex(item => item.isSameConfiguration(newItem));

    if (existingIndex > -1) {
      this.items[existingIndex].qty += newItem.qty;
    } else {
      this.items.push(newItem);
    }
    return this.getSummary();
  }

  updateQuantity(itemId, delta) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return this.getSummary();

    item.qty += delta;
    if (item.qty <= 0) {
      this.removeItem(itemId);
    }
    return this.getSummary();
  }

  removeItem(itemId) {
    this.items = this.items.filter(i => i.id !== itemId);
    return this.getSummary();
  }

  getSummary() {
    return {
      items: [...this.items],
      totalUniqueItems: this.items.length,
      totalUnits: QuoteCalculatorService.calculateTotalUnits(this.items)
    };
  }

  submitQuote(clientName, phoneDestination) {
    if (this.items.length === 0) {
      throw new Error('Agrega al menos una prenda a tu lista antes de cotizar.');
    }
    const formattedMessage = QuoteCalculatorService.formatQuoteSummary(this.items, clientName);
    this.quoteSender.send(formattedMessage, phoneDestination);
  }
}