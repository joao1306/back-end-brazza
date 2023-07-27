import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"menubrazza"
})

app.get('/', (req, res) => {
    const q = "SELECT * FROM lanches";

    db.query(q, (err, data)=>{
        if(err){
            return res.json(err)
        } else {
            return res.json(data)
        }
    })
})


app.listen(8800, () => {
    console.log("Connected to backend!")
})