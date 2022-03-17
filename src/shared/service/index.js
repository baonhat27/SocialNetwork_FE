import axios from "axios";
import { wrapResponseHandler } from "../utils";
import authHeader from "./authHeader";

const HOST = "http://localhost:8000";
const GET_IMAGE_URL = `${HOST}/v1/images`;
const UPLOAD_IMAGES_URL = GET_IMAGE_URL;
const CREATE_POST_URL = `${HOST}/v1/posts`;
const GET_POST_URL = `${HOST}/v1/posts`;
const GET_USER_PROFILE_URL = `${HOST}/v1/users/`;

export const uploadImages = async (files) => {
  const formData = new FormData();

  files.forEach((file) => formData.append("images", file));
  return await wrapResponseHandler(() =>
    axios.post(UPLOAD_IMAGES_URL, formData, { headers: authHeader() })
  );
};

export const createPost = async (text, images) => {
  return await wrapResponseHandler(() =>
    axios.post(
      CREATE_POST_URL,
      { content: text, images: images },
      { headers: authHeader() }
    )
  );
};

export const getPosts = async (query) => {
  return await wrapResponseHandler(() =>
    axios.get(GET_POST_URL, { headers: authHeader() })
  );
};

export const getUserProfile = async (userId) => {
  return await wrapResponseHandler(() =>
    axios.get(GET_USER_PROFILE_URL + userId, { headers: authHeader() })
  );
};

export const getImage = (image) => {
  return `${GET_IMAGE_URL}/${image}`;
};
