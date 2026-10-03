const mongoose = require("mongoose");
const Churches = require("../models/song");
require("dotenv").config()
    
 const uploadChurches  = async (req,res) => {

        //CREATE 
try{
        const churches = await Churches.create ({
          code:"0031",
          title:"Ni damu idondokayo",
          artist:"General choir",
          lyrics:"lyrics/0031.txt",
          Church:"Lutheran choir",
          Category:"Kwaresma",
          image:"logo.png",
          file:"songs/0031.mp3",
          card:"Mary"
        })

  await churches.save()
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