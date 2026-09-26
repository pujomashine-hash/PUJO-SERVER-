const fs = require("fs")
const Song = require("../models/song")
const path = require("path");
const {
    PutObjectCommand,
    GetObjectCommand
} = require("@aws-sdk/client-s3")
const r2 = require("../services/r2.service")

const uploadLyrics = async (req, res) => {
    try {
        const filePath =
            path.join(__dirname, "../uploads/lyrics/005.txt")

        const command = new PutObjectCommand({
            Bucket: process.env.R2_BUCKET,
            Key: "lyrics/005.txt",
            Body: fs.createReadStream(filePath),
            ContentType: "text/plain"
        })
        await r2.send(command)
        res.status(200).json({
            success: true,
            message: "Uploaded successful"
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

const getLyrics = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);

    

    if (!song) {
      return res.status(404).send("Lyrics not found");
    }

    const command = new GetObjectCommand({
      Bucket: process.env.R2_BUCKET,
      Key: song.lyrics
    });

    const response = await r2.send(command);

    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Cache-Control", "public, max-age=604800");

    response.Body.pipe(res);

  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports= {uploadLyrics,getLyrics}