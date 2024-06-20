import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent,
    },
    {
        path: 'login',
        title: 'Login',
        component: LoginComponent,
    },
    {
        path: 'pedido',
        title: 'Pedido',
        component: OrderComponent,
    },
    {
        path: 'pizza/:id',
        title: 'Pizza',
        component: PizzaItemComponent,
    },
];
