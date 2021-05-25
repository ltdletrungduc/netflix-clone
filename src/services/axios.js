import axios from "axios";
import { API_base_url } from "./service-variable";

// BASE URL
const instance = axios.create({
	baseURL: API_base_url,
});

export default instance;
