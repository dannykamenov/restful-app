const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (userData) => {
    
    const user = User.create(userData)

    const result = getAuthResult(user);

    return result;
};

exports.login = async ({email, password}) => {
    const user = await User.findOne({email});

    if (!user) {
        throw new Error('Invalid email or password!');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Invalid email or password!');
    }

    const result = getAuthResult(user);

    return result;
};

function getAuthResult(user) {
    const payload = {
        _id: user._id,
        email: user.email,
    }
    const token = jwt.sign(payload, 'SECRETSECRET', {expiresIn: '1h'});

    const result = {
        email: user.email,
        accessToken: token,
        _id: user._id
    };

    return result;
}