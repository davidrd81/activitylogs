const sql = require('mssql');


//Function to execute query

const executeQuery = async (res, query) =>{
    try{
    // create Request object
    const request = new sql.Request();
    // query to the database
    const result = await request.query(query);
        res.json(result.recordset);
    }catch(error){console.log(`se produce el siguiente error:${error}`)}
};

//GET API
const getUsers = (req, res) => {
    let query = "select * from Operator";
    executeQuery(res, query);
};

//GET API by Id
const getUserById = async(req, res) => {
    const {id} = req.params
    const query = `select * from [Operator] WHERE id = ${id}`;
    executeQuery(res, query);
};

//POST API
const createUser = (req, res) => {
    let query = `INSERT [Operator] (CC,FirstName,LastName,Email,UserName,Id_Area) VALUES (
    ${req.body.CC},    
    '${req.body.FirstName}',
    '${req.body.LastName}',
    '${req.body.Email}',
    '${req.body.UserName}',
    ${req.body.Id_Area})`;
    console.log(query);
    executeQuery (res, query);
};

//PUT API
const editUser = (req, res) => {
    let query = `UPDATE [Operator] SET 
    CC = ${req.body.CC},
    FirstName = '${req.body.FirstName}',
    LastName = '${req.body.LastName}',
    Email = '${req.body.Email}',
    UserName = '${req.body.UserName}',
    Id_Area = ${req.body.Id_Area}
    WHERE Id = ${req.params.id}`;
    console.log(query);
    executeQuery (res, query);
};

// DELETE API
const deleteUser = (req, res) => {
    let query = `DELETE FROM [Operator] WHERE Id = ${req.params.id}`;
    console.log(query);
    executeQuery (res, query);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser
}