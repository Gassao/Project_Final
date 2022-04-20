
const express = require('express');
const AllUtils = require('../../Utils/UsersUtlis_Help')
const router = express.Router()

router.route('/').get(async (req, res) => {
    try {
        const usersjson = await AllUtils.getAlUserjson()
        const Permissions = await AllUtils.getAllPermissions()
        const userFromDB = await AllUtils.getAllEmployees()

        const userNames = userFromDB.map(login => {
            const userJson = usersjson.find(user => user.id == login._id)
            const permision = Permissions.find(per => per.id == login._id)
            return { id: login._id, username: login.username, ...userJson, ...permision }

        })

        return res.json(userNames);
    }
    catch (error) {


        return res.json(error);
    }
})


router.route('/:id').get(async (req, res) => {

    try {
        const id = req.params.id;

        const IdFromDB = await AllUtils.getEmployeebyID(id)
        const EmployeeDI = await AllUtils.geEmploeeJsonByID(id)
        const PermssionID = await AllUtils.getByIdPermtion(id)

        return res.json({
            FirstName: EmployeeDI.FirstName,
            LastName: EmployeeDI.LastName,
            CreateDate: EmployeeDI.Createddate,
            SessionTimeOut: EmployeeDI.SessionTimeOut,
            userName: IdFromDB.username,
            Permissions: PermssionID.Permissions
        })
    } catch (error) {
        return res.json(error);
    }
})




router.route('/').post(async (req, res) => {

    try {

        const neeuserjson = req.body;
        let id = await AllUtils.addEmployee({ Username: neeuserjson.Username, Password: "" })

        AllUtils.addUserToJson({
            id: id._id,
            FirstName: neeuserjson.FirstName,
            LastName: neeuserjson.LastName,
            Username: neeuserjson.Username,
            Createddate: neeuserjson.Createddate,
            SessionTimeOut: neeuserjson.SessionTimeOut
        })

        await AllUtils.addpermission({ id: id._id, Permissions: neeuserjson.Permissions })
        return res.json('employee Add')

    } catch (error) {
        return res.json(error);

    }
})
// //   --> This function edite( update) by id  from  databases 
router.route('/:id').put(async (req, res) => {
    try {
        const id = req.params.id;
        const updateEmployee = req.body;
        await AllUtils.updateUserJson(id, { FirstName: updateEmployee.FirstName, LastName: updateEmployee.LastName, CreateDate: updateEmployee.CreateDate, SessionTimeOut: updateEmployee.SessionTimeOut })
        await AllUtils.update(id, { Username: updateEmployee.Username })
        await AllUtils.updatPermission(id, { Permissions: updateEmployee.Permissions })
        return res.json("Update Employee")
    } catch (error) {
        return res.json(error);
    }
})

// //   --> This function delete  by id  from  databases 
router.route('/:id').delete(async (req, res) => {
    try {
        const id = req.params.id;
        await AllUtils.delet(id);
        await AllUtils.DeletPermissin(id);
        await AllUtils.deletEmployee(id)

        return res.json("Deletrte")
    } catch (error) {
        return res.json(error);
    }
})

router.route('/isAdmin').post(async (req, res) => {
    try {
        const id = req.body.id;
        const response = await AllUtils.checkIfEmployeeIsAdmin(id)
        res.json(response);
    }
    catch (err) {
        res.json(err)
    }

})

module.exports = router;
