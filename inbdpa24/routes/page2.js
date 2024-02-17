var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('page2', { title: 'BDPA Page 2' });
});

//POST registration page
router .post('/', function( req, res, next) { 
  res.render('postregister', 
  {
    title: 'post Registration', 
    username: req.body.username, 
    email: req.body.emailadd,
    salt: 'salt goes here ',
    key:'key goes here'
  }
  )
}); 


module.exports = router;
