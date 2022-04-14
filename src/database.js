const knex = require('knex')({
    client: 'mysql',
    version: '5.7',
    connection: {
        host: '127.0.0.1',
        port : 3306,
        user: 'user',
        password: 'password',
        database: 'db'
    }
});

module.exports = knex