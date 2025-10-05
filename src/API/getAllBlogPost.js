import axios from "axios";
import SITE_CONFIG from "../Controller/SiteController";

export const getAllBlogPost = async () => {
  const response = await axios.get(`${SITE_CONFIG.apiIPMongo}/api/blogpost/getAllBlogPosts`, {
    headers: {
      Authorization: `Bearer ${SITE_CONFIG.apiToken}`,
    },
  });
  return response.data;
};
