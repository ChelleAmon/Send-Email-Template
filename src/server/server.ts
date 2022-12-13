import express from 'express';
import cors from 'cors';
import path from 'path';
import nodeMailer from 'nodemailer';

const app  = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

const PORT = 3000;

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