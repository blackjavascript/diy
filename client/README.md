This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

React part of this project is created from https://github.com/sumanchalki/shopping-cart-react-redux.

<h4>Layout Structure (ref. BasePage component) -</h4>

```
<Header />
<NavContainer />
  {pageComponent}
<Footer />
```

<h4>Pages -</h4>
<ol>
  <li>Home / Product Listing page - (Home: Can add to cart from here)</li>
  <li>Product Details page (ProductDetailsPage: Can add to cart from here)</li>
  <li>Shopping Cart page (ShoppingCart: Can update cart from here. Only quantity can be updated)</li>
</ol>

<h4>Component Structure for 1.</h4>

```
Header
NavContainer (Container) -> NavBar
                         -> NavCartCount
Home -> ProductList (Container) -> ProductListSummary
                                -> ProductDetailSummary -> AddToCart
                                                        -> ReadMore
                                -> Pagination
Footer
```

<h4>Component Structure for 2.</h4>

```
Header
NavContainer (Container) -> NavBar
                         -> NavCartCount
ProductDetailsPage -> ProductDetails (Container) -> AddToCart
Footer
```

<h4>Component Structure for 3.</h4>

```
Header
NavContainer (Container) -> NavBar
                         -> NavCartCount
CartList (Container) -> CartItem -> CartUpdateForm
                     -> CartTotal
Footer
```

<h4>Reducers -</h4>
<ol>
  <li>cartReducer</li>
</ol>

<h4>Actions -</h4>
<ol>
  <li>ADD_TO_CART</li>
  <li>REMOVE_FROM_CART</li>
  <li>UPDATE_CART</li>
</ol>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
