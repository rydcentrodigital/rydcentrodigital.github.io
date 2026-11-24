import { QuoteSenderPort } from '../../application/ports/QuoteSenderPort.js';

export class WhatsAppQuoteAdapter extends QuoteSenderPort {
  send(message, phone) {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  }
}