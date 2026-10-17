const serverStarter =  (req,res)=>{
  try {
    res.status(200).json({
      status:"running",
      time:Date.now(),
      success:true
    })
} catch (e) {
    res.status(500).json({
      message:e.message
    })
}
}
module.exports= {serverStarter}