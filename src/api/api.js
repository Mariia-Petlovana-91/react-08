import axios from "axios";

const authInstance = axios.create({
    baseURL: 'https://connections-api.goit.global/'
});


function setToken(token) {
    return authInstance.defaults.headers.common.Authorization = `Bearer ${token}`
};
function unSetToken() {
    return authInstance.defaults.headers.common.Authorization = ''
};


async function registrationUser(formData) {
      try {
          const {data} = await authInstance.post(`/users/signup`, formData);
          setToken(data.token);
          return data;
          
      } catch (error) {
          throw error;
      }
}

async function logInUser(formData) {
      try {
          const { data } = await authInstance.post(`/users/login`, formData);
           setToken(data.token);
          return data;
          
      } catch (error) {
          throw error;
      }
}

async function logOutUser() {
      try {
          const { data } = await authInstance.post("/users/logout");
          unSetToken();
          return data;
          
      } catch (error) {
          throw error;
      }
}

async function getUser() {
    try {
        const {data} = await authInstance.get("/users/current");
        return data;   
      } catch (error) {
          throw error;
      }
}

export default {
    registrationUser,
    logInUser,
    logOutUser,
    getUser,
    setToken
};