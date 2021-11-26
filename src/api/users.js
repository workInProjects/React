import axios from 'axios';

const getUsers = async () => {
    const params = window.location.search
    let url = `https://randomuser.me/api/${params ? params+'&' : '?'}results=15&inc=gender,name,nat,dob,picture,name,email`; 
    const res = await axios.get(url);
    if (res.data) {
        return res.data.results;
    } else {
        return [];
    }
};
export default getUsers;
