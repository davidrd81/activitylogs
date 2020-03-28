const sql = require('mssql');


//Function to execute query
const executeQuery = async (res, query) =>{
    // create Request object
    const request = new sql.Request();
    // query to the database
    const recordset = await request.query(query);
        res.json(recordset);
};

//GET API
const getUsers = (req, res) => {
    const query = "select * from Operator";
    executeQuery (res, query);
};

//GET API by Id
const getUserById = (req, res) => {
    var query = "select * from [Operator] WHERE Id=" + req.params.id;
    executeQuery (res, query);
};

//POST API
const createUser = (req, res) => {
    var query = "INSERT INTO Operator (CC,FirstName,LastName,Email,UserName,Id_Area) VALUES (req.body.CC,req.body.FirstName,req.body.LastName,req.body.Email,req.body.UserName,req.body.Id_Area)";
    executeQuery (res, query);
};

//PUT API
const editUser = (req, res) => {
    var query = "UPDATE [Operator] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
    executeQuery (res, query);
};

// DELETE API
const deleteUser = (req, res) => {
    var query = "DELETE FROM [Operator] WHERE Id=" + req.params.id;
    executeQuery (res, query);
};


module.exports = {
    getUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser
}