const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({

    blogID: {
        type: String,
        required: true,
    },
    uniqueID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    auther: {
        type : String,
        required: false,
        default : "Unknown",
    },
    desc: {
        type : String,
        required: true,
    },
    markdown: {
        type : String,
        required: false,
        default : "",
    }

},
    { timestamps: true }
)

module.exports = mongoose.model('Alien',alienSchema)