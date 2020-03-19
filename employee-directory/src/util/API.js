import axios from "axios";
const BASEURL = "https://www.https://randomuser.me/api/?results=200&nat=us.com/?t=";


export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
