const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
    
        description: {
            type: String,
            required: true
        },
    
        status: {
            type: Boolean,
            required: true
        },
    
    },
     { timestamps: true }
)

module.exports = mongoose.model("Todo",todoSchema)