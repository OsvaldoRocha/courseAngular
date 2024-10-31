import { Routes } from '@angular/router';
import { ListComponent } from './shared/lists/list/list.component';

export const routes: Routes = [
    {
        path:"",
        component:ListComponent
    },
    {
        path:"create-products",
        loadComponent:()=> import ('../app/feacture/create-products/create-products.component')
        .then((res)=>res.CreateProductsComponent)
    },
    {
        path:"edit-produts/:id",
        loadComponent:()=> import('../app/feacture/edit/edit.component')
        .then((edit)=>edit.EditComponent)
    }
];
