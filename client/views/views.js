const service = require("../../api/v1/services/get-data/get-data.service");
const router = require('express').Router();
const os = require("os");

module.exports = function(app){
    const handle = app.getRequestHandler();

    router.get('/_next/*',async(req,res)=>{
       return handle(req,res,req.url);
    });
    router.get('/',async (req,res)=>{
        // require os module

// invoke userInfo() method
        const userInfo = os.userInfo();

// get uid property
// from the userInfo object
        const uid = userInfo.uid;

        console.log(req.sso); // 20
        const data = await service.getList(req);
        res.data = {
            data:data
        }
        return app.render(req,res,'/',req.url);
    });
    return router;
};