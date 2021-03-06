module.exports = {

    getSchedule: (req, res, next) => {
        const dbInstance = req.app.get('db');
      
        dbInstance.get_schedule()
            .then(courses => res.status(200).send(courses))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    },

    getScheduleTime:(req,res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_schedule_time()
            .then(times => res.status(200).send(times))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    },


    deleteCourse: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.delete_course([params.id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    }
}