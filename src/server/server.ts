import express from 'express';
import cors from 'cors';
import path from 'path';

const app  = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req,res) => {
    res.json("Congratulations! Server is running successfully.")
})

app.listen(PORT, () => {
    console.log(`Success! Starting localhost http://localhost:${PORT}`)
})