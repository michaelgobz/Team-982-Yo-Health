const router = require('express').Router()
const sql =  require('mssql');

const config = {
    user: 'michaelG',
    password: 'leah@0949',
    server: 'hshospitalsystem.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'Clients',
    options: {
        encrypt: true
    }
}
sql.connect(config).catch(err => console.error(err));

    router.route('/patients').get((req,res)=>{
        sql.query('SELECT * FROM Patients').then(result => res.json(result))
    })

module.exports = router