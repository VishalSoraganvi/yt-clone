import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyBUc-dpeGluDou0OX8ylmiISXhR1wCBMNQ",
  },
});

export default request;
