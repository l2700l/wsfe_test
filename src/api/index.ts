import axios from "axios";
import { imageModel } from "@/types";

axios.defaults.baseURL =
  process.env.REACT_APP_API_URL || "https://picsum.photos/";

export const getImages = async (page = 1, limit = 10) => {
  try {
    const list = await axios.get<imageModel[]>("v2/list", {
      params: {
        page,
        limit,
      },
    });
    if (!list?.data) {
      throw new Error("Failed to get data");
    }
    return await list.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
