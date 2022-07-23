// Lay db len
let Person = require("../Models/person.model");

exports.create = async (req, res) => {
  let person = new Person(req.body);

  person
    .save()
    .then((person) => {
      res.status(200).json({ person: "person is added successfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to add person: " + err.message);
    });
};

exports.getAll = async (req, res) => {
  Person.find(function (err, persons) {
    if (err) {
      console.log(err);
    } else {
      console.log(persons);
      res.json(persons);
    }
  });
};

exports.getById = async (req, res) => {
  let id = req.params.id;

  Person.findById(id, function (err, person) {
    res.json(person);
  });
};

exports.update = async (req, res) => {
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
};

exports.remove = async (req, res) => {
  let id = req.params.id;

  Person.findByIdAndRemove(id, function (err, person) {
    if (err) {
      res.json(err);
    } else {
      res.json("Delete successfully");
    }
  });
};
