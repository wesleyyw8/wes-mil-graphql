import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Product } from '../models/product';
import { Constants } from './../constants';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  private productId: string;
  public constants = Constants;
  public product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {
    this.productId = this.route.snapshot.paramMap.get('productid') || '';
  }

  ngOnInit(): void {
    this.apiService
      .getProductById(this.productId)
      .valueChanges.subscribe((result: any) => {
        this.product = result.data.getProduct;
      });
  }
  onClose(): void {
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
