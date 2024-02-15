 import axios from "axios"

 const REST_API_BASE_URL= 'http://localhost:9090/purchaseHistory';

 export const listStatementForEachCustomer=()=> {
    
     return axios.get(REST_API_BASE_URL+"/purchaseHistory/1/total")};