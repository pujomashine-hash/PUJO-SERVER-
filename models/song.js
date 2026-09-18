const mongoose= require("mongoose")
const SongSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  artist:{
    type: String,
    required:true,
    trim:true
  },
  lyrics:{
    type:String,
    required:true,
  },
  category:{
    type: String,
    trim:true,
    required:true
  },
  Church:{
    type: String,
    default:"Unknown"
  },
  image:{
    type: String,
    required:true
  },
  file:{
    type: String,
    required:true
  }
},
      {
    timestamps:true
  },
)
module.exports= mongoose.model("Song",SongSchema)