const router = require('express').Router();
const furnitureManager = require('../managers/furnitureManager');


router.get('/', async (req, res) => {

    const qs = req.query;

    try {
        const result = await furnitureManager.getAll(qs);

        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        await furnitureManager.create({...req.body, _ownerId: req.user._id});
        res.status(201).end();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await furnitureManager.getById(req.params.id);

        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        await furnitureManager.update(req.params.id, req.body);

        res.status(200).end();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await furnitureManager.delete(req.params.id);

        res.status(200).end();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;