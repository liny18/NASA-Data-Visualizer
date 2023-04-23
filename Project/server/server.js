const fetch = require('node-fetch');
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
const API = '4ebc829af5f9613ca836a63fa7f4733b';

app.use(express.json());

const uri =
    'mongodb+srv://admin:admin@cluster0.5stqqzx.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

//  ----------------------------------------------------------------------------

app.listen(port, () => console.log(`Listening on port ${port}`));

//  ----------------------------------------------------------------------------

const getNASAData = (start, end, lat, long) => {
    const url = `https://power.larc.nasa.gov/api/temporal/climatology/point?start=${start}&end=${end}&latitude=${lat}&longitude=${long}&community=re&parameters=WS50M,WD50M&format=json&header=true`;

    let res = fetch(url)
        .then((result) => result.json())
        .then((final) => final.properties.parameter);

    return res;
};

const getCityLocation = (name) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${name},CT,US&appid=${API}`;

    let res = fetch(url)
        .then((result) => result.json())
        .then((final) => final[0]);

    return res;
};

app.get('/api/loc/:name', async (req, res) => {
    try {
        await client.connect();

        const collection = client.db('NASA').collection('Locations');

        const cname = req.params.name.toLocaleLowerCase();

        if (cname) {
            const city = await collection.findOne({ name: cname });

            if (city) {
                res.status(200).json(city);
            } else {
                let data = await getCityLocation(cname);

                let lat = data.lat;
                let long = data.lon;

                let nasa = await getNASAData(2019, 2020, lat, long);
                
                await collection.insertOne({ name: cname, data: nasa });
                res.status(200).json({ name: cname, data: nasa })
            }
        }
    } catch (e) {
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await client.close();
    }
});
