
const sql = require('mssql');

//Function to execute query

const executeSP = async (res, query) =>{
    try{    
    // create Request object
    const request = new sql.Request();
    // query to the database
    const result = await request.execute(query);
        res.json(result.recordset); // Result in JSON format
        }catch(error){console.log(`se produce el siguiente error:${error}`)}
};

//GET API Stored Procedure GetAllBinnacle
const getBinnacle = (req, res) => {
        const query = 'SP_GetAllBinnacle';
        executeSP (res, query)
};

//GET API by Id
const getBinnacleById = async (req, res) => {
    const {id} = req.params;
    const request = new sql.Request();
    request.input('BinnacleId', sql.Int, id);
    const result = await request.execute('SP_GetBinnacleById');
        res.json(result.recordset); // Result in JSON format
};

//POST API
const createBinnacle = async (req, res) => {
    try{
    const request = new sql.Request();
    request.input('Id_LastOperator', sql.Int, req.body.Id_LastOperator);
    request.input('Id_NewOperator', sql.Int, req.body.Id_NewOperator);
    request.input('Id_Schedule', sql.Int, req.body.Id_Schedule);
    request.input('News', sql.NVarChar(), req.body.News);
    request.input('SpecialProcess', sql.NVarChar(), req.body.SpecialProcess);
    request.input('PendingProcess', sql.NVarChar(), req.body.PendingProcess);
    console.log(request.parameters);
    const result = await request.execute('SP_CreateBinnacle');
        res.json(result.recordset); // Result in JSON format
    }catch(error){console.log(`se produce el siguiente error:${error}`)}
};

//PUT API
const editBinnacle = async (req, res) => {
    try{
    const request = new sql.Request();
    request.input('BinnacleId', sql.Int, req.params.id);
    request.input('Id_LastOperator', sql.Int, req.body.Id_LastOperator);
    request.input('Id_NewOperator', sql.Int, req.body.Id_NewOperator);
    request.input('Id_Schedule', sql.Int, req.body.Id_Schedule);
    request.input('News', sql.NVarChar(4000), req.body.News);
    request.input('SpecialProcess', sql.NVarChar(4000), req.body.SpecialProcess);
    request.input('PendingProcess', sql.NVarChar(4000), req.body.PendingProcess);
    console.log(request.parameters);
    const result = await request.execute('SP_editBinnacle');
        res.json(result.recordset); // Result in JSON format
    }catch(error){console.log(`se produce el siguiente error:${error}`)}
};

// DELETE API
const deleteBinnacleById = async (req, res) =>{
    try{
    // create Request object
    const request = new sql.Request();
    const query = `DELETE FROM [Binnacle] WHERE Id = ${req.params.id}`;
    // query to the database
    const result = await request.query(query);
        res.json(result.recordset);
    }catch(error){console.log(`se produce el siguiente error:${error}`)}
};

module.exports = {
    getBinnacle,
    getBinnacleById,
    createBinnacle,
    editBinnacle,
    deleteBinnacleById
}