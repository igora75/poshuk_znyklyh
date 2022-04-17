import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 255,
        trim: true,
        required: true
    },
    surname: {
        type: String,
        minlength: 2,
        maxlength: 255,
        trim: true,
        required: true
    },
    midname: {
        type: String,
        minlength: 2,
        maxlength: 255,
        trim: true
    },
    city: {
        type: String,
        minlength: 2,
        maxlength: 30,
        trim: true,
        required: true
    },
    region: {
        type: String,
        minlength: 2,
        maxlength: 255,
        trim: true
    },
    birth_year: {
        type: Number,
        minlength: 2,
        maxlength: 4,
        trim: true
    },
    description: {
        type: String,
        minlength: 2,
        maxlength: 255,
        trim: true
    },
    add_time: {
        type: String,
        minlength: 2,
        maxlength: 255,
        trim: true,
        required: true
    },
    picture: {
        type: String,
        minlength: 2,
        maxlength: 255,
        trim: true,
        required: true
    },
})

export default mongoose.model('Post', Post)