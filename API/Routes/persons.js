const express = require("express");
const personRoutes = express.Router();

// Lay db len
let Person = require("../Models/person.model");

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controllers
const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require("../Controllers/person.controller");

// Define routes
personRoutes.post("/persons/add",authCheck, adminCheck, create);

personRoutes.get("/persons/", getAll);

personRoutes.get("/persons/:id",authCheck, adminCheck, getById);

personRoutes.put("/persons/update/:id",authCheck, adminCheck, update);

personRoutes.delete("/persons/delete/:id",authCheck, adminCheck, remove);
// export routes
module.exports = personRoutes;
