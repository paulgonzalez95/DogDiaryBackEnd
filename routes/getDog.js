var express = require('express');
var router = express.Router();
const pool = require("../db");



router.get('/:id', async(req, res) => {

  const {id} = req.params;
try{

  const getDog = await pool.query("SELECT * FROM appschema.dogowner WHERE dogowner_id = $1", [id]);
  res.json(getDog.rows[0]);
} catch (err) {
  console.error(err.message);
}

});


module.exports = router;
