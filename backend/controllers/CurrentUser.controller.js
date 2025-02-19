const CurrentUser =  async (req,res)=>{
    try {
        res.status(200).json({_id : req.user.userId})
    } catch (error) {
        console.error(error.message);
    }
}
module.exports = CurrentUser;