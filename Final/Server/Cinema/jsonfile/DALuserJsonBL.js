

const jFile = require('jsonfile')
const fileP = './jsonfile/user.json';
const readFromEmployeesJSON = async () => {
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

const writeToEmployeeJSON = (obj) => {

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

module.exports = {readFromEmployeesJSON,writeToEmployeeJSON}


