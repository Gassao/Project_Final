
const userModel = require('../Server/Models/userModel')
const usersDAL_BL = require('../DAL/usersDAL_BL')
//--> The Part of login and find the  username and password  from DB and return
const login = async (username, password) => {

       try {
              const user = await userModel.findOne({ Username: username, Password: password })
              return user;

       } catch (error) {
              console.log(error);
              return false;
       }

}

//-->The Part of --> Create login -->this means if username  exist then create password
const Register = async (register2) => {

       try {

              const result = await usersDAL_BL.getEmployeeByUsername(register2.Username)
           
              if (!result) {

                     return false

              }
              else if (result.Password) {

                     return false
              }
              else {

                     const res = await usersDAL_BL.updateEmployeeByUsername(register2.Username, register2);
                     return res;


              }

       } catch (error) {


              console.log(error);
              return false
       }

}


module.exports = { login, Register }

