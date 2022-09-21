import axiosClient from "./axiosClient";

const cityApi = {
  getAll() {
    const url = "/students";
    return axiosClient.get(url);
  },
  getStudentById(id) {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },
  addStudent(data) {
    const url = "/students";
    return axiosClient.post(url, data);
  },
  updateStudent(data) {
    const url = "/students";
    return axiosClient.put(url, data);
  },
  removeStudent(id) {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },
};

export default cityApi;
