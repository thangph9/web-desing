module.exports = {
  fields: {
    artid: 'uuid',
    content: 'text',
    createat: 'timestamp',
    expired: {
      type: 'map',
      typeDef: 'timestamp',
    },
    image: 'text',
    short_desc: 'text',
    title: 'text',
  },
  key: ['artid'],
};
