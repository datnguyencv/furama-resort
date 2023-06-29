import axios from "axios";

export const findAll = async () => {
  try {
    let rs = await axios.get(`http://localhost:8080/room`);
    return rs.data;
  } catch (err) {}
};

export const findById = async (id) => {
  try {
    let rs = await axios.get(`http://localhost:8080/room/${id}`);
    return rs.data;
  } catch (err) {}
};

export const findId = async (id) => {
  try {
    const result = await axios.get(`http://localhost:8080/room/${id}`);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const findName = async (name) => {
  try {
    return await axios.get(`http://localhost:8080/room?name_like${name}`);
  } catch (err) {
    console.log(err);
  }
};

export const create = async (product) => {
  try {
    await axios.post(`http://localhost:8080/room`, { ...product });
  } catch (err) {
    console.log(err);
  }
};

export const update = async (product) => {
  try {
    await axios.put(`http://localhost:8080/room/${product.id}`, { ...product });
  } catch (err) {
    console.log(err);
  }
};

export const remove = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/room/${id}`);
  } catch (err) {
    console.log(err);
  }
};
