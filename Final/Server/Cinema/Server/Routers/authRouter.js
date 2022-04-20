const express = require('express');
const router = express.Router()
const Utilsuser = require('../../Utils/UsersUtlis')




router.route('/login').post(async (req, res) => {
    try {

        const user = await Utilsuser.login(req.body.username, req.body.password)

        if (user) {


            res.json({ login: true })
        }
        else {

            res.json({ login: false })
        }


    }
    catch (error) {
        return res.json(error);
    }
})



router.route('/register').post(async (req, res) => {
    try {
        const register2 = req.body
        const result = await Utilsuser.Register(register2)
        return res.json(result);

    }
    catch (error) {
        return res.json(error);
    }
})



module.exports = router;