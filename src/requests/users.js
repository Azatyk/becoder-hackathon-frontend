import request from "./request";

export const getUser = async (email) =>
  await request({
    url: `/users/${email}`,
    method: "GET",
  });
