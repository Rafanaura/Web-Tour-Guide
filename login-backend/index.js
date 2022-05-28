'use strict'

const express =  require ("express")
const app = express()

app.use (express.json())

const db = require ('./db')
db.connect(error => {
    if(error) throw error
    console.log("MySql Connected")
})

app.get("/", (req,res) => {
    res.send({
        message : "Berhasil menjalankan GET",
        data : {
            description :
            "Endpoint ini menampilkan data"
        }

    })
})
app.use("/admin", require('./routes/admin_router'))
app.use("/customer", require('./routes/cust_router'))
const port = 7000;
app.listen(port, () => console.log (`App sudah berjalan ${port}`))
