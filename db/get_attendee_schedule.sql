SELECT co.coursename, co.coursesummary, co.explevel,s.dayid, s.time24, s.scheduleid , p.presenter,ca.category, s."day", s."time",a.attendeeid, a.asid
FROM schedule AS s
JOIN courses AS co ON
s.courseid = co.courseid
JOIN category AS ca ON
ca.categoryid = co.categoryid
JOIN presenters AS p ON
co.presenterid = p.presenterid
JOIN attendeeschedule AS a On
s.scheduleid = a.schedulesid
WHERE a.attendeeid=$1
order by dayid, time24;