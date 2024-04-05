let userModel = require("../models/usermodel")
const userRegister = async (req,res)=>{
    console.log(req.body)
    let {userName} = req.body
    let {password} = req.body
    let {email} = req.body
    let {mobile} = req.body;
    let data = {
        userName,
        password,
        email,
        mobile
    }
    try {
        let insertion = await userModel.create(data)
        console.log("inserted")
    } catch (error) {
      console.log(error)
    }
}

const userLogin = async (req,res)=>{
    console.log(req.body)
    try {
        let user = await userModel.findOne({userName:req.body.userName,password:req.body.password})
        if (user){
            console.log(user)
        }
        console.log(user)
        res.json(user)
    } catch (error) {
        
    }
}
const getHome = (req,res)=>{
    console.log("home")
}

module.exports = {userRegister,userLogin,getHome}

