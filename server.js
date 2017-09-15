const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const path = require('path');
require('dotenv').config();

const app = express();

app.use( bodyParser.json() );
app.use( cors() );
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api', (req, res) => res.status(200).send('This is a test'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );