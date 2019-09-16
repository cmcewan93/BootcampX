SELECT name, email, id
FROM STUDENTS
WHERE '%gmail.com\i' NOT LIKE  email
AND phone is NULL;