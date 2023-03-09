# WesMilAdventure

This project was generated with [Angular CLI] version 15.2.1.
node version 18.12.1

## INSTALATION
npm install

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`.

## My thoughts 

1 - Navigation that includes a popup. Users can use the Browser buttons to navigate forward and backward.  
2 - The URL stores the application state, including the popup.  
3 - GraphQL calls were made using the Angular-Apollo library, which includes cache functionality.  
4 - I had to create an Angular interceptor to include the authorization token in the header, as there was an issue with Angular Apollo not accepting the header. (Reference: https://github.com/kamilkisiela/apollo-angular/issues/628)  
5 - I used Angular's built-in routes animation features to demonstrate my CSS skills, and Bootstrap for the rest of the design.  
6 - I used Angular's pipe feature to convert the currency to USD.  
7 - I used TakeShape as a headless CMS.  
8 - Regarding the "Grid of 3x other products from same category (you can query products using the slug from URL). Show the image, name and link to that product page" requirement, I decided not to implement it because the popup would be in front of the list.   However, I could have implemented the query here:  
query getProductListByCategory($_categoryId: ID!, $_productId: ID!) {  
  getProductList(  
    where: {AND: [{category: {_id: {eq: $_categoryId}}}, {id: {neq: $_productId}}]}  
  ) {  
    id  
    name  
    image {  
      url  
    }  
  }  
}  
