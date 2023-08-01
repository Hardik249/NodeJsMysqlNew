console.log('config');
module.exports = {
  db: {
    database: process.env.DB_NAME || 'Demo',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    options: {
      dialect: process.env.DIALECT || 'mysql', // sqlite original
      host: process.env.HOST || 'localhost',
      // storage: './intraenvios.sqlite',
      port: process.env.PORT || 3306 // 8081 original
    }
  }
}