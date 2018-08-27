module.exports = {

    getCourses: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_courses()
            .then(courses => res.status(200).send(courses))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been infomred!" });
                console.log(err)
            });
    },

    addCourse: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { cname, csummary, cinstructor, crank } = req.body;
        console.log(req.body)
        dbInstance.add_course([cname, csummary, cinstructor, crank])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been infomred!" });
                console.log(err)
            });

    },
    updateCourse: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { cname, csummary, cinstructor, crank } = req.query;
        dbInstance.update_course([params.id, query.cname, query.csummary, query.cinstructor, query.crank])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been infomred!" });
                console.log(err)
            });

    },


    deleteCourse: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.delete_course([params.id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been infomred!" });
                console.log(err)
            });
    }
}