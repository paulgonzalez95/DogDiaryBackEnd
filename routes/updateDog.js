var express = require('express');
var router = express.Router();
const pool = require("../db");



router.put('/:id', async(req, res) => {

  const id = req.params.id;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  const age = req.body.age;
  const gender = req.body.gender;
  const aboutme = req.body.aboutme;

try{
  const updateDog = await pool.query(

  "UPDATE appschema.dogowner SET (firstname, lastname, email, phonenumber, age, gender, aboutme) = ($1, $2, $3, $4, $5, $6, $7) WHERE dogowner_id = $8",
  [firstname, lastname, email, phonenumber, age, gender, aboutme, id ]);
  res.json(updateDog);
    } catch (err) {
      console.error(err.message);
    }

});


module.exports = router;
