import axios from "axios";
import SITE_CONFIG from "../Controller/SiteController";

export const fetchBlogPostById = async (id) => {
  const response = await axios.post(
    `${SITE_CONFIG.apiIPMongo}/api/blogpost/getBlogPostById`,
    {
      _id: id,
    },
    {
      headers: {
        Authorization: `Bearer ${SITE_CONFIG.apiToken}`,
      },
    }
  );

  return response.data;
};
