module.exports = {

    getPresenters: (req, res, next) => {
        const db = req.app.get('db');

        db.get_presenters()
            .then(presenters => res.status(200).send(presenters))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been infomred!" });
                console.log(err)
            });
    },

    addPresenter: (req, res, next) => {
        const db = req.app.get('db');
        const { pfirstname, plastname, pbio, pimage } = req.body;
        console.log(req.body)
        db.add_presenter([pfirstname, plastname, pbio, pimage])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been infomred!" });
                console.log(err)
            });

    },



    deletePresenter: (req, res, next) => {
        const db = req.app.get('db');
        const { params } = req;

        db.delete_presenter([params.id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been infomred!" });
                console.log(err)
            });
    }
}