module.exports = {
  fields: {
    catid: 'uuid',
    productid: 'uuid',
    groupby: 'text',
    name: 'text',
    orderby: 'int',
  },
  key: ['catid', 'productid'],
};
