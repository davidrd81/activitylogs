const mssql = require('mssql');

//configuracion de acceso base de datos
const URI = {
    server: "LOCALHOST\\SQLEXPRESS",
    database: "ActivityLogs",
    user: "admin",
    password: "Administrador2020",
    port: 1433
};

//conexion base de datos
mssql.connect(URI)
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

module.exports = mssql;