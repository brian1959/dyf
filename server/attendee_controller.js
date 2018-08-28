module.exports = {

    getAttendees: (req, res, next) => {
        const db = req.app.get('db');

        db.get_attendees()
            .then(attendees => res.status(200).send(attendees))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    },

    getAttendee: (req, res, next) => {
        const db = req.app.get('db');

        db.get_attendee()
            .then(attendee => res.status(200).send(attendee))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    },

    addAttendee: (req, res, next) => {
        const db = req.app.get('db');
        const {afirstname, alastname, aaddress,  acity, astate,  azip, email, phone, username, apassword, auth_id} = req.body;
        console.log(req.body)
        db.add_attendee([afirstname, alastname, aaddress,  acity, astate,  azip, email, phone, username, apassword, auth_id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });

    },

    updateAttendee:(req, res) => {
        const updateID = req.params.id;
        const {afirstname, alastname, aaddress, acity, astate, azip, email, phone, username, apassword  } = req.body;
        const attendeeIndex = attendees.findIndex(attendee=> attendee.id == updateID);
        console.log(date)
        let attendee = attendees[attendeeIndex];

        attendees[attendeeIndex ] = {
            id: attendee.id,
            afirstname: afirstname || attendee.afirstname,
            alastname: alastname || attendee.alastname,
            aaddress: aaddress || attendee.aaddress,
            acity: acity || attendee.acity,
            astate: astate || attendee.astate,
            azip: azip || attendee.azip,
            email: email || attendee.email,
            phone: phone || attendee.phone,
            username: username || attendee.username,
            apassword: apassword || attendee.apassword
        };
        console.log(workouts)
        res.status(200).send(workouts);
     },



    deleteAttendee: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.delete_attendee([id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    }
}