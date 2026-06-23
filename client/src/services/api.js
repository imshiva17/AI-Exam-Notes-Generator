import axios from "axios";
import { ServerUrl } from "../App";
import { setUserData } from "../redux/userSlice";

export const getCurrentUser = async (dispatch) => {
  try {
    const result = await axios.get(ServerUrl + "/api/user/currentuser", {
      withCredentials: true,
    });

    dispatch(setUserData(result.data));
  } catch (error) {
    console.log(error);
  }
};
