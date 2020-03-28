
const sql = require('mssql');


//GET API Stored Procedure GetAllBinnacle
const getBinnacle = (req, res) => {
        var request = new sql.Request();
        request.execute('SP_GetAllBinnacle', function(err, recordsets, returnValue, affected) {
            if(err) console.log(err);
            res.json(recordsets); // Result in JSON format
        });
}   

module.exports = {
    getBinnacle
}