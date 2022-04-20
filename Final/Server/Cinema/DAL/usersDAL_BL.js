require('../Server/config/DB')
const userModel = require('../Server/Models/userModel')


const getAllUsers = () => {

    return new Promise((resolve, reject) => {
        userModel.find({}, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }

        });

    });
};

const getUserByid = (id) => {
    return new Promise((resolve, reject) => {
        userModel.findById(id, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)


            }
        });
    });
};

const addUser = (obj) => {

    return new Promise((resolve, reject) => {
        const newEmployee = new userModel(obj);
            
        newEmployee.save((err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        });
    });
};

const updateUser = (id, obj) => {

    return new Promise((resolve, reject) => {
        userModel.findByIdAndUpdate(id, obj, (err) => {
            if (err) {
                reject(err)
               console.log( err);

            }
            else {
                resolve("Updated sucessfully")
            }
        });
    });
};


const deleteIdUser = (id) => {

    return new Promise((resolve, reject) => {
        userModel.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Deleted sucessfully")
            }
        });
    });
};


// finds --> username and returns it
const getEmployeeByUsername = async (username) => {
  
    return await userModel.findOne({Username:username });
}

// find--> username and preforms and update.
const updateEmployeeByUsername = async (Username, obj) => {
  
    const res = await userModel.findOneAndUpdate({ Username }, obj, {returnOriginal:false});

    return res;
}

module.exports = { getUserByid, deleteIdUser, updateUser, addUser, getAllUsers, updateEmployeeByUsername, getEmployeeByUsername }