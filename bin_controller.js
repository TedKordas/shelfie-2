module.exports = {
    getAllBins: (req, res, next) => {
        const db = req.app.get('db');

        db.read_bins([req.params.shelf])
            .then( bins => res.status(200).send(bins) )
            .catch( () => res.status(500).send() );
    },

    getOneBin: (req, res, next) => {
        const db = req.app.get('db');

        db.read_bin([req.params.bin])
            .then( bin => res.status(200).send(bin) )
            .catch( () => res.status(500).send() );
    },

    updateBin: (req, res, next) => {
        const db = req.app.get('db');
        const bin = req.params.bin;
        const { name, price } = req.query;

        db.update_bin([bin, name, price])
            .then( () => res.status(200).send() )
            .catch( () => res.status(500).send() );
    }
}