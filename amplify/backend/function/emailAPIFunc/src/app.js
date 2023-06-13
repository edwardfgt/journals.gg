import dotenv from "dotenv";
dotenv.config();
import aws from "aws-sdk";

const ses = new aws.SES({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-1",
});

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/email", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

app.post("/email", function (req, res) {
  // Add your code here
  const { email, message, subject } = req.body;
  sesTest("mail@journals.gg", "ed@journals.gg", email, message, subject)
    .then((val) => {
      console.log("returned" + val);
      res.send("successful");
    })
    .catch((err) => {
      res.send("error" + err);
    });
});

app.listen(3000, function () {
  console.log("App started");
});

function sesTest(emailTo, emailFrom, email, message, subject) {
  console.log("Input parameters:", emailTo, emailFrom, message, subject);
  const params = {
    Destination: {
      ToAddresses: [emailTo],
    },
    Message: {
      Body: {
        Text: {
          Data: "Sender: " + email + "\n" + "Message " + message,
        },
      },
      Subject: {
        Data: `CONTACT FORM: ${subject}`,
      },
    },
    Source: emailFrom,
  };
  return ses.sendEmail(params).promise();
}

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
