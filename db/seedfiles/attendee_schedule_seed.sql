CREATE TABLE attendeeschedule
(
    asid SERIAL PRIMARY KEY,
    attendeeid INTEGER NOT NULL,
    schedulesid INTEGER NOT NULL
);