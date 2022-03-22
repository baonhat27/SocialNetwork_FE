import axios from "axios";
import { wrapResponseHandler } from "../utils";
import authHeader from "./authHeader";

const HOST = "http://localhost:8000";

const GET_IMAGE_URL = `${HOST}/v1/images`;
const UPLOAD_IMAGES_URL = GET_IMAGE_URL;
const GET_POST_URL = `${HOST}/v1/posts`;
const CREATE_POST_URL = GET_POST_URL;
const UPDATE_POST_URL = GET_POST_URL;
const DELETE_POST_URL = GET_POST_URL;

const GET_ALL_COMMENT_URL = `${HOST}/v1/comments/all`;
const GET_COMMENT_URL = `${HOST}/v1/comments`;
const DELETE_COMMENT_URL = GET_COMMENT_URL;
const CREATE_COMMENT_URL = GET_COMMENT_URL;
const EDIT_COMMENT_URL = GET_COMMENT_URL;

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

export const getPosts = async (offset, limit, createdBy) => {
  let query = "";
  query += offset ? `offset=${offset}` : "";
  query += limit ? `limit=${limit}` : "";
  query += createdBy ? `createdBy=${createdBy}` : "";

  return await wrapResponseHandler(() =>
    axios.get(`${GET_POST_URL}?${query}`, { headers: authHeader() })
  );
};

export const getPost = async (postId) => {
  return await wrapResponseHandler(() =>
    axios.get(`${GET_POST_URL}/${postId}`, { headers: authHeader() })
  );
};

export const updatePost = async (postId, text, images) => {
  return await wrapResponseHandler(() =>
    axios.put(
      `${UPDATE_POST_URL}/${postId}`,
      {
        content: text,
        images: images,
      },
      { headers: authHeader() }
    )
  );
};
export const deletePost = async (postId) => {
  return await wrapResponseHandler(() =>
    axios.delete(`${DELETE_POST_URL}/${postId}`, { headers: authHeader() })
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

//Comments
export const getComments = async (postId) => {
  return await wrapResponseHandler(() =>
    axios.get(GET_COMMENT_URL + `?postId=${postId}`, { headers: authHeader() })
  );
};
export const getAllComments = async (postId) => {
  return await wrapResponseHandler(() =>
    axios.get(GET_ALL_COMMENT_URL + `?postId=${postId}`, {
      headers: authHeader(),
    })
  );
};
export const createComment = async (text, postId) => {
  return await wrapResponseHandler(() =>
    axios.post(
      CREATE_COMMENT_URL,
      { content: text, postId: postId },
      { headers: authHeader() }
    )
  );
};
export const deleteComment = async (commentId) => {
  return await wrapResponseHandler(() =>
    axios.delete(`${DELETE_COMMENT_URL}/${commentId}`, {
      headers: authHeader(),
    })
  );
};
export const editComment = async (text, commentId) => {
  return await wrapResponseHandler(() =>
    axios.put(
      `${EDIT_COMMENT_URL}/${commentId}`,
      { content: text },
      { headers: authHeader() }
    )
  );
};
