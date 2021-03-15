// Initial data
var data = {
  "first_name": "Jhon",
  "last_name": "Doe",
  "address": "JL. Raya Merdeka Raya 01 02",
  "items": [
    {
      "id": 1,
      "product_id": 1,
      "quantity": 25,
      "price": 2500
    },
    {
      "id": 2,
      "product_id": 2,
      "quantity": 350,
      "price": 4900
    },
    {
      "id": 3,
      "product_id": 3,
      "quantity": 5,
      "price": 5000000
    },
    {
      "id": 4,
      "product_id": 4,
      "quantity": 2,
      "price": 25000000
    }
  ]
}



// Expected:
var data = {
  "name": "Jhon Doe",
  "address": "JL. Raya Merdeka Raya 01 02",
  "items": [
    {
      "id": 1,
      "product_id": 1,
      "quantity": 25,
      "price": 2500,
      "sub_total": 62500
    },
    {
      "id": 2,
      "product_id": 2,
      "quantity": 350,
      "price": 4900,
      "sub_total": 1715000
    },
    {
      "id": 3,
      "product_id": 3,
      "quantity": 5,
      "price": 5000000,
      "sub_total": 25000000
    },
    {
      "id": 4,
      "product_id": 4,
      "quantity": 2,
      "price": 25000000,
      "sub_total": 50000000
    }
  ],
  "total_items": 4,
  "total_quantity": 382,
  "total": 76777500
}