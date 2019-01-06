module.exports = {
  fields: {
    optid: 'uuid',
    productid: 'uuid',
    price: 'float',
    amount: 'float',
    images: {
      type: 'set',
      typeDef: '<text>',
    },
    attrs: {
      type: 'map',
      typeDef: '<text,text>',
    },
  },
  key: ['productid', 'optid'],
};
