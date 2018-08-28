SELECT courses.courseid, courses.coursename, courses.coursesummary, courses.explevel,schedule.dayid, schedule.time24  
FROM schedule
JOIN courses ON
schedule.courseid = courses.courseid
JOIN presenters ON
courses.presenterid = presenters.presenterid
order by dayid, time24
;

