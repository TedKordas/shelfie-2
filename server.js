const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const path = require('path');
const bin_controller = require('./bin_controller');

const app = express();

app.use( bodyParser.json() );
app.use( cors() );
massive( process.env.DATABASE_URL ).then( dbInstance => app.set('db', dbInstance) );

app.use(express.static(path.join(__dirname, 'client/build')));

app.get( '/api/shelf/:id', bin_controller.getAllBins );
app.get( '/api/bin/:id', bin_controller.getOneBin );
app.put( '/api/bin/:id', bin_controller.updateBin);
app.delete( '/api/bin/:id', bin_controller.deleteBin);
app.post( '/api/bin/:id', bin_controller.createBin);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );