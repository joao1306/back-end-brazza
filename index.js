import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host:"brazza.cj3dzestajaw.sa-east-1.rds.amazonaws.com",
    port:"3306",
    user:"admin",
    password:"rootroot",
    database:"brazzaDB"
})

db.connect((err)=>{
    if(err) {
        console.log(err.message);
        return;
    } else {
        console.log("connected to database!")
    }

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