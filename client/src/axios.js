import Axios from "axios";
// "http://ec2-18-185-75-67.eu-central-1.compute.amazonaws.com/api/v1"
export const axios = () =>
  Axios.create({
    baseURL: "http://localhost:4000/api/v1",
    headers: { authorization: localStorage.getItem("token") },
  });
