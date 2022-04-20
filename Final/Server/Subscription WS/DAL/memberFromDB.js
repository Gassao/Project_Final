
const membmberModel=require('../Server/Models/membersModel')
require('../Server/config/DB')

// All Members

const getAllMembers= () => {

    return new Promise((resolve, reject) => {
        membmberModel.find({}, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        });
    });
};
//-->get by id 
const getMemberByid = (id) => {
    return new Promise((resolve, reject) => {
        membmberModel.findById(id, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        });
    });
};
 //--> Add Member
const addMember = (obj) => {

    return new Promise((resolve, reject) => {
        const newMember = new membmberModel(obj);

        newMember.save((err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Added sucessfully")
            }
        });
    });
};
//    the function -- >  updateStudent --> edite  items  from databases  

const updateMember = (id, obj) => {

    return new Promise((resolve, reject) => {
        membmberModel.findByIdAndUpdate(id, obj, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Updated sucessfully")
            }
        });
    });
};

//-->delelte Member
const deleteIdMember = (id) => {

    return new Promise((resolve, reject) => {
        membmberModel.findByIdAndDelete(id, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Deleted sucessfully")
            }
        });
    });
};



module.exports = { deleteIdMember, updateMember, addMember, getMemberByid, getAllMembers }//