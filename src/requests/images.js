import request from "./request";

export const getImages = async (userId) =>
  await request({
    url: `/images?userId=${userId}`,
    method: "GET",
  });
