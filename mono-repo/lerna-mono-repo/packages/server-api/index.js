const express = require('express')
const port = process.env.PORT || 5000

const app = express();

app.get("/",(req,res) => {
    res.send("this is methdo get")
})

app.listen(port, (err) => {
    if (err) {
        console.log("error in the port")
    } else {
        console.log("port is listening")
    }
})