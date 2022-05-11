const getOffices = `SELECT id, street, street_number as "streetNumber", postcode, city, country FROM office`;
const getOfficeById = `SELECT id, street, street_number as "streetNumber", postcode, city, country FROM office WHERE id = $1`;
const addOffice =
  "INSERT INTO office (street, street_number, postcode, city, country) VALUES ($1, $2, $3, $4, $5) RETURNING *";
const deleteOffice = "DELETE FROM office WHERE id = $1 RETURNING *";
const updateOffice =
  "UPDATE office SET first_name = $1, last_name = $2, birth_date = $3, phone = $4, tags = $5, office_id = $6 WHERE id = $7 RETURNING *";
const setNextVal =
  "SELECT setval('office_id_seq', (SELECT max(id) FROM office))";

module.exports = {
  getOffices,
  getOfficeById,
  addOffice,
  deleteOffice,
  updateOffice,
  setNextVal,
};
