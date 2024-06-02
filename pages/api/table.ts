import axios from "axios";

const BASE_URL = "https://recruitment-api.vercel.app";

export const getTable = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not found in localStorage");
      throw new Error("Token not found in localStorage");
    }

    console.log("token", token);

    const tableResponse = await axios.get(`${BASE_URL}/get-table`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    return tableResponse.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching table data:", error.message);
    } else {
      console.error("Error fetching table data:", error);
    }
  }
};
