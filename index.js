const express = require('express');
const bodyParser = require('body-parser');
const dev = process.NODE_ENV !== 'production';
const app = require('next')({dev, dir: './client'})
const views = require('./client/views/views');
const routes = require("./api/v1/routes");
const MongoClient = require("mongodb").MongoClient;
const port = process.env.PORT || 3000;
let db;
const mongoDBUsername = encodeURIComponent("liavv");
const mongoDBPassword = encodeURIComponent("lnlgyv0704");

app.prepare().then(async()=>{
    const server = express();
    server.use(bodyParser.urlencoded({extended:false}));
    server.use(bodyParser.json());
    //  server.use(sso.auth());

    const uri = `mongodb+srv://${mongoDBUsername}:${mongoDBPassword}@cluster0.k5dx2.mongodb.net?retryWrites=true&w=majority`;
    //const uri = "mongodb+srv://liavv:lnlgyv0704@cluster0.k5dx2.mongodb.net/test?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
    db = await client.db('VanaDB');

    server.use('/api/v1/',routes(server,null));
    server.use('/', views(app));
   

    server.use(function(err,req,res,next){
        return next();
    });

    server.listen(port,err=>{
        if (err) throw err;
        console.log('listen on port 3000');
    })
}).catch(e=> {
    console.log('failed start server', e.message);
    process.exit(-1);
});