export class QuoteSenderPort {
  send(message, destination) {
    throw new Error('Método send() debe ser implementado por un adaptador');
  }
}