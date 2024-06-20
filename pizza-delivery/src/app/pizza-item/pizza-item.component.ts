import { Component, Input } from '@angular/core';
import { Pizza } from '../pizza';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pizza-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pizza-item.component.html',
  styleUrl: './pizza-item.component.scss'
})
export class PizzaItemComponent {
  @Input() pizza!: Pizza;
}
