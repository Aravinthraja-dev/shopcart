import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service';
import { ProductDetails } from '../../Interface/product.interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgbDropdownModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @ViewChild('query') queryInput!: ElementRef; 

  mainMenuToggle: boolean = false;
  name: string = 'Shopcart'
  suggestions!: any;
  filteredSuggestions: any;
  searchQuery: any;
  cartCount: number = 0;


  constructor(private productService: ProductService, private router: Router) { }

  toggleMainMenu() {
    this.mainMenuToggle = !this.mainMenuToggle;
  }

  onFilter(input: string) {
    this.productService.getAllProducts().subscribe((products: ProductDetails[]) => {
      this.suggestions = products

      this.filteredSuggestions = input ? this.suggestions.filter((item:any) => item.title.toLowerCase().includes(input.toLowerCase())) : []
    })
  }

  ngOnInit(): void {
    this.productService.getCartCount().subscribe(count => {
      this.cartCount = count;
    });
  }

  selectSuggestion(suggestion: string, queryInput: HTMLInputElement) {
    this.searchQuery = suggestion;
    this.filteredSuggestions = [];
    queryInput.value = '';
  }

}
