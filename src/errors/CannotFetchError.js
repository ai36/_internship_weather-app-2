export class CannotFetchError extends Error {
  constructor() {
    super('Отсутствует связь со сторонним сервисом');
    this.name = 'CannotFetchError';
  }
}
