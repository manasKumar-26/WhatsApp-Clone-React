import axios from "axios";
const instance = axios.create({
  baseURL: "https://whatsapp-manas-clone.herokuapp.com/api",
});
export default instance;
