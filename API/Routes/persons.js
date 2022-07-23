const express = require("express");
const personRoutes = express.Router();

// Lay db len
let Person = require("../Models/person.model");

// controllers
const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require("../Controllers/person.controller");

// Define routes
personRoutes.post("/persons/add", create);

personRoutes.get("/persons/", getAll);

personRoutes.get("/persons/:id", getById);

personRoutes.put("/persons/update/:id", update);

personRoutes.delete("/persons/delete/:id", remove);
// export routes
module.exports = personRoutes;
