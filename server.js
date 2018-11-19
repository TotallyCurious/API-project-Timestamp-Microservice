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
  
  
  if(!input){
    // console.log('input: ',input);
    var dateNow = new moment();
    dateNow = dateNow.toString();
    
    return res.json({unix:'eg',utc:dateNow});
  };
  
  var date = moment(input,'ddd, DD MMM YYYY hh:mm:ss');
  console.log(date);
  
  
  
  
  
//   res.json({
//     info: 'timestamp',
//     input:req.params.date_string,
//     output:timeNow
//   });
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});