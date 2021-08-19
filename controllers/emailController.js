const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
var postmark = require("postmark");
const Contact = require('./../models/contactModel');

// Send an email:
var client = new postmark.Client(process.env.CLIENTID);



exports.sendMail = catchAsync(async (req, res, next) => {
    var message = req.body;
    var html = `<h1>You've got a new message from your portfolio form!</h1><p>Name: ${message.name}</p><p>Email: ${message.email}</p><p>Subject: ${message.subject}</p><p>Message: ${message.message}</p>`

    
    client.sendEmail({
        "From": "ethan@ethanharsh.com",
        "To": "ethan@ethanharsh.com",
        "Subject": "PORTFOLIO FORM SUBMISSION",
        "HtmlBody": html,
      });

    const newContact = await Contact.create(message);
    
    //SEND RESPONSE
    res.status(200).json({
        status:'success',
        data: {
            message
        }
    });
})




