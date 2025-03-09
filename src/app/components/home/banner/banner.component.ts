import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  imports: [NgbCarouselModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  imageUrls: SafeResourceUrl[];

  constructor(private sanitizer: DomSanitizer) {
    const imageNames = ['banner1', 'banner2', 'banner3'];
    this.imageUrls = imageNames.map((imageName) =>
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/images/${imageName}.jpg`)
    );
  }
}
