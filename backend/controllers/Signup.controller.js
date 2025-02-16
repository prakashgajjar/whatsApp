const User = require('../models/user.models.js')
const signup = async (req,res)=>{
    const {name, email, password} = req.body;
    try{
     const user = await User.create({
            name,
            email,
            password,
            status: "online",
            isOnline: true
        })
        console.log("user signup success")
        res.status(200).json({message: "Login successful"})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports = signup;