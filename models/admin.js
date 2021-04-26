const mongoose = require('mongoose')


const Schema = mongoose.Schema

const adminSchema = new Schema({
        nom_admin: String,
        tel: Number,
        Add_mail: String,
        created_at: Date,
        updated_at: Date,
        deleted_at: Date
    })
    //MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true })
module.exports = mongoose.model('admin', adminSchema, 'admins')