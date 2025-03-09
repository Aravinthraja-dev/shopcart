import { Injectable } from '@angular/core';
import { Categories, ProductDetails } from '../Interface/product.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = 'https://fakestoreapi.com/products';
  private categoryURL = 'https://fakestoreapi.com/products/categories';
  public cart: ProductDetails[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  private searchSubject = new Subject<string>();
  searchObservable$ = this.searchSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get<ProductDetails[]>(this.baseURL);
  }

  getAllCategory(): Observable<any>{
    return this.http.get<Categories>(`${this.categoryURL}`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<ProductDetails[]>(`${this.baseURL}/${id}`);
  }

  addToCart(product: ProductDetails) {
    this.cart.push(product);
    this.cartCount.next(this.cart.length);
  }

  getCartCount():  Observable<number> {
    return this.cartCount.asObservable();
  } 

  emitSearch(query: string): void {
    this.searchSubject.next(query);
  }
}
