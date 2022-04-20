

const jFile = require('jsonfile')
const fileP = './jsonfile/permision.json';

const readFromPermissioJSON = async () => {
    return new Promise((resolve,reject) => {
        jFile.readFile(fileP, (err,data) => {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        })
    })
}

const writeToPermissionsJSON = (obj) => {
    return new Promise((resolve,reject) => {
        jFile.writeFile(fileP,obj, (err) => {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("wrote to json")
            }
        })
    })
}

module.exports = {readFromPermissioJSON,writeToPermissionsJSON}

