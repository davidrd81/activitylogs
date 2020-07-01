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
const getArea = (req, res) => {
    let query = "select * from Area";
    executeQuery(res, query);
};

//GET API by Id
const getAreaById = async(req, res) => {
    try{
    const {id} = req.params;
    const query = `select * from [Area] WHERE id = ${id}`;
    // create Request object
    const request = new sql.Request();
    // query to the database
    const result = await request.query(query);
        res.json(result.recordset[0]);
    }catch(error){console.log(`se produce el siguiente error:${error}`)}
};

//POST API
const createArea = (req, res) => {
    let query = `INSERT [Area] (Area) VALUES (
    ${req.body.Area}`;
    console.log(query);
    executeQuery (res, query);
};

//PUT API
const editArea = (req, res) => {
    let query = `UPDATE [Area] SET 
    Area = ${req.body.Area}`;
    console.log(query);
    executeQuery (res, query);
};

// DELETE API
const deleteArea = (req, res) => {
    let query = `DELETE FROM [Area] WHERE Id = ${req.params.id}`;
    console.log(query);
    executeQuery (res, query);
};

module.exports = {
    getArea,
    getAreaById,
    createArea,
    editArea,
    deleteArea
}