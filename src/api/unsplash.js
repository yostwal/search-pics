import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID msB49ofT_VYTId-SlNpryMkmUA2R__heQiybvzVTzPE",
  },
});
