import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private apollo: Apollo) {}

  getCategories(): any {
    return this.apollo.watchQuery({
      query: gql`
        {
          getCategoryList {
            items {
              _id
              name
              products {
                total
              }
              slug
            }
            total
          }
        }
      `
    });
  }

  getProductsByCategory(id: string): any {
    return this.apollo.watchQuery({
      query: gql`
        query ($id: ID!) {
          getCategory(_id: $id) {
            _id
            name
            products {
              items {
                _id
                description
                name
                price
                slug
                image {
                  title
                  path
                }
              }
              total
            }
            slug
          }
        }
      `,
      variables: {
        id
      }
    });
  }

  getProductById(_id: string): any {
    return this.apollo.watchQuery({
      query: gql`
        query ($_id: ID!) {
          getProduct(_id: $_id) {
            description
            image {
              title
              path
            }
            name
            price
            slug
          }
        }
      `,
      variables: {
        _id
      }
    });
  }
}
