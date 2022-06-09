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

router.post('/', (req,res) =>{
    const queryText = `
        INSERT INTO "list" ("name", "quantity", "unity", "purchaseStatus")
        VALUES ($1, $2, $3, $4)`
    pool.query(queryText, [req.body.name, req.body.quantity, req.body.unity, false])
        .then(res =>{
            console.log('list post success');
            res.sendStatus(201);
        })
        .catch(err =>{
            console.log('err in post to list', err);
            res.sendStatus(500);
        })
})

router.put('/buy-item/:id', (req,res) =>{
    const queryText = `
    UPDATE "list"
    SET "purchaseStatus" =$2
    WHERE id =$1`
    

    pool.query(queryText, [req.params.id, true])
        .then(() =>{
            console.log('buy item success');
            res.sendStatus(201)
        })
        .catch((err) =>{
            console.log('buy item failed', err);
            res.sendStatus(500);
        })


                        
})


module.exports = router;