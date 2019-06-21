const mongoose = require('mongoose');

//defining the schema for the collection 'users'
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // mongoose Type objectId is used for generating unique ID's
    email: {
        type: String,
        required: true
    },
    password: String
});

//exporting the schema as User
module.exports = mongoose.model("User", userSchema);