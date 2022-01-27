const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

const unternehmen = {};

app.get('/unternehmen', (req, res) => {
    res.send(unternehmen);
});

app.post('/unternehmen', (req, res) => {
    const UID = randomBytes(4).toString('hex');
    const { UName, Adresse } = req.body;

    unternehmen[UID] = {
        UID, 
        UName, 
        Adresse,
    };

    res.send(unternehmen[UID]);

});

app.put('/unternehmen/:UID', (req, res) => {
    const { UID } = req.params;
    const { neueAdresse } = req.body;

    unternehmen[UID].Adresse = neueAdresse;

    res.send(unternehmen[UID]);

});

app.listen(3000, () => {
    console.log('Listening on 3000');
});