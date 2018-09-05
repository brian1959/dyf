module.exports = {
  getAttendees: (req, res, next) => {
    const db = req.app.get("db");

    db.get_attendees()
      .then(attendees => res.status(200).send(attendees))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },

  getAttendee: async (req, res) => {
    const db = req.app.get("db");
    const { userid } = req.session.user;
    let attendee = await db.get_attendee([userid]);
    res.status(200).send(attendee)

  },
  getAttendeeSchedule: async (req, res) => {
    // console.log('we are here')
    const db = req.app.get("db");
    const { userid } = req.session.user;
    let attendeeSchedule = await db.get_attendee_schedule([userid]);
    res.status(200).send(attendeeSchedule)

  },

  updateAttendee: async (req, res) => {
    const db = req.app.get("db");

    const { userid } = req.session.user;
    let attendee = await db.get_attendee([userid]);
   
    const {
      firstname = attendee[0].firstname,
      lastname = attendee[0].lastname,
      address = attendee[0].address,
      city = attendee[0].city,
      state = attendee[0].state,
      zip = attendee[0].zip,
      phone = attendee[0].phone,
      email = attendee[0].email
    } = req.body;

    let updatedAttendee = await db.update_attendee([
     
      userid,
      firstname,
      lastname,
      address,
      city,
      state,
      zip,
      phone,
      email
    ]);

    res.status(200).send(updatedAttendee);
  },

  deleteAttendee: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.delete_attendee([id])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },
  deleteAttendeeSchedule: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.delete_attendee_schedule([id])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },

  addAttendeeSchedule: (req, res) => {
    const db = req.app.get("db");
    const { scheduleid } = req.body;

    db.add_attendee_schedule([req.session.user.userid, scheduleid])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  }
};
