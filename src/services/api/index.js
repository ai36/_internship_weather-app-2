import { config } from '@/config';
import { CannotFetchError, CityNotFoundError } from '@errors/';

class API {
  constructor(config = {}) {
    this.config = config;
  }

  async request({ url, method = 'GET', ...options }) {
    if (!url.match(/^https?:\/\//)) url = this.config.baseUrl + url;
    const response = await fetch(url, {
      method,
      ...options,
    });

    return { data: await response.json(), status: response.status };
  }

  async getCityCoordinates(cityName, signal) {
    const { data, status } = await this.request({
      url: `https://nominatim.openstreetmap.org/search.php?q=${cityName}&format=json&addressdetails=1&limit=1`,
      signal,
    });

    if (status !== 200) {
      throw new CannotFetchError();
    }

    if (!data.length) {
      throw new CityNotFoundError();
    }

    return data[0];
  }

  async getForecast(coords, signal) {
    const { data, status } = await this.request({
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${this.config.apiKey}&units=metric&lang=ru`,
      signal,
    });

    if (status !== 200) {
      throw new CannotFetchError();
    }

    return data;
  }
}

export const api = new API(config);
