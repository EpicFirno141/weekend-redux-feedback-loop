const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('POST /api/form');
    const info = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)`;
    pool.query(queryText, [info.feeling, info.understanding, info.support, info.comments]).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log('Error POST /api/form', error)
        res.sendStatus(500);
    });
});

module.exports = router;