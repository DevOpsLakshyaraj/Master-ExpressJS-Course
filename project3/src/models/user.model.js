import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    last_login: {
        type: Date
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verifyToken: {
        type: String
    },
    verifyTokenExpiry: {
        type: Date
    }
}, { timestamps: true })

userSchema.pre("save", async function () {
    if (!this.isModified('password')) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

// Methods
userSchema.methods = function generateVerifyToken() {
    const token = crypto.randomUUID();
    return token;
}

userSchema.methods = function verifyToken(token) {
    const hasTokenExpired = new Date() > this.verifyTokenExpiry;
    if (this.verifyToken === token && !hasTokenExpired) {
        return true;
    } else {
        return false;
    }
}

export const Users = mongoose.model('users', userSchema);
