var express = require('express');
var router = express.Router();
const pool = require("../db");

// router.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


router.get('/', async(req, res) => {

try{

  const alldogs = await pool.query("SELECT * FROM appschema.dogowner");
  res.json(alldogs.rows);
} catch (err) {
  console.error(err.message);
}

});


module.exports = router;
