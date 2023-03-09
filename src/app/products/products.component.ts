import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Product } from '../models/product';
import { Constants } from './../constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList: Product[] = [];
  public categoryId: any;
  public constants = Constants;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id');

    this.apiService
      .getProductsByCategory(this.categoryId)
      .valueChanges.subscribe((result: any) => {
        this.productList = result.data.getCategory.products.items;
      });
  }
}
