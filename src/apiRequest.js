import axios from "axios";

export default function apiRequest(link, method, data, headers) {
  return axios({
    url: `https://us-central1-js04-b4877.cloudfunctions.net/tasks${link}`,
    method: method,
    data: data,
    headers: headers
  });
}
