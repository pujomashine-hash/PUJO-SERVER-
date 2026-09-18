const Song = require ("../models/song")
const getSongs = async (req,res)=> {
  try {
    const songs = await Song.find()
    if (songs.length===0) {
   return res.status(404).json({message:"Not found"})
}
  res.status(200).json(songs)
} catch (e) {
    res.status(500).json({message:e.message})
}
}
module.exports= {getSongs}