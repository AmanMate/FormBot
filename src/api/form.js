// import axios from "axios";

// const backendUrl = `http://localhost:4003/api/v1/form`;

// export const createTypebot = async (typebotData) => {
//   try {
//     const token = JSON.parse(localStorage.getItem("token"));
//     axios.defaults.headers.common["Authorization"] = token;
//     await axios.post(`${backendUrl}/createTypebot`, typebotData);
//   } catch (error) {
//     console.error(error);
//     alert("Error in creating typebot");
//   }
// };

// export const updateTypebot = async (typebotId, typebotData) => {
//   try {
//     const token = JSON.parse(localStorage.getItem("token"));
//     axios.defaults.headers.common["Authorization"] = token;
//     await axios.put(`${backendUrl}/updateTypebot/${typebotId}`, typebotData);
//   } catch (error) {
//     console.error(error);
//     alert("Error in updating typebot");
//   }
// };

// export const getTypebots = async () => {
//   try {
//     const token = JSON.parse(localStorage.getItem("token"));
//     axios.defaults.headers.common["Authorization"] = token;
//     const response = await axios.get(`${backendUrl}/getTypebots`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     alert("Error in fetching typebots");
//   }
// };
