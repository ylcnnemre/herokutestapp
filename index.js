import express from "express"

const app =express()

app.get("/",(req,res)=>{

    res.status(200).send({
        msg : "merhaba",
        success : true
    })
})


app.listen(process.env.PORT || 500 ,()=>{
    console.log("server is running")
})