module.exports = {

    getAllBins: (req, res, next) => {
        const db = req.app.get('db');

        db.get_all_bins([req.params.id])
            .then( bins => {                
                var newArr = [];
                
                for(i = 1; i <= 5; i++) {
                  var bin = bins.find( (obj) => obj["bin_num"] === i );
                  bin === undefined ? newArr.push(null) : newArr.push(bin);
                }

                res.status(200).send(newArr)
            })
            .catch( () => res.status(500).send() );
    },

    getOneBin: (req, res, next) => {
        const db = req.app.get('db');
        const id = req.params.id;
        const letter = id.substr(0,1);
        const number = id.substr(1,1);

        db.get_one_bin([letter, number])
            .then( bin => {
                bin[0] === undefined
                ?
                res.status(200).send(null)
                :
                res.status(200).send(bin);
            })
            .catch( () => res.status(500).send() );
    },

    updateBin: (req, res, next) => {
        const db = req.app.get('db');
        const id = req.params.id;
        const letter = id.substr(0,1);
        const number = id.substr(1,1);
        const { name, price } = req.query;

        db.bin_exists([letter, number])
            .then( bin => {
                bin[0] === undefined
                ?
                res.status(403).send()
                :
                db.update_bin([letter, number, name, price])
                .then( () => res.status(200).send() )
                .catch( () => res.status(500).send() );
            })
    },

    deleteBin: (req, res, next) => {
        const db = req.app.get('db');
        const id = req.params.id;
        const letter = id.substr(0,1);
        const number = id.substr(1,1);

        db.delete_bin([letter, number])
            .then( () => res.status(200).send() )
            .catch( () => res.status(500).send() );
    },

    createBin: (req, res, next) => {
        const db = req.app.get('db');
        const id = req.params.id;
        const letter = id.substr(0,1);
        const number = id.substr(1,1);
        const { name, price } = req.query;

        db.bin_exists([letter, number])
        .then( bin => {
            bin[0] === undefined
            ?
            db.create_bin([name, price, letter, number])
            .then( () => res.status(200).send() )
            .catch( () => res.status(500).send() )
            :
            res.status(403).send();
        })
    }

    
}