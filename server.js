const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:5173', 
  }));

app.get("/notifications",(req,res) => {
    res.send({
        connections : Math.round(Math.random() * 120),
        jobs : Math.round(Math.random() * 30),
        messages : Math.round(Math.random() * 40),
        notifications : Math.round(Math.random() * 40),
    })
})

app.listen(PORT, ()=> {
    console.log(`Server Serted........ PORT=> ${PORT}`)
})