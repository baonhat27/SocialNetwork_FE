import axios from "axios";
import { wrapResponseHandler } from "../../../shared/service";

const HOST = "http://localhost:8000";
const GET_POST_URL = `${HOST}/v1/posts`;
const GET_USER_PROFILE_URL = `${HOST}/v1/users/`;

export function getPosts() {
  return wrapResponseHandler(() => axios.get(GET_POST_URL));
}

export function getUserProfile(userId) {
  return wrapResponseHandler(() => axios.get(GET_USER_PROFILE_URL + userId));
}
