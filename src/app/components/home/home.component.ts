import { Component } from '@angular/core';
import { ProductDetailComponent } from '../shop/product-detail/product-detail.component';
import { BannerComponent } from './banner/banner.component';
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-homw',
  imports: [BannerComponent, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  

}
