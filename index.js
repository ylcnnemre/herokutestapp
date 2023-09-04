const express = require("express")
const { getTitle } = require("./WebScraping")

const app = express()


app.get("/", async (req, res) => {

    let data = await getTitle()
    res.send({
        msg: "selama ",
        result: data
    })
})


app.listen(process.env.PORT || 5000, () => {
    console.log("server is running")
})