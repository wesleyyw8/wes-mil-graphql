import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Category } from '../models/category';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public categories: Category[] = [];

  constructor(
    private apollo: Apollo,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.router.navigate([{ outlets: { popup: null } }]);

    this.apiService.getCategories().valueChanges.subscribe((result: any) => {
      this.categories = result.data.getCategoryList.items;
    });
  }
}
