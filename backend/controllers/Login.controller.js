const jwt = require('jsonwebtoken');
const User = require('../models/user.models.js')
const login = async (req,res)=>{
  const  {email , password} = req.body;
  if(!email ||!password){
    return res.status(400).json({message: "Please provide email and password"})
  }
    try{
       const user = await User.findOne({email: email});
       if (!user) {
        console.log("User not found");
        return res.status(401).json({ message: "Invalid email or password" });
    }
    if (user.password !== password) {
        console.log("Password mismatch");
        return res.status(402).json({ message: "Invalid password" });
    }
            const token = jwt.sign({ userId: user._id }, "prakash", { expiresIn: "7d" });
            res.cookie("loginToken", token, { httpOnly: true }); 
            console.log("Login successful");
    res.status(200).json({ message: "Login successful", user });

    }catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports = login;