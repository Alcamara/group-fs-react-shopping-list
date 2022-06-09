const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM list`;
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('Error failed to GET list', error)
        res.sendStatus(500);
    });
});

//This is the PUT route 
router.put('/', (req, res) => {
    const sqlQuery = `
        UPDATE list
        SET "purchaseStatus" = $1;
    `;
    const sqlParams = [
        false    
    ];
    pool.query(sqlQuery, sqlParams)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(`PUT failed, ${err}`);
            res.sendStatus(500);
        });
}); 

//This is the DELETE route 
router.delete('/', (req, res) => {
    const sqlQuery = `
        DELETE * FROM list
    `;
    pool.query(sqlQuery)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(`DELETE failed, ${err}`);
            res.sendStatus(500);
        });
}); 


module.exports = router;