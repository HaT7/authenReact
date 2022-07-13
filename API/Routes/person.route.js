const express = require("express");
const personRoutes = express.Router();

// Lay db len
let Person = require("../Models/person.model");

// Define routes
personRoutes.route("/add").post(function (req, res) {
  let person = new Person(req.body);

  person
    .save()
    .then((person) => {
      res.status(200).json({ person: "person is added successfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to add person: " + err.message);
    });
});

personRoutes.route("/").get(function (req, res) {
  Person.find(function (err, persons) {
    if (err) {
      console.log(err);
    } else {
      res.json(persons);
    }
  });
});

personRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;

  Person.findById(id, function (err, person) {
    res.json(person);
  });
});

personRoutes.route("/update/:id").put(function (req, res) {
  Person.findById(req.params.id, function (err, person) {
    if (!person) {
      res.status(404).send("data not found");
    } else {
      person.name = req.body.name;
      person.company = req.body.company;
      person.age = req.body.age;

      person
        .save()
        .then((person) => {
          res.json("Update successfully");
        })
        .catch((err) => {
          res.status(400).send("Unable to update the person");
        });
    }
  });
});

personRoutes.route("/delete/:id").delete(function (req, res) {
  let id = req.params.id;

  Person.findByIdAndRemove(id, function (err, person) {
    if (err) {
      res.json(err);
    } else {
      res.json("Delete successfully");
    }
  });
});

// export routes
module.exports = personRoutes;
