import mongoose, { Schema, Types } from "mongoose";

const profileSchema = new Schema({
    user: {
        type: Types.ObjectId,
        required: true,
        ref: 'users'
    },
    image: {
        type: String,
        default: '/images/default-avatar.png'
    },
    about: {
        type: String
    },
    tw_url: {
        type: String
    },
    fb_url: {
        type: String
    },
    gh_url: {
        type: String
    },
    website: {
        type: String
    }
})

export const UserProfile = mongoose.model('profiles', profileSchema);
