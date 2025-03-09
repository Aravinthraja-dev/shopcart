import { Component } from '@angular/core';
import { Categories, ProductDetails } from '../../../shared/Interface/product.interface';
import { ProductService } from '../../../shared/services/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-product-list',
  imports: [RouterModule, CurrencyPipe, TitleCasePipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products: ProductDetails[] = [];
  filteredProduct: ProductDetails[] = [];
  categories: Categories = [];
  category!: string | null;
  currentRating!: number;


  constructor(private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.productService.getAllProducts().pipe(
      switchMap(product => {
        this.products = product;
        this.filteredProduct = product;
        return this.router.queryParamMap;
      })
    ).subscribe(params => {
      this.category = params.get('category');
      this.filteredProduct = this.category ? 
        this.products.filter(p => p.category === this.category) : 
        this.products;
    });
    this.getAllCategories();
  }

  getAllCategories():void{
    this.productService.getAllCategory().subscribe(
      (data) => {
        this.categories = data;
      }
    )
  }

  addToCart(product: any) {
    this.productService.addToCart(product);
  }
}
