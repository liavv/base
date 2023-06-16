const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.listen(port, ()=>{
    console.log(`app listening on ${port}`);
});

app.get("/", (req,res)=>{
    res.send(`welcome to my server on port ${port}`);
});

app.get("/:name", (req,res)=>{
    res.send(`hello ${req.params.name}`);
});