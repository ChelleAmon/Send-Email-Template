import express from 'express';
import cors from 'cors';
import path from 'path';
import nodeMailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app  = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

const mail_user = {
    test_emailfrom: process.env.TEST_EMAILFROM,
    password: process.env.PASSWORD,
    emailto: process.env.EMAILTO
}

const PORT = 3000;

const sendMail = (user: any, callback: any) => {
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user : mail_user.test_emailfrom,
            pass: mail_user.password
        }
    })
    const mailOptions = {
        from: mail_user.test_emailfrom,
        to: mail_user.emailto,
        subject: "<Message Subject>",
        html: "<h1>And here is the place for HTML</h1>"
    }
    transporter.sendMail(mailOptions, callback)

}


app.get("/", (req,res) => {
    res.send("Congratulations! Server is running successfully.")
})

app.post("/sendmail", (req,res) => {
    console.log("request came");
    let user: string = req.body;
    sendMail(user, (err: any, info: any) => {
            if (err) {
                console.log("Error: ", err);
                res.status(400);
                res.send({error: "Failed to send email"})
            } else {
                console.log("Email has been sent")
                res.send(info)
            }
        })
})
app.listen(PORT, () => {
    console.log(`Success! Starting localhost http://localhost:${PORT}`)
})