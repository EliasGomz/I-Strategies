import { instance } from "./";

export const Get = async ({ path }) => {
  try {
    const response = await instance.get(`${path}`);
    return { success: true, data: response.data };
  } catch (error) {
    return console.log(error);
  }
};

export const Post = async ({ path, data }) => {
  try {
    await instance.post(`${path}`, data);
    return { success: true };
  } catch (error) {
    return { success: true, error: error };
  }
};

export const Update = () => {};

export const Delete = () => {};
