import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './product/product';
import { Details } from './details/details';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "product", component: Products},
    {path: "details/:id", component: Details}
];
