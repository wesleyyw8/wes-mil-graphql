import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Product } from '../models/product';
import { Constants } from './../constants';
import { interval, timer } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  private productId: string;
  public constants = Constants;
  public product: Product | undefined;
  public countDownLabel = '';

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
    this.countDown();
  }
  onClose(): void {
    this.router.navigate([{ outlets: { popup: null } }]);
  }

  private countDown() {
    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0
    );
    const countdown$ = interval(1000).pipe(
      map(() => midnight.getTime() - Date.now()),
      takeUntil(timer(midnight))
    );

    countdown$.subscribe((timeLeft) => {
      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds: string | number = Math.floor(
        (timeLeft % (1000 * 60)) / 1000
      );

      this.countDownLabel = `${this.formatTime(hours)}:${this.formatTime(
        minutes
      )}:${this.formatTime(seconds)}`;
    });
  }

  private formatTime(num: any) {
    return num.toString().padStart(2, '0');
  }
}
