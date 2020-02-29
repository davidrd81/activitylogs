const mssql = require('mssql');

const URI = {
    server: "DESKTOP-CH2O21Q\\SQLEXPRESS",
    database: "ActivityLogs",
    user: "admin",
    password: "Administrador2020",
    port: 1433
};

mssql.connect(URI)
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

module.exports = mssql;

