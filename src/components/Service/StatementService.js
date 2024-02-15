import axios from "axios"

const REST_API_BASE_URL= 'http://localhost:9090/purchaseHistory';

export const listStatement=()=> {
    
    return axios.get(REST_API_BASE_URL+"/allCustomer/total")};