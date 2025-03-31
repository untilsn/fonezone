# API Documentation

## Base URL
- Development: `http://localhost:5000/api`
- Production: `https://your-api.com/api`

## Authentication
### Register
- Method: `POST`
- Endpoint: `/auth/register`
- Body:
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "phone": "string"
}
```
- Response:
```json
{
  "success": true,
  "message": "Register successfully",
  "data": {
    "accessToken": "string",
    "user": {
      "id": "string",
      "name": "string",
      "email": "string",
      "role": "user"
    }
  }
}
```

### Login
- Method: `POST`
- Endpoint: `/auth/login`
- Body:
```json
{
  "email": "string",
  "password": "string"
}
```
- Response: Same as Register

### Forgot Password
- Method: `POST`
- Endpoint: `/auth/forgot-password`
- Body:
```json
{
  "email": "string"
}
```

### Admin Login
- Method: `POST`
- Endpoint: `/auth/admin/login`
- Body: Same as Login

## Client Routes

### Products
#### Get All Products
- Method: `GET`
- Endpoint: `/products`
- Query Parameters:
  - `page`: number
  - `limit`: number
  - `category`: string
  - `brand`: string
  - `search`: string
  - `sort`: string (price_asc, price_desc, newest)
  - `min_price`: number
  - `max_price`: number

#### Get Product Detail
- Method: `GET`
- Endpoint: `/products/:id`

#### Get Products by Category
- Method: `GET`
- Endpoint: `/products/category/:categoryId`

#### Search Products
- Method: `GET`
- Endpoint: `/products/search`
- Query Parameters:
  - `q`: string
  - `page`: number
  - `limit`: number

### Categories
#### Get All Categories
- Method: `GET`
- Endpoint: `/categories`

#### Get Category Detail
- Method: `GET`
- Endpoint: `/categories/:id`

#### Get Category Products
- Method: `GET`
- Endpoint: `/categories/:id/products`

### Orders
#### Create Order
- Method: `POST`
- Endpoint: `/orders`
- Body:
```json
{
  "items": [
    {
      "productId": "string",
      "quantity": number
    }
  ],
  "address": "string",
  "phone": "string",
  "paymentMethod": "string"
}
```

#### Get User Orders
- Method: `GET`
- Endpoint: `/orders`

#### Get Order Detail
- Method: `GET`
- Endpoint: `/orders/:id`

#### Cancel Order
- Method: `PUT`
- Endpoint: `/orders/:id/cancel`

### User Profile
#### Get Profile
- Method: `GET`
- Endpoint: `/user/profile`

#### Update Profile
- Method: `PUT`
- Endpoint: `/user/profile`
- Body:
```json
{
  "name": "string",
  "phone": "string",
  "address": "string"
}
```

#### Change Password
- Method: `PUT`
- Endpoint: `/user/password`
- Body:
```json
{
  "currentPassword": "string",
  "newPassword": "string"
}
```

### Wishlist
#### Get Wishlist
- Method: `GET`
- Endpoint: `/wishlist`

#### Add to Wishlist
- Method: `POST`
- Endpoint: `/wishlist/:productId`

#### Remove from Wishlist
- Method: `DELETE`
- Endpoint: `/wishlist/:productId`

### Reviews
#### Create Review
- Method: `POST`
- Endpoint: `/reviews/product/:productId`
- Body:
```json
{
  "rating": number,
  "comment": "string"
}
```

#### Get User Reviews
- Method: `GET`
- Endpoint: `/reviews/user`

#### Update Review
- Method: `PUT`
- Endpoint: `/reviews/:id`
- Body: Same as Create Review

#### Delete Review
- Method: `DELETE`
- Endpoint: `/reviews/:id`

### Blogs
#### Get All Blogs
- Method: `GET`
- Endpoint: `/blogs`
- Query Parameters:
  - `page`: number
  - `limit`: number
  - `category`: string

#### Get Blog Detail
- Method: `GET`
- Endpoint: `/blogs/:id`

#### Like Blog
- Method: `POST`
- Endpoint: `/blogs/:id/like`

#### Comment on Blog
- Method: `POST`
- Endpoint: `/blogs/:id/comment`
- Body:
```json
{
  "content": "string"
}
```

### Flash Sales
#### Get Active Flash Sales
- Method: `GET`
- Endpoint: `/flash-sales/active`

#### Get Flash Sale Detail
- Method: `GET`
- Endpoint: `/flash-sales/:id`

## Admin Routes

### Products Management
#### Create Product
- Method: `POST`
- Endpoint: `/admin/products`
- Body:
```json
{
  "name": "string",
  "description": "string",
  "price": number,
  "categoryId": "string",
  "brandId": "string",
  "stock": number,
  "images": ["string"]
}
```

#### Update Product
- Method: `PUT`
- Endpoint: `/admin/products/:id`
- Body: Same as Create Product

#### Delete Product
- Method: `DELETE`
- Endpoint: `/admin/products/:id`

### Orders Management
#### Get All Orders
- Method: `GET`
- Endpoint: `/admin/orders`
- Query Parameters:
  - `status`: string
  - `page`: number
  - `limit`: number

#### Update Order Status
- Method: `PUT`
- Endpoint: `/admin/orders/:id/status`
- Body:
```json
{
  "status": "string"
}
```

### Users Management
#### Get All Users
- Method: `GET`
- Endpoint: `/admin/users`

#### Update User Status
- Method: `PUT`
- Endpoint: `/admin/users/:id/status`
- Body:
```json
{
  "status": "active" | "blocked"
}
```

### Categories Management
#### Create Category
- Method: `POST`
- Endpoint: `/admin/categories`
- Body:
```json
{
  "name": "string",
  "description": "string"
}
```

#### Update Category
- Method: `PUT`
- Endpoint: `/admin/categories/:id`
- Body: Same as Create Category

#### Delete Category
- Method: `DELETE`
- Endpoint: `/admin/categories/:id`

## Common Response Format

### Success Response
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message here"
}
```

## Status Codes
- 200: OK
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Authentication
All protected routes require Bearer token in Authorization header: 