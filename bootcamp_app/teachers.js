const { Pool } = require('pg');
queryParams = process.argv.slice(2);

const pool = new Pool({
  user: 'colinmcewan',
  password: 'test',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = $1
ORDER BY teachers.name;
`, queryParams)
.then(res =>{
  res.rows.forEach((teach) => {
    console.log(`${teach.cohort}: ${teach.teacher}`)
  })
}).catch(err =>{
  console.log(err);
})