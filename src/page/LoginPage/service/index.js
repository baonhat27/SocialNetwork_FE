import axios from "axios";
import { SERVER } from "../../../shared/store/env";
async function login(username, password) {
  const respone = await axios.post(SERVER + "v1/auth/login", {
    username: username,
    password: password,
  });
  return respone.data;
}
async function signup(username, password) {
  try {
    await axios.post(SERVER + "v1/signup", {
      username: username,
      password: password,
    });
    return true;
  } catch (error) {
    return error;
  }
}
export { login, signup };

