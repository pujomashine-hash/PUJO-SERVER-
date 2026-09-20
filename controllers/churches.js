const Churches= require ("../models/churches")
const Song = require ("../models/song")

const getChurches = async(req,res)=>{
  try {
    const churches = await Churches.find()
    if(churches.length===0){
    return  res.status(404).json({message:"Not found"})
    }
    res.status(200).json(churches)
} catch (e) {
    res.status(500).json({message:e.message})
}
}

const MyChurch = async (req,res)=>{
  try {
    const church = req.query.church;
    const songs = await Song.find({Church:church})
    res.status(200).json(songs)
} catch (e) {
   res.status(500).json({message:e.message})
}
}
module.exports= {getChurches,MyChurch}