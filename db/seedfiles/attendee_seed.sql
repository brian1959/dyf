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

INSERT INTO attendees (afirstname, alastname, aaddress,  acity, astate,  azip, email, phone, username, apassword)
VALUES
('Carl',  'McCann', '1234 Somewhere Dr', 'Lakewood', 'CO', '80123', 'carlt320@gmail.com', '325-345-5555','oldman58','w3e4r5t6'),
( 'Roy',  'Rogers', '1234 Anywhere Dr', 'Lakewood', 'CA', '95123', 'rrsilver@gmail.com', '916-345-5555','cowboy1','w3e4r5t6'),
( 'Clyde','Bonnie', '1234 Nobody Lane', 'Provo', 'UT', '84601', 'heist@gmail.com', '801-345-5555','moneyman','w3e4r5t6'),
( 'Joe',  'Black', '1543 Main St', 'Tacoma', 'WA', '98123', 'blkjo@gmail.com', '325-345-5555','jb1999','w3e4r5t6'),
( 'Jane',  'Clyde', '8573 N Ogden Rd', 'Ogden', 'UT', '84401', 'jane85@gmail.com', '801-742-5555','gunman','w3e4r5t6'),
( 'Suzanne',  'Deal', '4290 W Alhambra Blvd', 'Concord', 'CA', '94518', 'susieq@gmail.com', '739-455-9000','sisgoldenhair','w3e4r5t6');