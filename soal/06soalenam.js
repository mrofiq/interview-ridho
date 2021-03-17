// Initial data
var initData = {
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

var soal06 = module.exports = {
  summaryData: function () {
    let total_items = initData.items.length
    let total_quantity = 0
    let total = 0

    for (var i = 0; i < total_items; i++) {
      const sub_total =  initData.items[i].price *  initData.items[i].quantity
      total_quantity +=  initData.items[i].quantity
      total += sub_total
      initData.items[i].sub_total = sub_total
    }

    return {
      ...initData,
      total_items,
      total_quantity,
      total: total
    }
  },
};

console.log(soal06.summaryData())