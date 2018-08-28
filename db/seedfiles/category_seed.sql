CREATE TABLE category
(
    categoryid Serial Primary Key,
    category VARCHAR(40)
);

INSERT INTO category
VALUES
    (1, 'Collaboration'),
    (2, 'DNA'),
    (3, 'Family Trees'),
    (4, 'Geographical'),
    (5, 'Methodology'),
    (6, 'Military'),
    (7, 'Mobile'),
    (8, 'Newspapers'),
    (9, 'Organization'),
    (10, 'Photo & Stories'),
    (11, 'Preservation'),
    (12, 'Records'),
    (13, 'Religion'),
    (14, 'Social Media'),
    (15, 'Technology');
