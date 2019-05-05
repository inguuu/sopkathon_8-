var express = require('express');
var router = express.Router();

let AWS = require("aws-sdk");

AWS.config.loadFromPath(__dirname + "/../config/awsconfig.json");
let s3 = new AWS.S3();


/* GET home page. */
router.use('/signin',require('./signin'));
router.use('/signup',require('./signup'));
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/signin',require('./singin'));

module.exports = router;
