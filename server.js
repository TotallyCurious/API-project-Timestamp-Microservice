// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

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
  
    if(!input){
    return res.json({unix:'eg',utc:new Date().toString("ddd, dd MMM yyyy HH:mm:ss GMT")});
    };

  console.log(req.params.date_string.length);
  var input = req.params.date_string.split('-');
  console.log(Date.parse(input));
  
  var timeNow = new Date(input[0],input[1]-1,input[2]).toString();
  console.log(timeNow);
  
  
  res.json({
    info: 'timestamp',
    input:req.params.date_string,
    output:timeNow
  });
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});