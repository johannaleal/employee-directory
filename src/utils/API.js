import axios from "axios";
const URL = "https://randomuser.me/api/?nat=us&inc=nat,login,picture,name,location,email,phone&results=50";

export default {
  getData: function() {
    return axios.get(URL);
  }
};
