CREATE TABLE presenters
(
    presenterid SERIAL Primary Key,
    presenter varchar(136),
    company varchar(73)
);

INSERT INTO presenters
VALUES
    (1, 'Aaron Godfrey', 'MyHeritage'),
    (2, 'Adam Daly', 'Bloom Built, LLC'),
    (3, 'Ahna Girshick', 'Ancestry'),
    (4, 'Alison Taylor', 'Pictures and Stories, Inc.'),
    (5, 'Amie Bowser-Tennant', 'The Genealogy Reporter'),
    (6, 'Amy Harris', 'BYU'),
    (7, 'Amy Johnson Crow', ''),
    (8, 'Amy Johnson Crow & Curt Witcher', ''),
    (9, 'Andi Gooch', '&D Designs'),
    (10, 'Andrew Lee', 'Family History Fanatics'),
    (11, 'Andrew Niesen & Rachel Niesen', 'Save Family Photos'),
    (12, 'Angela McGhie', ''),
    (13, 'Angela Walton-Raji', ''),
    (14, 'Angie Bush', 'Ancestry ProGenealogists'),
    (15, 'Angie Bush & Diahan Southard', ''),
    (16, 'Angie Bush, Scott Fisher,  CeCe Moore; Diahan Southard & Scott Woodward', ''),
    (17, 'Anita Olsen', 'keytopast'),
    (18, 'Anita Wells,', 'myrootsteps'),
    (19, 'Anna Swayne', 'AncestryDNA'),
    (20, 'Anne Mitchell', 'Ancestry'),
    (21, 'Anthony King', ''),
    (22, 'Ari Wilkins', 'Dallas Public Library'),
    (23, 'Audrey Collins', 'The National Archives (UK)'),
    (24, 'Avraham Groll & Janette Silverman', 'JewishGen & ancestryProGenealogists'),
    (25, 'Bennett Greenspan', 'Family Tree DNA'),
    (26, 'Benson Giang & Sharleen Reyes', ''),
    (27, 'Bill Barrett, Mark Clement, & Tom Sederberg', 'BYU'),
    (28, 'Bob Ives & Bob Taylor', 'The Family History Guide Association'),
    (29, 'Brandon Baird', 'FamilySearch'),
    (30, 'Brian Donovan', 'Irish Family History Centre'),
    (31, 'Byron Holdiman', ''),
    (32, 'Cathy Gilmore', ''),
    (33, 'Cherie Bush & Susan Kaufman', 'Houston Public Library / Clayton Library Center for Genealogical Research'),
    (34, 'Chris Seggerman & Laura Stone', 'Arizona State Library, Archives and Public Records'),
    (35, 'Chris Stubben', 'Huntsman Cancer Institute'),
    (36, 'Clayton Brough', 'LDS Ancestral Families Association'),
    (37, 'Colleen Fitzpatrick', 'identifinders'),
    (38, 'Craig Foster', 'Family History Library'),
    (39, 'Crista Cowan', 'Ancestry'),
    (40, 'Crista Cowan & Anna Swayne', 'Ancestry & AncestryDNA'),
    (41, 'Curt Witcher', 'Genealogy Center, Allen County Public Library'),
    (42, 'D. Joshua Taylor', 'New York Genealogical and Biographical Society'),
    (43, 'Dallan Quass', 'RootsFinder'),
    (44, 'Daniel Earl', 'Dan Earl, The Family History Guy'),
    (45, 'Daniel Horowitz', 'MyHeritage'),
    (46, 'David Andros', 'FOREVER'),
    (47, 'David Lambert', 'New England Historic Genealogical Society'),
    (48, 'David Mann', ''),
    (49, 'David Nicholson', 'Living DNA'),
    (50, 'Debbie Gurtler', 'FamilySearch'),
    (51, 'Deborah Abbott', ''),
    (52, 'Deborah Gamble', 'American Express'),
    (53, 'Dennis Snell', ''),
    (54, 'Devon Noel Lee', 'Family History Fanatics'),
    (55, 'Diahan Southard', 'Your DNA Guide'),
    (56, 'Diana Elder', ''),
    (57, 'Diane Lungo,  Lisa Ratzlaff, Maggie Richards, Jill Woodbury', ''),
    (58, 'Donna Moughty', ''),
    (59, 'Douglas Remley & Kamilah Stinnett', ''),
    (60, 'Drew Smith', 'University of South Florida Tampa Library'),
    (61, 'E. Randol Schoenberg', ''),
    (62, 'Emily Kowalski Schroeder', ''),
    (63, 'Evie Clair; Kenya Clark; Alex Melecio', ''),
    (64, 'Francie Kennedy', ''),
    (65, 'Frederick Wertz', 'New York Genealogical and Biographical Society'),
    (66, 'Harald Heimbeck & Dr. Rolf Sutter', 'PRO HERALDICA - German Research Company for Heraldry and Genealogy'),
    (67, 'Heather Holmes', 'TapGenes'),
    (68, 'Huihan Lie', 'My China Roots'),
    (69, 'Janice Sellers', 'Ancestral Discoveries'),
    (70, 'Janis Forte', 'Midwest African American Genealogy Institute'),
    (71, 'Janis Forte & Jane Haldeman', ' Midwest African American Genealogy Institute & Its Relative'),
    (72, 'Jason Hewlett & Hank Smith', ''),
    (73, 'Jen Baldwin', 'Findmypast'),
    (74, 'Jennifer Holik', 'World War II Research and Writing Center'),
    (75, 'Jenny Hansen', ''),
    (76, 'Jens Nielsen', 'pictureline inc'),
    (77, 'Jim Brewster', 'Family Tree DNA'),
    (78, 'Jim Malcolm, Humaneyes Technologies, Ltd.; Catherine Nelson, The Association of Personal Photo Organizers; Rita Pui Kee Dubey, Canon USA', ''),
    (79, 'John deJong', ''),
    (80, 'Juliana Szucs', 'Ancestry'),
    (81, 'Julie Merrill', ''),
    (82, 'Karina Morale & Leandro Soria', 'FamilySearch'),
    (83, 'Katherine Schober', 'SK Translations'),
    (84, 'Kathy Meade', 'ArkivDigital'),
    (85, 'Kathy Tarullo', ''),
    (86, 'Katuska Christensen', ''),
    (87, 'Kelli Shipp & Jamie Wade', ''),
    (88, 'Kelsee Walker', ''),
    (89, 'Ken Nelson', ''),
    (90, 'Kenneth Bravo', ''),
    (91, 'Kirsty Gray', 'Family Wise Limited'),
    (92, 'Kyle Clements', ''),
    (93, 'Laura Hedgecock', 'TreasureChestOfMemories.com'),
    (94, 'Laurie Castillo', ''),
    (95, 'Lisa Alzo', ''),
    (96, 'Lisa Cooke', ''),
    (97, 'Marissa Huntsman', ''),
    (98, 'Mary Gay Jones & Gordon Taylor', 'Taylor Mgt Tech'),
    (99, 'Mary Jamba', ''),
    (100, 'Maureen Taylor', ''),
    (101, 'Melissa Finlay', ''),
    (102, 'Melody Condron', 'University of Houston'),
    (103, 'Melyssa Webb', 'Billiongraves'),
    (104, 'Michael Booth', 'RootsMagic, Inc.'),
    (105, 'Michael Henderson', ''),
    (106, 'Michael Mansfield', 'MyHeritage.com'),
    (107, 'Michael Sandberg', 'FamilySearch'),
    (108, 'Michael Strauss', ''),
    (109, 'Michelle Goodrum', ''),
    (110, 'Myko Clelland', 'Findmypast'),
    (111, 'Nancy Loe', 'Sassy Jane Genealogy'),
    (112, 'Nicka Smith', ''),
    (113, 'Nicole Dyer', ''),
    (114, 'Olivia Jewell', ''),
    (115, 'Paul Vogelzang', 'The Not Old Better Show'),
    (116, 'Paul Woodbury', 'Legacy Tree Genealogists'),
    (117, 'Peggy Lauritzen', 'Always Anxiously Engaged'),
    (118, 'Peter Drinkwater', ''),
    (119, 'Pierre Le Clercq', 'Académie internationale de généalogie'),
    (120, 'Rebecca Whitman Koford, CG', ''),
    (121, 'Rhonda Lauritzen & Rachel Trotter', 'Evalogue.Life'),
    (122, 'Richard G Sayre', ''),
    (123, 'Ross Curtis', 'Ancestry'),
    (124, 'Sarah Laskey', '23andMe'),
    (125, 'Scott Fisher', 'Extreme Genes- Americas Family History Show'),
    (126, 'Scott Spencer', 'GenealogyBank.com'),
    (127, 'Shannon Christmas', 'Through The Trees Blog'),
    (128, 'Shannon Uschold', 'GenerationStory'),
    (129, 'Shelley Murphy', 'Midwest African American Genealogy Institute'),
    (130, 'Shelley Murray', 'Forever'),
    (131, 'Sunny Morton', 'Lisa Louise Cookes Genealogy Gems, Family Tree Magazine'),
    (132, 'Suzanne Russo Adams', 'FamilySearch'),
    (133, 'Tahitia McCabe', 'University of Strathclyde'),
    (134, 'Thomas MacEntee', 'Abundant Genealogy'),
    (135, 'Tim Janzen', ''),
    (136, 'Tony Burroughs', 'Center for Black Genealogy'),
    (137, 'Tony Hanson', ''),
    (138, 'Valerie Elkins', 'ValerieElkins.com'),
    (139, 'Wendy Hanamura', 'Internet Archive'),
    (140, 'Yaniv Erlich', 'MyHeritage');
