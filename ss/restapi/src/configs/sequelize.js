require('dotenv').config()

if (process.env.NODE_ENV !== 'production') {
  require('@babel/register')
}

const baseDbSetting = {
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  timezone: '+09:00',
  dialect: 'postgres', //뭐라 해야하지... pg? postgre? postgresql? //https://sequelize.org/v5/manual/dialects.html 일단 여길 참조..
  pool: {
    max: 100,
    min: 0,
    idle: 10000
  },
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true
  }
}

module.exports = {
  production: Object.assign({
      database: process.env.DB_NAME,
      logging: false
    }, baseDbSetting),

  development: Object.assign({
      database: process.env.DB_DEV,
      logging: true
    }, baseDbSetting),

  test: Object.assign({
      database: process.env.DB_TEST,
      logging: false
    }, baseDbSetting)
}