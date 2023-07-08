const mongoose = require ('mongoose');

const connectSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true, "Please add the contact name"],

    },
    email : {
        type:String,
        required:[true, "Please add the contact email address"],
    },
    phone:{
    type:String,
    required:[true, "Please add the phone number"],
    },
},{
    timestamps: true,
})

module.exports = mongoose.model("Contact",connectSchema)