import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PizzaService } from '../services/pizza.service';
import { Pizza } from '../pizza';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pizza-detail',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './pizza-detail.component.html',
  styleUrl: './pizza-detail.component.scss'
})
export class PizzaDetailComponent {
  route = inject(ActivatedRoute);
  service = inject(PizzaService);
  pizza: Pizza | undefined;
  router = new Router();

  qtd: number = 1;
  valorUnitario: number;
  valorTotal: number;
  meioPagamento: number = 1;

  constructor() {
    const id = Number(this.route.snapshot.params['id']);
    this.service.getById(id).then(pizza => {
      this.pizza = pizza;
    })
    this.valorUnitario = this.pizza?.price!;
    this.valorTotal = +this.valorUnitario;
  }

  onSubmit() {
    alert('Formulário submetido.');
    this.router.navigate(['/']); // redirect user to homepage
  }
}
