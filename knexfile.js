module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/lapse'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/lapse_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};