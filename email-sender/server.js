let express = require("express"),
  path = require('path'),
  nodeMailer = require('nodemailer'),
  bodyParser = require('body-parser');

let app = express();

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
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
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
    host: 'smtp.mailtrap.io',
    port: 2525,
    secure: false,
    auth: {
      user: '48130a1aaae514',
      pass: '190265150c8baf'
    }
  });

  let mailOptions = {
    // should be replaced with real recipient's account
    form: '"ITPossible"',
    to: 'olehviznyi@gmail.com',
    // subject: req.body.subject,
    // body: req.body.message,
    // html: output // html body
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>"
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
