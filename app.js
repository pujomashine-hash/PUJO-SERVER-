const express = require ("express")
const app = express ()
const cors = require ("cors")
app.use(express.json())
app.use(cors())
const songRoutes = require ("./routes/songRoutes")
app.use("/songs",songRoutes)
module.exports= app