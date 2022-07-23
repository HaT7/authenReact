import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPersons, deletePerson } from "../functions/person";

const IndexComponent = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    onInit();
  }, []);

  const onInit = () => {
    getPersons()
      .then((res) => {
        console.log(res);
        setPersons(res.data);
        console.log("data in state");
        console.log(persons);
      })
      .catch((err) => console.log(err));
  };

  const onDelete = (id) => {
    deletePerson(id)
      .then((res) => {
        console.log(res);
        onInit();
      })
      .catch((err) => console.log(err));
  };

  const RowTable = () => {
    return persons.map((p, i) => (
      <tr key={i}>
        <th>{p.name}</th>
        <td>{p.age}</td>
        <td>{p.company}</td>
        <td>
          <div className="d-flex justify-content-around">
            <Link to={"/edit/" + p._id} className="btn btn-warning">
              Edit
            </Link>
            <button onClick={() => onDelete(p._id)} className="btn btn-danger">
              Delete
            </button>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container">
      <h1 align="center">Persons List</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Company</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <RowTable />
        </tbody>
      </table>
    </div>
  );
};

export default IndexComponent;
