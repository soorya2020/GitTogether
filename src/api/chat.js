// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
import { API } from '../utils/axios'

export const fetchMessage = async () => {
  if (messages.length === 0) {
    try {
      const response = await API.get("/chat/" + toUserId);
      setMessages(response.data.data.messages);
    } catch (error) {
      console.error(error.message);
    }
  }
};
