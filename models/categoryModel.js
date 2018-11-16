module.exports = {
  fields: {
    nodeid: 'uuid',
    category: {
      type: 'set',
      typeDef: 'text',
    },
    groupid: 'text',
    title: 'text',
    thumbnail: 'text',
    seo_link: 'text',
    createat: 'timestamp',
    createby: 'text',
    categoryIndex: 'int',
    meta_title: 'text',
    meta_tag: 'text',
    meta_description: 'text',
    solr_query: 'text',
  },
  key: ['nodeid'],
};
