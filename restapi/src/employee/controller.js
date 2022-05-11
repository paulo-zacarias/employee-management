const pool = require("../../db");
const queries = require("./queries");

const getEmployees = (req, res) => {
  pool.query(queries.getEmployees, (error, results) => {
    if (error) res.status(500).send(error.detail);
    res.status(200).json(results.rows);
  });
};

const getEmployeeById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getEmployeeById, [id], (error, results) => {
    if (error) res.status(500).send(error.detail);
    res.status(200).json(results.rows[0]);
  });
};

const addEmployee = (req, res) => {
  const { firstName, lastName, phone, tags, officeId } = req.body;
  const birthDate = new Date(req.body.birthDate);
  pool.query(queries.setNextVal, (error) => {
    if (error) res.status(500).send(error.detail);
  });
  pool.query(
    queries.addEmployee,
    [firstName, lastName, birthDate, phone, tags, officeId],
    (error, results) => {
      if (error) res.status(500).send(error.detail);
      res.status(201).json(results.rows[0]);
    }
  );
};

const deleteEmployee = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.deleteEmployee, [id], (error, results) => {
    if (error) res.status(500).send(error.detail);
    const noEmployeeFound = !results.rows.length;
    if (noEmployeeFound) {
      res
        .status(404)
        .send({ message: "Employee does not exist in the database" });
    }
    res.status(200).json(results.rows[0]);
  });
};

const updateEmployee = (req, res) => {
  const id = parseInt(req.params.id);
  const { firstName, lastName, birthDate, phone, tags, officeId } = req.body;

  pool.query(
    queries.updateEmployee,
    [firstName, lastName, birthDate, phone, tags, officeId, id],
    (error, results) => {
      if (error) res.status(500).send(error.detail);
      const noEmployeeFound = !results.rows.length;
      if (noEmployeeFound) {
        res.status(404).send("Employee does not exist in the database");
      }
      res.status(200).send(results.rows[0]);
    }
  );
};

module.exports = {
  getEmployees,
  getEmployeeById,
  addEmployee,
  deleteEmployee,
  updateEmployee,
};
