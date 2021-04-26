const mongoose = require('mongoose')


const Schema = mongoose.Schema

const userSchema = new Schema({
        nom: String,
        tel: Number,
        Add_mail: String,
        role: String,
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
        deleted_at: { type: Date, default: Date.now }
    })
    //MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true })
module.exports = mongoose.model('user', userSchema, 'user')