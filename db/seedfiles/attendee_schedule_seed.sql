CREATE TABLE attendeeschedule
(
    asid SERIAL PRIMARY KEY,
    attendeeid INTEGER NOT NULL,
    scheduleid INTEGER NOT NULL
);

insert into attendeeschedule (attendeeid, scheduleid)

VALUES
(17,3),
(17,15),
(18,24),
(18,54),
(18,63),
(17,123),
(17,144),
(18,167),
(18,84),
(18,42),
(17,101),
(17,93);