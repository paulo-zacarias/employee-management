const pool = require("../../db");
const queries = require("./queries");

const getOffices = (req, res) => {
  pool.query(queries.getOffices, (error, results) => {
    if (error) res.status(500).send(error.detail);
    res.status(200).json(results.rows);
  });
};

const getOfficeById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getOfficeById, [id], (error, results) => {
    if (error) res.status(500).send(error.detail);
    res.status(200).json(results.rows[0]);
  });
};

const deleteOffice = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.deleteOffice, [id], (error, results) => {
    if (error) res.status(500).send(error.detail);
    const noOfficeFound = !results.rows.length;
    if (noOfficeFound) {
      res
        .status(404)
        .send({ message: "Office does not exist in the database" });
    }
    res.status(200).json(results.rows[0]);
  });
};

const addOffice = (req, res) => {
  const { street, streetNumber, postcode, city, country } = req.body;
  pool.query(queries.setNextVal, (error) => {
    if (error) res.status(500).send(error.detail);

    pool.query(
      queries.addOffice,
      [street, streetNumber, postcode, city, country],
      (error, results) => {
        if (error) res.status(500).send(error.detail);
        res.status(201).json(results.rows[0]);
      }
    );
  });
};

const updateOffice = (req, res) => {
  const id = parseInt(req.params.id);
  const { street, streetNumber, postcode, city, country } = req.body;

  pool.query(queries.getOfficeById, [id], (error, results) => {
    const noOfficeFound = !results.rows.length;
    if (noOfficeFound) {
      res
        .status(404)
        .send({ message: "Office does not exist in the database" });
    }
    pool.query(
      queries.updateOffice,
      [street, streetNumber, birth_date, postcode, city, country, id],
      (error, results) => {
        if (error) res.status(500).send(error.detail);
        res.status(200).json(results.rows[0]);
      }
    );
  });
};

module.exports = {
  getOffices,
  getOfficeById,
  addOffice,
  deleteOffice,
  updateOffice,
};
