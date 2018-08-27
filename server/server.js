require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const axios = require("axios");

const presenter_controller = require("./presenter_controller");
const course_controller = require("./course_controller");

const app = express();

//db connection

const {
  SERVER_PORT,
  SECRET,
  REACT_APP_CLIENT_ID,
  REACT_APP_DOMAIN,
  CLIENT_SECRET,
  CONNECTION_STRING,
  NODE_ENV
} = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/build`));

//session functionality
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.get("/auth/callback", async (req, res) => {
  //use code from query in payload fro token
  const payload = {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code,
    grant_type: "authorization_code",
    redirect_uri: `http://${req.headers.host}/auth/callback`
  };
  //trade the code for a token

  let resWithToken = await axios.post(
    `https://${REACT_APP_DOMAIN}/oauth/token`,
    payload
  );
  //use token to get data
  let resWithUserData = await axios.get(
    `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
      resWithToken.data.access_token
    }`
  );

  let { email, name, picture, sub } = resWithUserData.data;
  let db = req.app.get("db");
  let foundUser = await db.find_user([sub]);
  if (foundUser[0]) {
    req.session.user = foundUser[0];
    res.redirect("/#/schedule");
  } else {
    let createdUser = await db.create_user(name, email, picture, sub);
    req.session.user = createdUser[0] = res.redirect("/#/registrationform");
  }
});

function envCheck(req, res, next) {
  if (NODE_ENV === "dev") {
    req.app
      .get("db")
      .get_user_by_id()
      .then(userWithIdOne => {
        req.session.user = userWithIdOne[0];
        next();
      });
  } else {
    next();
  }
}

app.get("/api/user-data", envCheck, (req, res) => {
  if (req.session.user) {
    res.status(200).send(req.session.user);
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.get("/auth/logout", (req, res) => {
  req.session.destroy();
  res.redirect("http://localhost:3000/");
});
//end of session logging

app.get("/api/presenters", presenter_controller.getPresenters);
app.post("/api/presenter", presenter_controller.addPresenter);
app.delete("/api/presenter", presenter_controller.deletePresenter);
app.get("/api/courses", course_controller.getCourses);
app.post("api/course", course_controller.addCourse);
app.put("/api/course", course_controller.updateCourse);
app.delete("/api/course", course_controller.deleteCourse);

app.listen(SERVER_PORT, () => {
  console.log(`Server evesdropping on port ${SERVER_PORT}.`);
});
