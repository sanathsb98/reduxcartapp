const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'flipkartclone',
})

app.post('/register', (req, res) => {
    const email = req.body.email;
    const user_password = req.body.user_password;

    con.query("INSERT INTO auth (email, user_password) VALUES (?, ?)", [email, user_password],
        (err, result) => {
            if (err) {
                console.error("Error in registration:", err);
                res.status(500).send({ message: "Internal Server Error" });
            } else {
                console.log("Registration successful");
                res.status(200).send(result);
            }
        }
    );
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const user_password = req.body.user_password;

    con.query("SELECT * FROM auth WHERE email = ? AND user_password = ?", [email, user_password],
        (err, result) => {
            if (err) {
                console.error("Error in login:", err);
                res.status(500).send({ message: "Internal Server Error" });
            } else {
                if (result.length > 0) {
                    console.log("Login successful");
                    res.status(200).send(result);
                } else {
                    console.log("Login failed");
                    res.status(401).send({ message: "Unauthorized" });
                }
            }
        }
    );
});



app.listen(3001,()=>{
    console.log('server is running ')
})