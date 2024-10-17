import { Users } from "../models/user.model.js";
import sendEmail from "../utils/sendEmail.js";

const user_register = async (req, res) => {
    const { email, password, cpassword } = req.body;

    const exists = await Users.findOne({
        email: email
    });

    if (exists) {
        res.redirect('/register');
    } else if (password !== cpassword) {
        res.redirect('/register');
    } else {
        const new_user = Users(req.body);

        const verificationToken = new_user.generateVerifyToken()

        new_user.verificationToken = verificationToken;
        new_user.verificationTokenExpiry = new Date(Date.now() + 3 * 60 * 60 * 1000);

        await new_user.save();

        const response = await sendEmail(email, 'Email Verification', `
            Hello user!
            Thanks for registering on iSecure. Please click on the verification link below and confirm your account.
            
            <a href="${req.protocol + '://' + req.headers.host + '/api/auth/verify/' + verificationToken}" target="_blank">${req.protocol + '://' + req.headers.host + '/api/auth/verify/' + verificationToken}</a>
        `);

        if (new_user && response) {
            res.redirect('/login');
        } else {
            res.redirect('/register');
        }
    }
}
const user_login = async (req, res) => { }
const user_verify = async (req, res) => {
    const { token } = req.params;

    const user = await Users.findOne({
        verificationToken: token
    });

    if (user) {
        const response = user.verifyToken(token);

        if (response) {
            await Users.findOneAndUpdate({ verificationToken: token }, {
                $set: {
                    isVerified: true,
                    verificationToken: null,
                    verificationTokenExpiry: null
                }
            })
            res.redirect('/login');
        } else {
            res.redirect('/register');
        }
    } else {
        res.redirect('/register');
    }
}
const user_logout = async (req, res) => { }

export const authController = { user_register, user_login, user_verify, user_logout }