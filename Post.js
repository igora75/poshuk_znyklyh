import mongoose from "mongoose";
import { CURRENT_DATE } from "./constants/constants.js";

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
    date: {
        type: String,
        default: CURRENT_DATE
    },
    picture: {
        type: String,
        minlength: 2,
        maxlength: 255,
        trim: true,
        
    },
})

export default mongoose.model('Post', Post)