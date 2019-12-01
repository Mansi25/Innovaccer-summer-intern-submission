# Innovaccer-summer-intern-submission
This web applicartion was developed as a part of SDE internship assignment at Innnovaccer, using NodeJS,MySQL,NodeMailer for emails and Fast2SMS for Mobile Messages, according to the [question](https://summergeeks.in/static/assignments/summergeeks%202020%20-%20SDE%20Assignment.pdf).

## Tech Stack

* [Nodejs](https://nodejs.org/en/) - Version 10.10
**Node**. **js** is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.

* [MySQL](https://www.mysql.com/) - Relational database management system
**MySQL** is a relational **database** management system based on SQL – Structured Query Language. It is majorly used to create a web database.
* [Fast2SMS](https://www.fast2sms.com/)  - SMS over the Internet service
 **Fast2SMS** is a popular bulk SMS service provider in India.
 
* [Nodemailer](https://nodemailer.com/) - SMTP protocol client used to send emails.
The **Nodemailer** module in Node.js makes it easy to send emails from your computer.
* [Express](https://expressjs.com/) - Web Application Framework .It is designed for building web applications and APIs

### Frontend
* [HTML](https://www.w3schools.com/html/) - HTML is the standard markup language for Web pages .
* [CSS](https://www.w3schools.com/css/css_intro.asp) - Provides Styling for HTML.
* [Bootstrap](https://getbootstrap.com/) - Front-end Component Library.

## Description
- The application keeps a record of the visitors in and outside the office. It is done in the following way :
   
    

  - Every time the visitor enters the office , he/she has to enter his/her along with the host`s  name, email address, phone number on the front end.
  - Now , the backend comes to use. It stores all the information along with the time stamp.
  - When the visitor checks- in an SMS along with an Email is sent to the host stating the information of the visitor. 
  - On check - out another mail is sent to the visitor sending him details of his visit.
  - Check-out time is stored into the database at the time of checking out.

## Installation
- On Windows, please  install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) .
- Run ```setup/mysql.sql``` for initial setup of the SQL database.
- Edit app.js to edit the following things
```
user = "Your MySQL ID"  
password = "Your MySQL password"
user = "Your Email ID"
pass = "Your Email ID password"
"authorization" = "Your Fast 2 SMS authorization key"
```

## Usage
- To start the server go to the back-end directory with ```app.js``` and start the server with the command ```node app.js```
- Server will start on PORT:8080.

## Front End Section 
 ### Home Screen
 - Go to index.html file contains two options , namely , Check In and Check Out for entry and exit of the user respectively.
 ### Check In
 - It opens the register page , where the user has to input details like ;
   1. Full Name
   2. Email Address
   3. Phone Number
   4. Host`s Name 
   5. Host`s Email Address
   6. Host`s Phone Number
- It then sends both an email and a text to the Host.
 ### Check Out
 - Here , just detail has to be entered i.e. Visitor`s Phone.
 - An email then will be sent to the guest about the visit.

# Images for the webpages
## Home Screen

![Home](https://i.imgur.com/SytjD3B.png)

### Check-In

![Check-In](https://i.imgur.com/LbGjmFB.png)

### Checkout

![Checkout](https://i.imgur.com/H3Rqcoq.png)
