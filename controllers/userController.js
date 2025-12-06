import User from '../models/User.js';

function createUser(req, res) {

    const user = new User(req.body)

}