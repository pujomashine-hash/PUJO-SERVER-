const mongoose = require("mongoose")
const ChurchSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    collection: "churches"
})
module.exports = mongoose.model("Churches", ChurchSchema)
