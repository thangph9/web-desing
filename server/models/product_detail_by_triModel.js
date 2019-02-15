module.exports = {
  fields: {
    productid: 'uuid',
    amount: 'int',
    brand: 'text',
    price: 'float',
    sale: 'float',
    sale_price: 'float',
    createat: 'timestamp',
    start_sale: 'timestamp',
    end_sale: 'timestamp',
    createby: 'text',
    categoryid: 'uuid',
    color: 'text',
    thumbnail: 'text',
    seller: 'text',
    size: 'text',
    avatar: 'text',
    name_product: 'text',
    image_large: {
      type: 'set',
      typeDef: '<text>',
    },
    image_huge: {
      type: 'set',
      typeDef: '<text>',
    },
    image_small: {
      type: 'set',
      typeDef: '<text>',
    },
    desc_brand: {
      type: 'set',
      typeDef: '<text>',
    },
    desc_infomation: {
      type: 'set',
      typeDef: '<text>',
    },
    desc_materials_use: {
      type: 'set',
      typeDef: '<text>',
    },
    desc_size: {
      type: 'set',
      typeDef: '<text>',
    },
    seo_link: 'text',
  },
  key: [['productid']],
};
