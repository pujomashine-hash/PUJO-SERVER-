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
  church:{
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
  },
   card:{
    type:String,
    required:true,
    default:"Mary"
  }
},
      {
    timestamps:true
  },
)
module.exports= mongoose.model("Song",SongSchema)