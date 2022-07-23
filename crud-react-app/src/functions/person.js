import axios from "axios";

const BASE_URL = "http://localhost:4000/api";

export const getPersons = async () => await axios.get(`${BASE_URL}/persons`);

export const getPerson = async (id) =>
  await axios.get(`${BASE_URL}/persons/${id}`);

export const createPerson = async (person) =>
  await axios.post(`${BASE_URL}/persons/add`, person);

export const updatePerson = async (id, person) =>
  await axios.put(`${BASE_URL}/persons/update/${id}`, person);

export const deletePerson = async (id) =>
  await axios.delete(`${BASE_URL}/persons/delete/${id}`);
