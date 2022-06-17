const express = require('express');

const router = express.Router();

const scores = [
        { code: 'FOR', name: 'Força' },
        { code: 'INT', name: 'Inteligência' },
        { code: 'SAB', name: 'Sabedoria' },
        { code: 'CON', name: 'Constituição' },
        { code: 'DES', name: 'Destreza' },
        { code: 'CAR', name: 'Carisma' }
];

router.get('/', function (req, res) {
    res.json(scores);
});

router.get('/:id', function (req, res) {
    const result = scores.filter((value) => value.code == req.params.id);
    if (result.length > 0) {
        res.json(result[0]);
    }
    res.status(404).end();
});

module.exports = router;