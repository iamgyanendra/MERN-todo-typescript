import axios from "axios";

export default axios.create({
    baseURL: "https://mern-todoserver.herokuapp.com/api/v1",
  
  });