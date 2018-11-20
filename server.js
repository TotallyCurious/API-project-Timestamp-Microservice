// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var moment = require('moment');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get("/api/timestamp/:date_string?", function (req, res) {
  var input = req.params.date_string;
  console.log('input: ',input);
  
  if(!input){
    var dateNow = new moment()
    var dateNowUnix = dateNow.format('x');
    dateNow = dateNow.format('ddd, D MMM YYYY hh:mm:ss').toString()+' GMT';    
    return res.json({unix:dateNowUnix,utc:dateNow});
  };
  
  if(input === (/\d{4}-\d{1,2}-\d{1,2}/g)){
  var date = moment().set(input);
  console.log(date);
  
  return res.json({unix:date.format('x'),utc:date.format('ddd, D MMM YYYY hh:mm:ss').toString()+' GMT'});
  }
  else{
      return res.json({error:"Invalid Date"});

  }
  
  
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});