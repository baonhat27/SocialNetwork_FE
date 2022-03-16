import axios from "axios";
import { wrapResponseHandler } from "../utils";
import authHeader from "./authHeader";

const HOST = "http://localhost:8000";
export const UPLOAD_IMAGES_URL = `${HOST}/v1/images`;
export const CREATE_POST_URL = `${HOST}/v1/posts`;

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
