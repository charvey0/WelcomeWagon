import axios from "axios";

const query = "https://randomuser.me/api/?seed=asdf&results=200&inc=name,location,dob,email,phone,picture&noinfo&nat=us";

const API = {
    search: function () {
        return axios.get(query);
    }
}

export default API