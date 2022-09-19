/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-named-as-default */
/* eslint-disable quotes */
/* eslint-disable no-return-await */
import axios from "axios";
import { API } from "../utils";
// import authHeader from "./auth.header";

// const options = {
//   //   headers: authHeader(),
// };

export const collection = async (url) => await axios.get(`${API.front + url}`);

export const fetch = async (url, id) =>
  await axios.get(`${API.front + url}/${id}`);

export const store = async (url, data) =>
  await axios.post(`${API.front + url}`, data);

export const alter = async (url, id, data) =>
  await axios.patch(`${API.front + url}/${id}`, data);

export const destroy = async (url, id) =>
  await axios.delete(`${API.front + url}/${id}`);

export const batch = async (...requests) => {
  const result = await axios.all(...requests);
  return Promise.resolve(result);
};
