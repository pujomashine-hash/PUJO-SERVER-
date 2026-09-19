const mongoose = require("mongoose");
const Churches = require("./models/churches");
require("dotenv").config()
mongoose
    .connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("Database connected successfully!");

        //CREATE 

        const churches = 
[
 {
   "id":1,
  name:"Lutheran choir"
 },
  {
   "id":2,
    "name":"Rc choir"
  },
  {
   "id":3,
    "name":"Anglican"
  },
  {
    "id":4,
    name:"Baptist"
  },
  {
    "id":5,
    "name":"Presbyterian"
  },
  {
    "id":6,
    "name":"Methodist"
  },
  {
    "id":7,
    "name":"Unitarian"
  }
]
        
          await Churches.insertMany(churches);
        console.log("Song saved")

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
    })
    .catch((err) => {
        console.log(err);
    })