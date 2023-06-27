import axios from "axios";

export const getRoomType = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/roomType`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getRentType = async () => {
  try {
    const rs = await axios.get(`http://localhost:8080/rentType`);
    return rs.data;
  } catch (err) {
    console.log(err);
  }
};
