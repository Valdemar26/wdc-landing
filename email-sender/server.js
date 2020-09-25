let express = require("express"),
  path = require('path'),
  nodeMailer = require('nodemailer'),
  bodyParser = require('body-parser');

let app = express();
require("dotenv").config();

app.use(express.static('src'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/send-email', function (req, res) {
  const output = `
    <h3>Contact Form</h3>
    <ul>
      <li>Імя клієнта: ${req.body.userName}</li>
      <li>Електронна пошта ${req.body.userEmail}</li>
      <li>повідомлення: ${req.body.message}</li>
      <li>Телефон: ${req.body.userPhone}</li>
    </ul>
  `;

   contactInfoSender(output, req);

  // res.writeHead(302, { Location: 'http://localhost:4300' });
  res.end();
});

let contactInfoSender = async(output, req) => {
  let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user:  process.env.SMTP_USER,
      pass:  process.env.SMTP_PASSWORD
    }
  });

  let mailOptions = {
    // should be replaced with real recipient's account
    form: '"ITPossible"',
    to: process.env.FROM_TO,
    html: output,
    subject: "Message title",
    text: "Plaintext version of the message",
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
}

let server = app.listen(8081, function(){
  let port = server.address().port;
  console.log("Server started at http://localhost:%s", port);
});
