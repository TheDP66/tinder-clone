import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend66.herokuapp.com/",
});

export default instance;
