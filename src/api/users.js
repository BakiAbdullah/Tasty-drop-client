import axios from "axios";

const getAllCustomers = () => {
  fetch("http://localhost:8080/api/customers")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
export default getAllCustomers;
