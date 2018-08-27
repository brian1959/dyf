UPDATE courses SET cname =$2 , csummary=$3, cinstructor=$4, crank=$5) 
WHERE courseid = $1
