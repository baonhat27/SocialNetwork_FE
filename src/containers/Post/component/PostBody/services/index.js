import axios from "axios";
import { wrapResponseHandler } from "../../../../../shared/service";

const HOST = "http://localhost:8000";
const GET_IMAGE_URL = "http://localhost:8000/v1/images/";

export const getImage = (image) => {
  return GET_IMAGE_URL + image;
};
