const jwt = require("jsonwebtoken")
const { userModel } = require("../Models/userModel")
const { hashPassword, matchPassward } = require("../helper/hashPassword")
const Registration = async(req,res)=>{
    const {name,email,password,phone} = req.body
    if (!name || !email || !password || !phone) {
      return res.status(400).send("All fields are mandatory");
  }
    let user = await userModel.findOne({email:email})
    if(user) {return res.status(400).send({sucess:false,message:"User already Registerd"})}
    let hashPass = await hashPassword(password)
    let newUser  = await userModel.create ({...req.body, password :hashPass})
    res.status(201).send({sucess:true,message:"Registred Suceessfulyy!!!!",data:newUser})
    
}
 
const login = async(req,res) =>{
const {email, password} = req.body
const user = await userModel.findOne({email:email})
if(!user) {return res.status(401).send({success:false,message:"user not exsist"})}
const matching = await matchPassward(password,user.password)
if(!matching) {return res.status(409).send({success:false,message:"Incorrect password"})}
var token = jwt.sign({user:user},"shhhh",{expiresIn: "1d"})
res.setHeader("token",token)
res.status(201).send({success:true,message:"login successfully",data:user,token:token})
}
module.exports = {Registration,login}
