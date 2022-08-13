import axios from "axios";
import { BASE_URL } from "../APIUrl";

export const createOrUpdateUser = async (authtoken) => {
    return await axios.post(
      `${BASE_URL}/create-or-update-user`,
      {},
      {
        headers: {
          authtoken,
        },
      }
    );
  };
  
  export const currentUser = async (authtoken) => {
    return await axios.post(
      `${BASE_URL}/current-user`,
      {},
      {
        headers: {
          authtoken,
        },
      }
    );
  };
  
  export const currentAdmin = async (authtoken) => {
    return await axios.post(
      `${BASE_URL}/current-admin`,
      {},
      {
        headers: {
          authtoken,
        },
      }
    );
  };