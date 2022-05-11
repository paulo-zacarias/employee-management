// require("dotenv").config();
const express = require("express");
const employeeRoutes = require("./src/employee/routes");
const officeRoutes = require("./src/office/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Wello World!");
});

app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/offices", officeRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
