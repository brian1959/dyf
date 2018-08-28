SELECT co.coursename, co.coursesummary, co.explevel,s.dayid, s.time24, s.scheduleid , p.presenter, p.company, ca.category, s."day", s."time"
FROM schedule AS s
JOIN courses AS co ON
s.courseid = co.courseid
JOIN category AS ca ON
ca.categoryid = co.categoryid
JOIN presenters AS p ON
co.presenterid = p.presenterid
order by dayid, time24
;


