import axios from "axios";
import { wrapResponseHandler } from "../utils";
import authHeader from "./authHeader";

import { NativeEventSource, EventSourcePolyfill } from "event-source-polyfill";
const EventSource = NativeEventSource || EventSourcePolyfill;
// OR: may also need to set as global property
global.EventSource = NativeEventSource || EventSourcePolyfill;

export const HOST = "http://localhost:8000";

export const GET_IMAGE_URL = `${HOST}/v1/images`;
export const UPLOAD_IMAGES_URL = GET_IMAGE_URL;
export const GET_POST_URL = `${HOST}/v1/posts`;
export const CREATE_POST_URL = GET_POST_URL;
export const UPDATE_POST_URL = GET_POST_URL;
export const DELETE_POST_URL = GET_POST_URL;

export const GET_ALL_COMMENT_URL = `${HOST}/v1/comments/all`;
export const GET_COMMENT_URL = `${HOST}/v1/comments`;
export const DELETE_COMMENT_URL = GET_COMMENT_URL;
export const CREATE_COMMENT_URL = GET_COMMENT_URL;
export const EDIT_COMMENT_URL = GET_COMMENT_URL;

export const GET_USER_PROFILE_URL = `${HOST}/v1/users/`;

const CREATE_REACTION_URL = `${HOST}/v1/reactions`;
const DELETE_REACTION_URL = CREATE_REACTION_URL;
const GET_REACTION_URL = CREATE_REACTION_URL;

export const GET_NOTIFICATION_URL = `${HOST}/v1/notifications`;
export const READ_NOTIFICATION_URL = GET_NOTIFICATION_URL;

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
      { content: text, postId: postId},
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

//Reaction
export const createReaction = async (postId) => {
  return await wrapResponseHandler(() =>
    axios.post(
      CREATE_REACTION_URL,
      { postId: postId },
      { headers: authHeader() }
    )
  );
};
export const deleteReaction = async (postId) => {
  return await wrapResponseHandler(() =>
    axios.request({
      url: DELETE_REACTION_URL,
      method: "delete",
      headers: authHeader(),
      data: {
        postId,
      },
    })
  );
};

export const getReaction = async (postId) => {
  return await wrapResponseHandler(() =>
    axios.request({
      url: GET_REACTION_URL + `?postId=${postId}`,
      method: "get",
      headers: authHeader(),
      data: {
        postId: postId,
      },
    })
  );
};
export const getNotification = async (offset) => {
  let query = "";
  query += offset ? `offset=${offset}` : "";
  return await wrapResponseHandler(() =>
    axios.get(`${GET_NOTIFICATION_URL}?${query}`, {
      headers: authHeader(),
    })
  );
};

const evtSource = new EventSourcePolyfill(`${GET_NOTIFICATION_URL}/listen`, {
  headers: authHeader(),
});

export const listenNotification = (event, callback) => {
  evtSource.addEventListener(event, callback);
};

export const readNotification = async (notificationId) => {
  return await wrapResponseHandler(() =>
    axios.put(
      `${READ_NOTIFICATION_URL}/${notificationId}`,
      {},
      {
        headers: authHeader(),
      }
    )
  );
};
