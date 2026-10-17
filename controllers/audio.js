const fs = require("fs")
const Song = require("../models/song")
const path = require("path");
const {
    PutObjectCommand,
    GetObjectCommand
} = require("@aws-sdk/client-s3")
const r2 = require("../services/r2.service")

const uploadAudio = async (req, res) => {
    try {
        const filePath =
            path.join(__dirname, "../uploads/audio/0062.mp3")

        const command = new PutObjectCommand({
            Bucket: process.env.R2_BUCKET,
            Key: "songs/0062.mp3",
            Body: fs.createReadStream(filePath),
            ContentType: "audio/mpeg"
        })
        await r2.send(command)
      
        res.status(200).json({
            success: true,
            message: "Audio Uploaded successfully"
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}
const getAudioFile = async (req, res) => {
    try {
        const song = await
        Song.findById(req.params.id)
        if (!song) {
            return res.status(400).send("Audio not found")
        }
         const range = req.headers.range;
      console.log(range);
        const command = new GetObjectCommand({
            Bucket: process.env.R2_BUCKET,
            Key: song.file,
          ...(range&&{Range:range})
        });

        const response = await r2.send(command);

if (range) {
  res.status(206);
} else {
  res.status(200);
}

res.setHeader("Content-Type", "audio/mpeg");
res.setHeader("Accept-Ranges", "bytes");

if (response.ContentRange) {
  res.setHeader("Content-Range", response.ContentRange);
}

if (response.ContentLength) {
  res.setHeader("Content-Length", String(response.ContentLength));
}

response.Body.pipe(res);
    } catch (e) {
        res.status(500).send(e.message)
    }
}
module.exports = {
    uploadAudio,
    getAudioFile
}
