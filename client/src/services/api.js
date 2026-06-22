import axios from "axios";
import { ServerUrl } from "../App";

export const getCurrentUser = async () => {
  try {
    const result = await axios.get(ServerUrl + "/api/user/currentuser", {
      withCredentials: true,
    });
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
};
