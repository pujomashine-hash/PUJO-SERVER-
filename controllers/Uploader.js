const mongoose = require("mongoose");
const Churches = require("../models/song");
require("dotenv").config()
    
 const uploadChurches  = async (req,res) => {

        //CREATE 
try{
       const churches = await Churches.create ({
         code:"0062",
         title:"Asante Yesu wa ekaristi",
         artist:"Kwaya ya Mt. Romano mtunzi",
         lyrics:"lyrics/0062.txt",
          Church:"Rc choir",
         Category:"General",
         image:"https://ik.imagekit.io/pry8rixl0/Asante%20Yesu%20wa%20ekaristi.png",
         file:"songs/0062.mp3",
         card:"Mary"
        })

 await churches.save()
       console.log("Song saved")
       res.status(200).json({
          success:true,
        message:"Songs uploaded successfully to Database"
      })

//UPDATE 

   // const updated = await     //Churches.findByIdAndUpdate("6ac739e8cc7de1b517//5cea40", {
    //     lyrics: "lyrics/0046.txt"    }, {
     //      returnDocument:'after'
   //    })
//console.log("Deni ya dhambi updated")
//console.log(updated)

//READ
     // const songs = await Churches.find();
  // console.log(songs)
    



        //DELETE 
        //await 
        //Song.findByIdAndDelete("6a84421c25e6502a467ce8cb")
        //     console.log("Song deleted")

  //  })
    } catch (e){
  res.status(500).json({
   message:e.message
  })
 }
}
module.exports= {uploadChurches}