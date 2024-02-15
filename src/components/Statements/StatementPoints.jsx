import React, {useState, useEffect} from 'react';
import '../Statements/StatementPoints.css'

const StatementPoints = () => {
  const [response,setResponse] =useState([]);
  
  const REST_API_URL= 'http://localhost:9090/purchaseHistory/allCustomer/total';
  
  const fetchAllCustomerTotalPointsApi = async(url)=>{
      try{
          const res= await fetch(url);
          const data= await res.json();
           setResponse(data["data"]);
           console.log("The response is: ",data);
      }catch (e){
          console.error(e);
      }
  }
  useEffect(()=>{
    fetchAllCustomerTotalPointsApi(REST_API_URL);
},[])



return (
  <div className="container">
    <a href='/'>
    <button type="button" class="btn btn-success">Home</button>
    </a>
      <h1>All Customer Points</h1>
      <table className="table table-striped table-primary" id="customerPoints">
          <thead>
              <tr>
              <th scope='col'>CustomerId</th>
              <th scope='col'>Month</th>
              <th scope='col'>Points</th>
              </tr>
          </thead>
          <tbody>
              {
                Object.keys(response).map(customerId => {
                  let isFirstRow = true;
                  return Object.keys(response[customerId]).map(month => (
                    <tr key = {month}>
                      {isFirstRow && (
                        <td rowSpan={Object.keys(response[customerId]).length}>{customerId}</td>
                      )}
                      <td>{month}</td>
                      <td>{response[customerId][month]}</td>
                      {isFirstRow && (isFirstRow = false)}
                    </tr>
                  ))
                })
              }

          </tbody>
      </table>


  </div>

)
}

export default StatementPoints