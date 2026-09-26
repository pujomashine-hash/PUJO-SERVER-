const mongoose = require("mongoose");
const Churches = require("../models/song");
require("dotenv").config()
    
 const uploadChurches  = async (req,res) => {

        //CREATE 
try{
        const churches = 
[
 {
   "title":"Namwandama Bwana",
    "artist":"General choir",
    "lyrics":"lyrics/004.txt",
    "category":"General",
    "church":"Lutheran choir",
    "image":"Yote.jpg",
    "file":"songs/004.mp3",
    "card":"Mary"
 },
  {
   "title":"Hapana rafiki kama Yesu",
    "artist":"General choir",
    "lyrics":"lyrics/005.txt",
    "category":"General",
    "church":"Lutheran choir",
    "image":"Yote.jpg",
    "file":"songs/005.mp3",
    "card":"Mary"
  }
]
        
          await Churches.insertMany(churches);
        console.log("Song saved")
        res.status(200).json({
          success:true,
          message:"Songs uploaded successfully to Database"
        })

        //READ
     //   const songs = await Song.find();
     //   console.log(songs)

        //DELETE 
        //await 
        //Song.findByIdAndDelete("6a84421c25e6502a467ce8cb")
        //     console.log("Song deleted")

//UPDATE 

    //    await Song.findByIdAndUpdate("6a8445ac7f496cf58ab5048f", {
        //    Category: "Kusifu"       }, {
    //        new: true
//        })
// console.log("Njooni Tumsifuni updated")
  //  })
    } catch (e){
  res.status(500).json({
    message:e.message
  })
    }
}
module.exports= {uploadChurches}