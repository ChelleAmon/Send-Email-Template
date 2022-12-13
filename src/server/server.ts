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
    email: process.env.EMAIL,
    password: process.env.PASSWORD
}

const PORT = 3000;

const sendMail = (user: string, callback: any) => {
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user : mail_user.email,
            pass: mail_user.password
        }
    })
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