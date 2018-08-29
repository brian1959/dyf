module.exports = {

    getFaqs: (req, res, next) => {
        const db = req.app.get('db');

        db.get_faq()
            .then(featured => res.status(200).send(featured))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    },
}