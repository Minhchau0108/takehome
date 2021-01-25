# Front-end Engineering Challenge

## Requirements
 - Display top 10 selling products in order from most sold to least and the revenue of each product.

 ## Getting Started
 1. Use Redux "thunk" middleware for async data: fetch orders 

 2. Transform the data from the server to a format more conducive ('src/utils/'.)
 -  Calculate revenue each product/order 

Ex: {value: 1000, scale: 2} is equivalent to 1000 / 10^2 => 1000 / 100 => $10.00.
 ```
{
     order_count: 2
     vendor_price: {
         value: 111, 
         scale: 2
     }
 }
 product.revenue = product.order_count * (product.vendor_price.value / 10 ** product.vendor_price.scale)
 ```

  -  Create uniqueId for each product (to be convenient for find products and sum total revenue of each product from array of orders)
  ```
  products: [
      {name: 'WATER CHESTNUT  SLICED CANNED', category: 'DAIRY', product_id: 7},
      {name: 'CUP  FOIL 4 OZ 1', category: 'DRY GOODS', product_id: 7}
  ]
    product.uniqueId: product.category.concat(product.product_id),

  ```
3. The ```<TopListComponent>``` get orders from state.orders by using useSelector 
4. The ```<TopListComponent>``` has : 
- a State variable: topSaleList . 
- a useEffect with a function to find array of 10 selling products --> set this array into  topList State variable --> render 