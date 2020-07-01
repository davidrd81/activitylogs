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
const getSchedule = (req, res) => {
    let query = "select * from Schedule";
    executeQuery(res, query);
};

//GET API by Id
const getScheduleById = async(req, res) => {
    try{
    const {id} = req.params;
    const query = `select * from [Schedule] WHERE id = ${id}`;
    // create Request object
    const request = new sql.Request();
    // query to the database
    const result = await request.query(query);
        res.json(result.recordset[0]);
    }catch(error){console.log(`se produce el siguiente error:${error}`)}
};

//POST API
const createSchedule = (req, res) => {
    let query = `INSERT [Schedule] (Schedule) VALUES (
    ${req.body.Schedule}`;
    console.log(query);
    executeQuery (res, query);
};

//PUT API
const editSchedule = (req, res) => {
    let query = `UPDATE [Area] SET 
    Schedule = ${req.body.Schedule}`;
    console.log(query);
    executeQuery (res, query);
};

// DELETE API
const deleteSchedule = (req, res) => {
    let query = `DELETE FROM [Schedule] WHERE Id = ${req.params.id}`;
    console.log(query);
    executeQuery (res, query);
};

module.exports = {
    getSchedule,
    getScheduleById,
    createSchedule,
    editSchedule,
    deleteSchedule
}