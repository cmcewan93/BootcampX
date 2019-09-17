SELECT assignments.day, count(assignments) as number_of_assignmnets, sum(assignments.duration)
FROM assignments
GROUP BY assignments.day
ORDER BY assignments.day;