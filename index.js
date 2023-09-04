const express = require("express")


const app = express()


app.get("/", async (req, res) => {


    res.send({
        msg: "selama ",
        result: data
    })
})


app.listen(process.env.PORT || 5000, () => {
    console.log("server is running")
})