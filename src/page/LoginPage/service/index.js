import axios from "axios";
import { SERVER } from "../../../shared/store/env";
async function login(username, password) {
  try{
    const response = await axios.post(SERVER + "v1/auth/login", {
      username: username,
      password: password,
    });
    return response.data;
  }
  catch(error){
    return null;
  }
}
async function signup(username, password) {
  try {
    const response=await axios.post(SERVER + "v1/auth/signup", {
      username: username,
      password: password,
    });
    return response.data;
    alert('hêlo')
  } catch (error) {
    return null;
  }
}
export { login, signup };

