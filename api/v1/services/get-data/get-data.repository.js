const uuid = require('uuid');

async function getList (req) {
    let mongoData=[];
    try{
        

        const collection = await db.collection('shoppingList');
        const result = await collection.find({}).sort('productId','desc').toArray();
        let resultFixed = [];
        result.map((item)=>{
            resultFixed.push({text:item.productName, id: item.productId, uuid: item.uuid});
        });
        return {data: resultFixed};

    }
    catch (e){
        console.error(`error on getList is ${e.message}`);
        throw e;
    }

}

async function addItem (req) {
    let mongoData=[];
    try{
        const collection = await db.collection('shoppingList');
        const result = await collection.find({}).sort('productId','desc').toArray();
        const newProductId = Number(result[0].productId) + 1;
        const newUuid = uuid.v4();
        const resultNew = await collection.insertOne({productName:req.body.productName, productId: newProductId, uuid: newUuid});
        let resultFixed = [];
        result.map((item)=>{
            resultFixed.push({text:item.productName, id: item.productId, uuid: item.uuid});
        });
        resultFixed.push({text:req.body.productName, id: newProductId, uuid: newUuid});
        return {data: resultFixed};

    }
    catch (e){
        console.error(`error on getWeatherDataFromApi message is ${e.message}`);
        throw e;
    }

}
module.exports = {
    getList,
    addItem
};