const Song = require("../models/song");
const { GetObjectCommand } = require("@aws-sdk/client-s3");
const r2 = require("../services/r2.service");

const downloadFile = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);

    if (!song) {
      return res.status(404).json({
        message: "Song not found"
      });
    }

    const fileName = song.file.split("/").pop();

    const command = new GetObjectCommand({
      Bucket: process.env.R2_BUCKET,
      Key: song.file
    });

    const response = await r2.send(command);

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${fileName}"`
    );

    response.Body.pipe(res);

  } catch (e) {
    res.status(500).json({
      message: e.message
    });
  }
};

module.exports = { downloadFile };