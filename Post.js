import mongoose from "mongoose";
import { CURRENT_DATE } from "./constants/constants.js";

const Post = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    surname: {
        type: String,
        trim: true,
        required: true
    },
    midname: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true,
        required: true
    },
    region: {
        type: String,
        trim: true
    },
    birth_year: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    date: {
        type: String,
        default: CURRENT_DATE
    },
    picture: {
        type: String,
        trim: true,
        
    },
})

export default mongoose.model('Post', Post)