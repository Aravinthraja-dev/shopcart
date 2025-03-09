import { Component } from '@angular/core';
import { ProductDetails } from '../../../shared/Interface/product.interface';
import { ProductService } from '../../../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  products!: ProductDetails;
  buttonText: string = 'Add to Cart';
  isAdded: boolean = false;
  id!: number
  quantity: number = 1; // Initial quantity

  constructor(private route: ActivatedRoute, private productService: ProductService) { 
    this.id= this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    this.productService.getProductById(this.id).subscribe(product => {
      this.products = product;
    });
  }

  addToCart(product: ProductDetails) {
    this.productService.addToCart(product);
    this.buttonText = 'Go to Cart';
    this.isAdded = true;
  }

  increaseQuantity() {
    this.quantity += 1;
  }

  // Decrease quantity (minimum 1)
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }
}
