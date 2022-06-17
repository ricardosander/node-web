const express = require('express');
const abilityScores = require('./ability-scores');

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.json({message: 'Hello World'});
});

app.use('/scores', abilityScores);


app.listen(port, function () {
    console.log(`Express running on port ${port}`); 
});