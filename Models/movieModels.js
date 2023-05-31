const mongoose = require('mongoose');

//create schema
const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required field!"],
        unique:true 
    },
    description:String,
    duration:{
        type:Number,
        required:[true,"Duration is required filled!"]
    },
    ratings:{
        type:Number,
        default:1.0
    }
});
// create model
const Movie = mongoose.model('Movie',movieSchema);

module.exports = Movie;
