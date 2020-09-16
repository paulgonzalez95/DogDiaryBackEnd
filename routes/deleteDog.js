var express = require('express');
var router = express.Router();
const pool = require("../db");



router.delete('/:id', async(req, res) => {

  const id = req.params.id;
try{

  const deleteDog = await pool.query("DELETE FROM appschema.dogowner WHERE dogowner_id = $1", [id]);
  res.json(deleteDog);
} catch (err) {
  console.error(err.message);
}

});

module.exports = router;
