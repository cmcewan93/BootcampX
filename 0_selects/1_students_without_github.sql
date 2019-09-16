SELECT id, name, email, cohort_id
 FROM STUDENTS
  WHERE github IS NULL
  ORDER BY cohort_id;