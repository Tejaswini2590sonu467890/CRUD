import axios from "axios";

const API_URL = "http://localhost:5000"; // Backend URL

export const getUsers = async () => axios.get(`${API_URL}/emp`); 
export const addUser = async (user) => axios.post(`${API_URL}/emp`, user);
export const updateUser = async (id, user) => axios.put(`${API_URL}/emp/${id}`, user);
export const deleteUser = async (id) => axios.delete(`${API_URL}/emp/${id}`);





// import axios from "axios";

// const API_URL = "http://localhost:5000"; // Backend URL

// export const getUsers = async () => axios.get(`${API_URL}/emp`);
// export const addUser = async (user) => axios.post(`${API_URL}/emp`, user);
// export const updateUser = async (id, user) => axios.put(`${API_URL}/emp/${id}`, user);
// export const deleteUser = async (id) => axios.delete(`${API_URL}/emp/${id}`);




// import axios from "axios";

// const API_URL = "http://localhost:5000"; // Backend URL

// export const getUsers = async () => axios.get(`${API_URL}/emp`); // ✅ Change `/users` → `/emp`
// export const addUser = async (user) => axios.post(`${API_URL}/emp`, user); // ✅ Change `/users` → `/emp`
// export const updateUser = async (id, user) => axios.put(`${API_URL}/emp/${id}`, user); // ✅ Change `/users/:id` → `/emp/:id`
// export const deleteUser = async (id) => axios.delete(`${API_URL}/emp/${id}`); // ✅ Change `/users/:id` → `/emp/:id`






// import axios from "axios";

// const API_URL = "http://localhost/phpmyadmin/index.php?route=/database/operations&db=op";

// export const getUsers = async () => axios.get(`${API_URL}/emp`);
// export const addUser = async (user) => axios.post(`${API_URL}/users`, user);
// export const updateUser = async (id, user) => axios.put(`${API_URL}/users/${id}`, user);
// export const deleteUser = async (id) => axios.delete(`${API_URL}/users/${id}`);
