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
            path.join(__dirname, "../uploads/audio/005.mp3")

        const command = new PutObjectCommand({
            Bucket: process.env.R2_BUCKET,
            Key: "songs/005.mp3",
            Body: fs.createReadStream(filePath),
            ContentType: "audio/mpeg"
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
const getAudioFile = async (req, res) => {
    try {
        const song = await
        Song.findById(req.params.id)
        if (!song) {
            return res.status(400).send("Audio not found")
        }

        const command = new GetObjectCommand({
            Bucket: process.env.R2_BUCKET,
            Key: song.file 
        });

        const response = await r2.send(command);

res.setHeader("Content-Type", "audio/mpeg");
res.setHeader("Accept-Ranges", "bytes");
res.setHeader("Cache-Control", "public, max-age=60");

        response.Body.pipe(res);
    } catch (e) {
        res.status(500).send(e.message)
    }
}
module.exports = {
    uploadAudio,
    getAudioFile
}
