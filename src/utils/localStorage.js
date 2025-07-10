import { prepareArray } from './prepareArray.js';

export class Storage {
  static put(key, value) {
    if (localStorage.getItem(key)) {
      const data = JSON.parse(localStorage.getItem(key));
      localStorage.setItem(key, JSON.stringify(prepareArray(value, data)));
    } else {
      localStorage.setItem(key, JSON.stringify([value]));
    }
  }

  static get(key) {
    const data = JSON.parse(localStorage.getItem(key));
    if (data) return data;
    else return [];
  }
}
