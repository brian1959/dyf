
CREATE TABLE featured
(
    featured_id SERIAL PRIMARY KEY,
    presenterid INTEGER,
    presenter_image VARCHAR(60),
    caption VARCHAR(40),
    presenter_title VARCHAR(100),
    presenter_bio TEXT
);

INSERT INTO  featured
    (presenterid, presenter_image, caption, presenter_title, presenter_bio)
VALUES
    (136, 'tony burroughs.jpg', 'Genealogist', 'Founder and CEO | Center for Black Genealogy', 'Tony Burroughs is founder and CEO of The Center for Black Genealogy. He is an internationally known genealogist who taught genealogy at Chicago State University for fifteen years.'),
    (100, 'Maureen-Taylor-Photo-360.jpg', 'Photo Detective', '', ' Maureen Taylor is known as the Photo Detective for finding family history in photo mysteries. She''s been a featured speaker at genealogical conferences since 1995.'),
    (22, 'Ari-Wilkins-Phot-360.jpg', 'Genealogist', 'Dallas Public Library', 'Ari Wilkins is a genealogist, lecturer, and staff member of Dallas Public Library. She has lectured nationally at Federation of Genealogical Societies, Samford''s Institute of Genealogical and Historical Research, and Alabama State University Genealogical Colloquium. Ms. Wilkins also consults for the Afrigeneas website and Proquest’s African American Heritage database. She specializes in African American genealogy research.'),
    (23, 'audrey collins.jpg', 'Genealogist', 'Family History Specialist | The National Archives (UK)', 'A Scot in exile in England since childhood, was a freelance genealogical researcher and writer for several years before joining The National Archives (UK), and holds the post of Family History Specialist there. Regular speaker at family history events, mainly in the UK, US, and Canada, blogger, and presenter of podcasts and webinars. Co-author of ‘Birth, Marriage and Death Records’, author/reviser of many online research guides. Loves technology, but only occasionally understands how it works.'),
    (120, 'Rebecca-Whitman-Koford-Photo-360.jpg', 'Genealogist', 'CG', 'Rebecca Whitman Koford holds a Certified Genealogist® credential, emphasizing in Maryland. Rebecca has been taken clients and lectured since 2004 for local groups, the Maryland State Archives, NGS Conference, IGHR, and webinars for Legacy and APG. She is a board member of the Maryland Genealogical Society. She has published articles in the NGS Magazine, Maryland Genealogical Society Journal, and APG Magazine. A graduate of the ProGen Study Group; she was appointed ProGen Administrator in 2015.'),
    (112, 'Nicka-Smith-Photo-294.jpg', 'Host of BlackProGen LIVE', ' ', 'Nicka Smith is a professional photographer, speaker, host, and documentarian with more than 19 years of experience as a genealogist. She has extensive experience in African ancestored genealogy, reverse genealogy, and family reunion planning and execution. She is also an expert in genealogical research in the Northeastern Louisiana area, sharing genealogy with youth, documenting the ancestral journey, and employing the use of new technology in genealogy and family history research.'),
    (122, 'Richard-Sayre-Photo-360.jpg', 'Genealogist', 'CG', 'Rick Sayre’s areas of expertise include the records of the National Archives, land research, Irish research, land records, government documents, military records and urban research.'),
    (74, 'jennifer holik.jpg', 'Genealogist', 'Global Coordinator | World War II Research and Writing Center', 'The Legal Genealogist Judy G. Russell is a genealogist with a law degree who writes and lectures on topics ranging from using court records in family history to understanding DNA testing. On the faculty of IGHR, SLIG, GRIP, MAAGI, and Gen-Fed, she is a member of the Board of Trustees of the Board for Certification of Genealogists®, from which she holds credentials as a Certified Genealogist® and Certified Genealogical Lecturer. Her award-winning blog is at http://www.legalgenealogist.com.');