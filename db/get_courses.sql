SELECT courses.courseid, courses.cname, courses.csummary, presenters.pfirstname, presenters.plastname, experience.elevel  FROM courses
JOIN presenters ON
presenterid = cinstructor
JOIN experience ON
crank = explvl;