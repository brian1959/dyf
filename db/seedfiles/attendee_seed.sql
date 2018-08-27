CREATE TABLE attendees
(
    attendeeid SERIAL PRIMARY KEY,
    afirstname VARCHAR(20),
    alastname VARCHAR(20),
    aaddress VARCHAR(40),
    acity VARCHAR(20),
    astate VARCHAR(20),
    azip VARCHAR(10),
    email VARCHAR(60),
    phone VARCHAR(15),
    username VARCHAR(15),
    apassword VARCHAR(10),
    auth_id text
);