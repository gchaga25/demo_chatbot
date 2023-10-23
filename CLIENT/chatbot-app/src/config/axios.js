import axios from "axios";

const baseURL = "http://localhost:3001/api";
const clienteAxios = axios.create({ baseURL });

export default clienteAxios;
