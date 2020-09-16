var express = require('express');
var router = express.Router();
const pool = require("../db");


//create a new dog

router.post('/', async(req, res) => {
//console.log("hello");
try{

//remmeber the curly braces is a way to add .firstname to the end of the right side
  const {firstname} = req.body.newDog;
  //console.log(firstname);
  const {lastname} = req.body.newDog;
  //console.log(lastname);
  const {email} = req.body.newDog;
  const {phonenumber} = req.body.newDog;
  const {age} = req.body.newDog;
  const {gender} = req.body.newDog;
  const {aboutme} = req.body.newDog;

  const newdogOwner = await pool.query("INSERT INTO appschema.dogowner (firstname, lastname, email, phonenumber, age, gender, aboutme) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
  [firstname, lastname, email, phonenumber, age, gender, aboutme]);
  res.json(newdogOwner);
  } catch (err) {
  console.error(err.message);
                }

  });




module.exports = router;
