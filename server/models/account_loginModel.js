module.exports = {
  fields: {
    username: 'text',
    enabled: 'boolean',
    password: 'text',
    password_hash_algorithm: 'text',
    password_salt: 'text',
    rule: 'text',
    user_id: 'uuid',
  },
  key: ['username'],
};
