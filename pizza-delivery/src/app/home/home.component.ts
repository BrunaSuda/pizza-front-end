import { Component, inject } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaItemComponent } from '../pizza-item/pizza-item.component';
import { PizzaService } from '../services/pizza.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PizzaItemComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  pizzas: Pizza[] = [];
  pizzaService: PizzaService = inject(PizzaService);
  filteredPizza: Pizza[] = [];

  constructor() {
    this.pizzaService.getAll().then((pizzas: Pizza[])=> {
      this.pizzas = pizzas;
      this.filteredPizza = pizzas;
    })
  }
}
