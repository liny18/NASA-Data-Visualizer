require('dotenv').config();
const axios = require('axios');
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

const port = process.env.PORT;
const GEOCODING_API_KEY = process.env.GEOCODING_API_KEY;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());

app.use(express.static('../client/dist'));

const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

app.listen(port, () => console.log(`Listening on port ${port}`));

const getNASAData = async (start, end, lat, lng) => {
    const url = `https://power.larc.nasa.gov/api/temporal/climatology/point?start=${start}&end=${end}&latitude=${lat}&longitude=${lng}&community=re&parameters=WS2M,WD2M,WS10M,WD10M,WS50M,WD50M&format=json&header=true`;

    const result = await axios.get(url);
    return result.data.properties.parameter;
};

const getCityName = async (lat, lng) => {
    const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=1&appid=${GEOCODING_API_KEY}`;

    const result = await axios.get(url);
    return result.data[0].name;
};

app.get('/api/loc', async (req, res) => {
    try {
        await client.connect();

        const collection = client.db('NASA').collection('Locations');
        const lat = parseFloat(req.query.lat);
        const lng = parseFloat(req.query.lng);
        const startYear = req.query.startYear;
        const cityName = (await getCityName(lat, lng)).toLowerCase();

        if (cityName) {
            const cityYearKey = `${cityName}_${startYear}`; // Create a unique key for city and year
            const city = await collection.findOne({ key: cityYearKey });

            if (city) {
                res.status(200).json(city);
            } else {
                const nasaData = await getNASAData(startYear, 2021, lat, lng);
                await collection.insertOne({
                    key: cityYearKey,
                    name: cityName,
                    data: nasaData,
                });
                res.status(200).json({
                    name: cityName,
                    year: startYear,
                    data: nasaData,
                });
            }
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await client.close();
    }
});
