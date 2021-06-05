import axios from "axios";

const query = "https://randomuser.me/api/?results=5&inc=name,gender,location,dob,registered,email,phone,picture&noinfo&nat=us";

const API = {
    search: function () {
        return axios.get(query);
    }
}

export default API