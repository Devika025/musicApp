var express = require('express');
var router = express.Router()
let {userRegister,getHome,userLogin} = require('../Controllers/UserController')
router.get('/',getHome)
router.post('/Register',userRegister)
router.post('/Login',userLogin)
module.exports = router;