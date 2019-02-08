module.exports = {
  fields: {
    orderid: 'uuid',
    createat: 'timestamp',
    list_product: {
      type: 'frozen',
      typeDef: 'list<map<text,text>>',
    },
    order_by: 'text',
    status: 'boolean',
    phone: 'text',
    address: 'text',
    total_price: 'int',
  },
  key: ['orderid'],
};
