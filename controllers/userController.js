import User from '../models/User.js';
import bcrypt from "bcrypt";

export function createUser(req, res) {

    const user = new User(req.body)

    const data = req.body;

    const hashedPassword = bcrypt.hashSync(data.password, 10);

    res.json({hashedPassword});

    // user.save().then(() => {
    //     res.json({
    //         message: 'User created successfully'
    //     });
    // }
    // )
}