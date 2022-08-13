import React, { Component, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import CreateComponent from "./components/create.component";
import EditComponent from "./components/edit.component";
import IndexComponent from "./components/index.component";
import TestComponent from "./components/test.component";

// context
import {AuthenticationContextprovider} from "./service/authentication/authentication.context";

function App() {

  return (
    <AuthenticationContextprovider>
      <TestComponent/>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand" href="#">
            CRUD app
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/index" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="create" element={<CreateComponent />} />
        <Route path="edit/:id" element={<EditComponent />} />
        <Route path="index" element={<IndexComponent />} />
      </Routes> */}
    </AuthenticationContextprovider>
  );
}

export default App;
