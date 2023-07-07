// userController.test.js
const config = require('../../../test.config');
const { host, user, password, database } = config.database;

const products = require('../../products/productscontrollers.js'); // Assuming the users module is in the parent directory
// const ProductService = require('../../services/productservice');

// console.log(products.products);

// Test case 1: Testing the products function
test('products function returns products', async () => {
  // const userList = products.products();
  const productsList = await products.products;
  // console.log(productsList);
  // console.log(Array.isArray(productsList));
  expect(Array.isArray(productsList)).toBe(false);
  expect(productsList.length).toBeGreaterThan(0);
});


// // Test case 2: Testing the products by products ids array function
// // test('products function returns products by products ids array', async () => {
// describe('products', () => {
//   it('should return products based on product IDs', async () => {
//     let mockProductIds = [2, 3];

//     let req = {
//       query: {
//         // array: mockProductIds.join(',')
//         array: mockProductIds
//       }
//     }

//     // Mock response object
//     const res = {
//       // status: jest.fn().mockReturnThis(),
//       status: jest.fn(),
//       json: jest.fn(),
//     };
//     // const productsList = await products.products;
//     // expect(Array.isArray(productsList)).toBe(false);
//     // expect(productsList.length).toBeGreaterThan(0);

//     // console.log(await products.products(req, res));
//     // Call the controller function with the mock request and response objects
//     // await products.products(req, res);
//     await products.products;

//     // Assertions to validate the behavior of the controller function
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(jest.fn().mockReturnThis()).toHaveBeenCalledWith({
//       // status : "success products",
//       message : "Test api products success",
//       // data: expect.any(Array) // Assuming the response data is an array of products
//     }); 
//   });
// });
// // });



// Test case 2: Testing the products by products ids array function
test('products function returns product by product id params', async () => {
  // let req = {
  //   params: {
  //     id: 2
  //   }
  // }
  // const userList = products.products();
  // const product = await products.product(req);
  const product = await products.product;
  // console.log(product);
  // console.log(Array.isArray(product));
  expect(Array.isArray(product)).toBe(false);
  expect(product.length).toBeGreaterThan(0);
});
