// Importing Packages
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mysql = require('mysql');
var unirest = require("unirest");
var moment = require('moment');
var nodemailer = require('nodemailer');

//Express Setup
app.use(bodyParser.urlencoded({ extended: true })); 

// Connecting database and checking connectivity
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  else{
  console.log("Connected!");
}});

// Setting Message and NodeMailer API
moment().format();
var request = unirest("POST", "https://www.fast2sms.com/dev/bulk");
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abc@xyz.com',  //Replace with Email
    pass: '******'        //Replace with Password
  },
  tls: {
        rejectUnauthorized: false
    }
});


// Checkin Route
app.get('/checkin', (req, res) => {
  var mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
  var sql = "INSERT INTO visitors (name, email,phone,hname,hemail,hphone,checkin) VALUES ( '" + req.body.vname + "','" + req.body.vemail + "','" + req.body.vphone + "','"+req.body.hname + "','" + req.body.hemail + "','" + req.body.hphone +"','"+mysqlTimestamp+ "')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  
  //Sending Mail
  var txtt="Person with the following details is here to visit you \nName "+req.body.fname + " Email "+req.body.lname + " phone "+req.body.pname;
  var mailOptions = {
    from: 'abc@xyz.com',          //Replace with Email
    to: req.body.hemail,          //Host email address
    subject: 'New Visitor is here',
    text: ` ${txtt} `,       
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  // Sending Message
  reqq.headers({
    "authorization": "YOUR_API_KEY",  //Enter your API KEY
    "cache-control": "no-cache"
  });
  reqq.query({
    "sender_id": "FSTSMS",
    "message": ` ${txtt} `,
    "language": "english",
    "route": "p",
    "numbers": req.body.hphone, // host phone number
  });
  reqq.end(function (ress) {
    if (ress.error) throw new Error(ress.error);

    console.log(ress.body);
  });

  // Redirecting to Homepage
  res.redirect("index.html");
});

// Checkout Route
app.get('/checkout', (req, res) => {
  var adr = req.body.vphone;
  var mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
  
  // Updating Records
  var sql = 'UPDATE visitors SET checkout = '+ mysql.escape(mysqlTimestamp) +' WHERE phone = ' + mysql.escape(adr);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  // Notifying User
  var sql = 'SELECT * FROM visitors WHERE phone = ' + mysql.escape(adr);
  con.query(sql, function (err, result) {
    if (err) throw err;

    // Emailing user
    var txtt="Host Details from todays's Visit\n Name "+result[0]["hname"] + " Email "+result[0].hemail + " phone "+result[0].hphone + " Checkin "+result[0].checkin + " Checkout "+result[0].checkout;
    var too= result[0].email;
    var mailOptions = {
      from: 'abc@xyz.com',          //Replace with Email
      to: too,          //Host email address
      subject: 'Visit Details',
      text: ` ${txtt} `,       
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });


    // Sending Message
    var number = result[0].phone;
    reqq.headers({
      "authorization": "YOUR_API_KEY",  //Enter your API KEY
      "cache-control": "no-cache"
    });
    reqq.query({
      "sender_id": "FSTSMS",
      "message": ` ${txtt} `,
      "language": "english",
      "route": "p",
      "numbers": number, // host phone number
    });
    reqq.end(function (ress) {
      if (ress.error) throw new Error(ress.error);

      console.log(ress.body);
    });



  });

  // Redirecting to Homepage
  res.redirect("index.html");
});

// Starting Server on Port 8080
const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port${port}`);
});