const express = require("express");

const app= express();

app.use(express.json());

const PORT = 3033;

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Home page"
    })
});

app.listen(PORT, ()=>{
    console.log(`Server is live at http://localhost:${PORT}`)
})