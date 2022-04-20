
//--> modeles
const userModel = require('../DAL/usersDAL_BL')
const DalPermistionjsonBL = require('../jsonfile/DALPermisionJsonBL')
const DalUserJsonBLs=require('../jsonfile/DALuserJsonBL')

//-->The Part Of-->fetch
const fetchItem = async (employeeFromDB) => {
    const Employeeid = employeeFromDB._id;
    const EmployeeItems = await geEmploeeJsonByID(Employeeid)
    const permesions = await getByIdPermtion(Employeeid)
    return { ...EmployeeItems, Permissions: permesions, username: Employeeid.username }


}
//-->The part Of Login
const checkID = async (id) => {

    const Admin_Id = (await getAlUserjson()[0]).id

    if (Admin_Id == id) {

        return true;
    }
    else {

        return false;
    }
}

//--> The Part Of--> Employees DB 

const getAllEmployees = async () => {


    const employee = await userModel.getAllUsers()
    return employee;
}
const getEmployeebyID = async (id) => {

    const res = await userModel.getUserByid(id)
    return res;

}
const getusername = async (username) => {

    const res = await userModel.getEmployeeByUsername(username)
    return res;
}
const addEmployee = async (obj) => {

    return await userModel.addUser(obj)

}
const update = async (id, obj) => {

    await userModel.updateUser(id, obj)
}
const delet = async (id) => {

    await userModel.deleteIdUser(id)

}

//--> the part of--> userjson


const getAlUserjson = async () => {

    const res = await DalUserJsonBLs.readFromEmployeesJSON()
    return res;
}

const geEmploeeJsonByID = async (id) => {

    const employees = await DalUserJsonBLs.readFromEmployeesJSON()

    const sort = employees.find(employee => employee.id == id)
    return sort;

}


const addUserToJson = async (obj) => {

    const employees = await DalUserJsonBLs.readFromEmployeesJSON()
    employees.push(obj)

    await DalUserJsonBLs.writeToEmployeeJSON(employees)

}

const updateUserJson = async (id, obj) => {
    const usersJsons = await DalUserJsonBLs.readFromEmployeesJSON()

   
    const j = usersJsons.findIndex(user => user.id == id)
    if (j != -1) {
        usersJsons[j] = { ...usersJsons[j], ...obj };
        await DalUserJsonBLs.writeToEmployeeJSON( usersJsons)

    }

}


const deletEmployee = async (id) => {

    const employees = await DalUserJsonBLs.readFromEmployeesJSON()
    const findIndex = employees.findIndex(employee => employee.id == id)

    employees.splice(findIndex, 1)
    await DalUserJsonBLs.writeToEmployeeJSON(employees)

}


//---> the part of --> permissionJson
const getAllPermissions = async () => {

    const permtions = await DalPermistionjsonBL.readFromPermissioJSON()
    return permtions;
}
const getByIdPermtion = async (id) => {
    const permsionss = await DalPermistionjsonBL.readFromPermissioJSON()
    const j = permsionss.find(permtion => permtion.id == id)

    return j;

}

const addpermission = async (obj) => {
    const permisiions = await DalPermistionjsonBL.readFromPermissioJSON()
    permisiions.push(obj)
    await DalPermistionjsonBL.writeToPermissionsJSON(permisiions)

}



const updatPermission = async (id, obj) => {

    const permesions = await DalPermistionjsonBL.readFromPermissioJSON()
    const j = permesions.findIndex(per => per.id == id)
    {
        if (j != -1) {
            permesions[j].Permissions = [...obj.permesions]
            await DalPermistionjsonBL.writeToPermissionsJSON(permesions);
        }
    }
}


const DeletPermissin = async (id) => {
    const permissions = await DalPermistionjsonBL.readFromPermissioJSON()

    const Id = permissions.findIndex(permision => permision.id == id)
    permissions.splice(Id, 1)
    await DalPermistionjsonBL.writeToPermissionsJSON(permissions)
}

module.exports = {  fetchItem,checkID, getAllEmployees, getEmployeebyID,getusername,  addEmployee, update,delet,

    //--> The part of --> usersJson /employees

    getAlUserjson,
    geEmploeeJsonByID,
    addUserToJson,
    updateUserJson,
    deletEmployee,

    //--> The Part Of--> Permissins

    DeletPermissin,
    updatPermission,
    addpermission,
    getAllPermissions,
    getByIdPermtion


}