export class CityNotFoundError extends Error {
  constructor() {
    super(`Упс! Город не найден, попробуйте другой`);
    this.name = 'CityNotFoundError';
  }
}
