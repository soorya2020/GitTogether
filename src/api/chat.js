import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const fetchMessage = async () => {
  if (messages.length === 0) {
    try {
      const response = await axios.get(
        BASE_URL + "/chat/" + toUserId,

        { withCredentials: true }
      );

      setMessages(response.data.data.messages);
    } catch (error) {
      console.error(error.message);
    }
  }
};
