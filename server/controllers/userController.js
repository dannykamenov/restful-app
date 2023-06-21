const router = require('express').Router();
const userManager = require('../managers/userManager');

router.post('/register', async (req, res) => {
    try {
        const result = await userManager.register(req.body);

        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const result = await userManager.login(req.body);

        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/logout', async (req, res) => {
    res.end();
});

module.exports = router;