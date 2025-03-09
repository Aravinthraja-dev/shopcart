import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { ProductDetails } from '../../../shared/Interface/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

  cartItems: ProductDetails[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartItems = this.productService.cart;
  }

}
