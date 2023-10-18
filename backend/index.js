const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const md5 = require('md5');
require('dotenv').config();
let nodemailer = require('nodemailer');

//Required Modals is Imported
const form = require('./modals/sign_modal');
const admin = require('./modals/form_modal');

const app = express();

//The Set of Lines are the datas in the .env file
const url = process.env.ATLAS_URL;
const content = process.env.text;
const text_1 = process.env.text_1;
const refer = process.env.refer;

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);

mongoose.connect(url)
    .catch(error => console.log(error));

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Mongoose Db connected successfully');
});

// E-mail transport configuration
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gopiykj14@gmail.com',    //This Email is Used to Send the Mail for the Customers You can use Your Email ID with App Password.
        pass: 'sfosqjgaqhxfbbbn'
    }
});

// Handle POST request to send referral emails
app.post('/mail', (req, res) => {
    const { mail } = req.body;
    form.findOne({ email: mail })
        .then((res) => {
            if (res) {
                const referal_id = res.referal_id;
                let mailOptions = {
                    from: 'gopiykj14@gmail.com',
                    to: mail,
                    subject: 'Referral Program - Share and Get Coupon Code!',
                    text: refer + '\n\n\n' + 'http://localhost:3000/R_log/?refid=' + referal_id
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
            }
        });
});

// Handle POST request to check admin login credentials
app.post('/check', (req, res) => {
    const { user } = req.body;
    const { pass } = req.body;
    const passwd = md5(pass);
    admin.findOne({ email: user, password: passwd })
        .then((result) => {
            res.send({ find: result });
        });
});

// Handle POST request to get user details
app.post('/user', (req, res) => {
    const { mail } = req.body;
    form.findOne({ email: mail })
        .then((result) => {
            res.send({ details: result });
        });
});

// Handle GET request to get all user details
app.get('/all', (req, res) => {
    form.find({})
        .then((result) => res.send({ details: result }));
});

// Handle POST request to delete a user by email
app.post('/del', (req, res) => {
    const { email } = req.body;
    form.findOneAndDelete({ email: email })
        .catch(err => console.log(err));
});

// Handle POST request to find the user's position in the referral program
app.post('/find', (req, res) => {
                form.count().then((coun) => {
                    if (coun == 0) {
                        res.send({ position: 98 });
                    } else {
                        form.find().sort({ "number": -1 }).limit(1)
                            .then((result) => {
                                res.send({ position: result[0].number });
                            });
                    }
        });
});

// Handle POST request to register a user in the referral program
app.post('/sign', (req, res) => {
    var num;
    form.findOne({ email: req.body.email })
        .then((result) => {
            if (result == null) {
                const { email } = req.body;
                const { pos } = req.body;
                const { ref_id } = req.body;
                const number = pos + 1;
                const referal_id = md5(email);
                const Formdata = new form({ email, number, referal_id });
                Formdata.save();
                form.count().then((coun) => {
                    res.send({ count: coun });
                    form.findOne({ referal_id: ref_id })
                        .then((rt) => {
                            if (rt != null) {
                                //This Updates the Referal User to 1 Position Up after his/her Referal Link is Used.
                                form.updateOne({ referal_id: rt.referal_id }, { $inc: { number: -1 } })
                                    .then((resf) => {
                                        form.find().sort({ "number": 1 }).limit(1)
                                            .then((res) => {
                                                if (res[0].number == 1) {
                                                    const coupon = md5(referal_id);
                                                    // e-mail message options
                                                    let text = content + "\n\n\nCOUPON CODE: " + coupon + " \n\n\n" + text_1;
                                                    let mailOptions = {
                                                        from: 'gopiykj14@gmail.com',
                                                        to: res[0].email,
                                                        subject: 'Exclusive iPhone Product Announcement: Your Special Coupon Code Inside',
                                                        text: text
                                                    };
                                                    transporter.sendMail(mailOptions, function (error, info) {
                                                        if (error) {
                                                            console.log(error);
                                                        } else {
                                                            console.log('Email sent: ' + info.response);
                                                        }
                                                    });

                                                    //After the User Reached Position One his Record is Deleted after Sending Coupon Code
                                                    form.deleteOne({ number: res[0].number })
                                                        .then((res) => console.log(res));
                                                }
                                            });
                                    });
                            }
                        });
                });
            } else {
                res.send({ res: result });
            }
        });
});

// Handle POST request to update user's position and send coupon
app.post('/update', (req, res) => {
    const { email, referal_id, pos } = req.body;
    form.updateOne({ email: email }, { email: email, referal_id: referal_id, number: pos })
        .then((result) => {
            form.findOne({ email: email })
                .then((reslt) => {
                    if (reslt.number == 1) {
                        const coupon = md5(referal_id);
                        let text = content + "\n\n\nCOUPON CODE: " + coupon + " \n\n\n" + text_1;
                        // e-mail message options
                        let mailOptions = {
                            from: 'gopiykj14@gmail.com',
                            to: reslt.email,
                            subject: 'Exclusive iPhone Product Announcement: Your Special Coupon Code Inside',
                            text: text
                        };
                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Email sent: ' + info.response);
                            }
                        });
                        form.deleteOne({ number: reslt.number })
                            .then((res) => console.log(res));
                    }
                });
            res.send({ status: 200 });
        });
});

app.listen('8001', () => {
    console.log('App is listening on port: 8001');
});
