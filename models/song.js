const mongoose= require("mongoose")
const SongSchema = new mongoose.Schema({
  code:{
   type: String,
   required: true,
   unique:true,
   trim:true
},
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
  Category:{
    type: [String],
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