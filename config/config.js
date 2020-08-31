module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: 3306,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "liaCM345!",
    database: "tinysteps_db",
    host: "localhost",
    port: 3306,
    dialect: "mysql"
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
