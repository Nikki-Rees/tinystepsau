module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.PORT,
    dialect: "mysql"
  },
  test: {
    username: process.env.LOCAL_USERNAME,
    password: process.env.LOCAL_PASSWORD,
    database: process.env.LOCAL_DATABASE,
    host: process.env.LOCAL_HOST,
    port: process.env.PORT,
    dialect: "mysql"
  },
  production: {
    connection: process.env.JAWSDB_URL,
    dialect: "mysql"
  }
};
