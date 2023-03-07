import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent implements OnInit{
  rates: any[] = [];
  loading = true;
  error: any;
  constructor(private apollo: Apollo) {}
  
  ngOnInit(): void {
    this.apollo
    .watchQuery({
      query: gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      this.rates = result.data?.rates;
      this.loading = result.loading;
      this.error = result.error;
    });
  }
}
