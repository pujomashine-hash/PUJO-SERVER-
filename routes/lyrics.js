const express = require ("express")
const router = express.Router({
  mergeParams: true
});
const {uploadLyrics, getLyrics} =
  require ("../controllers/lyrics")
router.get("/lyrics",uploadLyrics)
router.get("/",getLyrics)
module.exports= router