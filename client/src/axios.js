import Axios from "axios";

// "http://ec2-18-185-92-148.eu-central-1.compute.amazonaws.com/api"  production server
export const axios = Axios.create({
  baseURL: "http://localhost:4000/api/v1",
});
