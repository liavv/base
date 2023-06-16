const repository = require('./get-data.repository');
async function getList(req){

    return await repository.getList(req);
}
async function addItem(req){

    return await repository.addItem(req);
}


module.exports = {
    getList,
    addItem
};