import { Routes } from "@angular/router";


export const content: Routes = [
    {
        path: '',
        loadChildren: () => import('../../components/home/home.routes').then(m => m.home)
    },
    { 
        path: '',
        loadChildren: () => import('../accounts/account.routes').then(m => m.account)
    },
    {
        path: '',
        loadChildren: () => import('../shop/shop.routes').then(m => m.shop)
    }
]