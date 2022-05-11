const getEmployees = `SELECT
    id,
    first_name AS "firstName",
    last_name AS "lastName",
    birth_date AS "birthDate",
    phone AS "phone",
    tags AS "tags",
    office_id AS "officeId"
  FROM employee`;

const getEmployeeById = `SELECT
    id,
    first_name AS "firstName",
    last_name AS "lastName",
    birth_date AS "birthDate",
    phone AS "phone",
    tags AS "tags",
    office_id AS "officeId"
  FROM employee WHERE id = $1`;

const addEmployee =
  "INSERT INTO employee (first_name, last_name, birth_date, phone, tags, office_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
const deleteEmployee = "DELETE FROM employee WHERE id = $1 RETURNING *";
const updateEmployee =
  "UPDATE employee SET first_name = $1, last_name = $2, birth_date = $3, phone = $4, tags = $5, office_id = $6 WHERE id = $7 RETURNING *";
const setNextVal =
  "SELECT setval('employee_id_seq', (SELECT max(id) FROM employee))";

module.exports = {
  getEmployees,
  getEmployeeById,
  addEmployee,
  deleteEmployee,
  updateEmployee,
  setNextVal,
};
