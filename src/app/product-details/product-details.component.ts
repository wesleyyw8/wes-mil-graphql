import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));
    console.log(this.route.snapshot.paramMap.get('productId'));
  }
  
  ngOnInit(): void {
  }
}
