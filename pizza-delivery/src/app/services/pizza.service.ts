import { Injectable } from '@angular/core';

import { Pizza } from '../pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  url = 'http://localhost:3000/pizzas';

  constructor() { }

  async getAll() : Promise<Pizza[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getById(id: Number) : Promise<Pizza | undefined> {
    return (await this.getAll()).find(pizza => pizza.id === id);
  }
}
