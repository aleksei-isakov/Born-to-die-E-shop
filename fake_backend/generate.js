module.exports = function () {
  //required modules
  var faker = require('faker');
  var _ = require('lodash');
  //constants
  const orderStatuses = [
    'WATING_FOR_PAYMENT',
    'PAID',
    'DELIVERED',
    'CANCELLED'
  ];
  const userRoles = ['ADMIN', 'SELLER', 'CONSUMER', 'GUEST'];

  //functions
  function getRandomInt(max, min = 0) {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);

    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
  }

  //data
  const users = [
    {
      id: '64defdaf-73f8-4043-b1b7-2e7317bc1bc7',
      //P@ssw0rd!
      password: '$2a$10$hZv65yFoK/7uSD1i54Oa/OBptcqSn/HfMddpac53.m61GQZVbs5TG',
      email: 'admin@test.com',
      firstName: 'Admin',
      lastName: 'Adminson',
      birthDate: faker.date.past(),
      role: 'ADMIN',
      phoneNumber: '+79119229222',
      gender: 'male',
      cart: {
        products: [],
        totalQuantity: 0,
        totalPrice: 0
      },
      createdAt: faker.date.past(),
      updatedAt: ''
    },
    {
      id: '341fa497-c9cd-429f-ad72-bc533c61b097',
      //D0ntBothermMe!
      password: '$2a$10$.rkR4KOQh6c9Y3iHqSsjPuK/vC9EOSWzqE4QPkfvBRR2DYyy3fOy2',
      email: 'seller@test.com',
      firstName: 'Seller',
      lastName: 'Annoyings',
      birthDate: faker.date.past(),
      role: 'SELLER',
      cart: {
        products: [],
        totalQuantity: 0,
        totalPrice: 0
      },
      createdAt: faker.date.past(),
      updatedAt: ''
    },
    {
      id: 'eca77e35-321f-4ffa-8016-50ac645105dd',
      //ShutUp&TakeMyM0ney
      password: '$2a$10$5qNZKudXqmfdu.HL1L3s3.rvRTXJaItP24dxsZJoKSG5va5aKN2PS',
      email: 'consumer@test.com',
      firstName: 'Consumer',
      lastName: 'Rich',
      birthDate: faker.date.past(),
      role: 'CONSUMER',
      cart: {
        products: [],
        totalQuantity: 0,
        totalPrice: 0
      },
      createdAt: faker.date.past(),
      updatedAt: ''
    },
    {
      id: '736126c9-2196-45db-8883-83b0741eea2b',
      //W3llcome!
      password: '$2a$10$nlqjdlbJ0XccGdhzSBsS8epuN7NPFZPTwfJlkyCUIQhgqY0sMGUA6',
      email: 'guest@test.com',
      firstName: 'Guest',
      lastName: 'Dear',
      birthDate: faker.date.past(),
      role: 'GUEST',
      cart: {
        products: [],
        totalQuantity: 0,
        totalPrice: 0
      },
      createdAt: faker.date.past(),
      updatedAt: ''
    }
  ];
  const categories = _.times(10, function () {
    return {
      id: faker.datatype.uuid(),
      name: faker.lorem.word(),
      description: faker.lorem.sentence(),
      createdAt: faker.date.past(),
      updatedAt: ''
    };
  });
  const products = _.times(100, function () {
    const productInfo = {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      category: categories[getRandomInt(categories.length)],
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price()),
      images: [
        faker.image.imageUrl(),
        faker.image.imageUrl(),
        faker.image.imageUrl()
      ],
      createdAt: faker.date.past(),
      updatedAt: '',
      feedbacks: []
    };

    return productInfo;
  });
  const orders = _.times(20, function () {
    const randomProducts = _.times(getRandomInt(5, 1), function () {
      const randomProduct = products[getRandomInt(products.length)];
      const randomCategory = categories[getRandomInt(categories.length)];

      return {
        originalProductId: randomProduct.id,
        categoryId: randomCategory.id,
        price: randomProduct.price
      };
    });
    const totalPrice = randomProducts.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);
    const status = orderStatuses[getRandomInt(orderStatuses.length)];
    const createdAt = faker.date.past();
    const deliveredAt =
      status === 'DELIVERED' ? faker.date.between(createdAt, new Date()) : '';

    return {
      id: faker.datatype.uuid(),
      products: randomProducts,
      status,
      deliveryPrice: totalPrice + parseFloat(faker.commerce.price()),
      totalPrice,
      createdAt,
      deliveredAt,
      updatedAt: ''
    };
  });
  const addresses = [];
  const cart = [];

  return {
    users,
    products,
    categories,
    orders,
    addresses,
    cart
  };
};
