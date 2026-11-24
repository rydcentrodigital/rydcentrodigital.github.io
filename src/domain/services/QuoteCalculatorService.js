export class QuoteCalculatorService {
  static calculateTotalUnits(items) {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  static formatQuoteSummary(items, clientName) {
    const validClient = clientName.trim() || 'Cliente Web';
    let message = `¡Hola *R&D Rodrigo Centro Digital*! 👋\nSolicito cotización del siguiente pedido de catálogo:\n\n`;
    message += `*Cliente / Empresa:* ${validClient}\n`;
    message += `----------------------------------\n`;

    items.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}* (${item.code})\n`;
      message += `   • Color: ${item.colorName}\n`;
      message += `   • Talla: ${item.size}\n`;
      message += `   • Personalización: ${item.customType}${item.placement !== 'Sin Logo' ? ` - ${item.placement}` : ''}\n`;
      message += `   • Cantidad: *${item.qty} uds.*\n\n`;
    });

    const totalUnits = this.calculateTotalUnits(items);
    message += `----------------------------------\n`;
    message += `*Total de prendas:* ${totalUnits} unidades.\nQuedo atento a su disponibilidad y presupuesto. ¡Gracias!`;
    return message;
  }
}