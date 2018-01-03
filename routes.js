const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const Particle = require('particle-api-js');
const particle = new Particle();

// router.get('/',(req,res) => {
// 	console.log("thanks");
// 	res.send(200);
// })

let USERNAME = process.env.PARTICLE_USERNAME;
let PASSWORD = process.env.PARTICLE_PASSWORD;

router.get('/thisisaroutetogetaparticlephotontoken', (req, res) => {
    //get all the ToDo's from database and return them when pushed into an array --> set this.setState with it
    console.log('this is the particle USERNAME AND PASSWORD', USERNAME, PASSWORD);

    particle.login({username: USERNAME, password: PASSWORD})
    .then(data => {
      console.log('PARTICLE LOGIN COMPLETE');
      var token = data.body.access_token; // from result of particle.login
      console.log('PARTICLE TOKEN:', token);

      if (token) {
        res.send(token);
      } else {
        res.send("particle login failed")
      }

    })
    .catch(err => {
      console.log('ERROR:', err);
    })
})

module.exports = router;
