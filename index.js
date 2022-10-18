import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import * as url from 'url';

import statsRoutes from './routes/Statistics_route.js'
import areaDefinitions from './routes/AreaDefinitions_route.js'

dotenv.config();

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use('/statistics', statsRoutes);
app.use('/areadefinitions', areaDefinitions);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./pages/homepage.html"))
})


app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})