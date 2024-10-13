import { Users } from "../models/user.model.js";

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
        const new_user = await Users.create(req.body);

        if (new_user) {
            res.redirect('/login');
        }
    }
}
const user_login = async (req, res) => { }
const user_verify = async (req, res) => { }
const user_logout = async (req, res) => { }

export const authController = { user_register, user_login, user_verify, user_logout }