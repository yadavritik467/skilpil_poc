import { Component } from '@angular/core';
import { bannerSchema, bannerSchema_1 } from 'src/app/schema/homebanner.schema';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { customerSchema } from 'src/app/schema/customer.schema';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent {
 
  banners:any[] = bannerSchema;
  banners_1:any[] = bannerSchema_1;
  customers:any[] = customerSchema;
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
