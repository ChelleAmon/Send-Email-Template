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
        /*
        // I will keep these mail properties for now. 
        // host: "smtp.gmail.com",
        // port: 587,
        // secure: true,
        */
        service: 'gmail',
        auth: {
            type: 'OAUTH2',
            user : mail_user.test_emailfrom,
            pass: mail_user.password,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
    })
    const mailOptions = {
        from: mail_user.test_emailfrom,
        to: mail_user.emailto,
        subject: "Test nodemail email",
        text: "Whyyyyyyyyyyyy?? why is this working?"
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