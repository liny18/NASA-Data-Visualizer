const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
const API = '4ebc829af5f9613ca836a63fa7f4733b';

app.use(express.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/loc/:lat/:long', async (req, res) => {
    const lat = req.params.lat;
    const long = req.params.long;
    const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=${API}`;

    fetch(url)
        .then((result) => result.json())
        .then((final) => res.status(200).send(final));
});

app.get('/api/nasa/:start/:end/:lat/:long', async (req, res) => {
    const lat = req.params.lat;
    const long = req.params.long;
    const start = req.params.start;
    const end = req.params.end;
    const url = `https://power.larc.nasa.gov/api/temporal/climatology/point?start=${start}&end=${end}&latitude=${lat}&longitude=${long}&community=re&parameters=WS50M&format=json&header=true`;

    fetch(url)
        .then((result) => result.json())
        .then((final) => res.status(200).send(final.properties.parameter.WS50M));
});
