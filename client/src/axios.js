import Axios from "axios";

// "http://ec2-18-185-75-67.eu-central-1.compute.amazonaws.com/api/v1  production server
export const axios = Axios.create({
  baseURL: "http://localhost4000:/api/v1",
  headers: { authorization: localStorage.getItem("token") },
});
