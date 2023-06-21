const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    const token = req.header('X-Authorization');

    if(token) {
        try {
            const decoded = jwt.verify(token, 'SECRETSECRET');
            req.user = decoded;

            next();
        } catch (err) {
            res.status(401).json({ message: 'Invalid token!' });
        }
    } else {
        next();
    }
};