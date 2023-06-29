import axios from "axios";

export const findAllContract = async () => {
  try {
    const result = await axios.get(`http://localhost:8080/contract`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const saveContract = async (values) => {
  try {
    await axios.post(`http://localhost:8080/contract`, { ...values });
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/contract/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const findById = async (id) => {
  try {
    let rs = await axios.get(`http://localhost:8080/contract/${id}`);
    return rs.data;
  } catch (error) {
    console.log(error);
  }
};
