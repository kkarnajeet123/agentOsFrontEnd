import React, { useEffect, useState } from 'react'

const CustomerPoints = () => {

  const [response, setResponse] = useState([]);

  const [customerId, setCustomerId] = useState();

  const BASE_URL = 'http://localhost:9090/purchaseHistory/';

  //const EACH_CUSTOMER_POINTS_API = BASE_URL + '2/total';

  const fetchEachCustomerPointsApi = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setResponse(data["data"]);
        console.log("The response is: ",data["data"]);
    } catch (e) {
    //  console.error(e);
    }
  }
  useEffect(() => {
   
   try{
    if(isNaN(customerId) || customerId=="" || customerId==null){
      var custId="1";
    console.log("Error in customerId");
    }else{
      custId =customerId.toString();
      console.log("the customer id is: "+custId);
    }
  }catch(e){
    console.error(e);
  }
   // var custId="3";
    fetchEachCustomerPointsApi(BASE_URL+custId+'/total');
  }, [])

  const handleCustomerIdChange = (event) => {
    console.log("The even value is: ",event.target.value);
    var eventCustomerId="";
    switch (event.target.value){
  case "0":
    eventCustomerId="0";
  case "1":
    eventCustomerId="1";
  case "2":
    eventCustomerId="2";
  default:
    eventCustomerId="0";
}
    setCustomerId(eventCustomerId);
  };

  const refreshCustomerTable=()=>{
    response.reverse;
  }


  return (
    <div>
      <div>
        <a href='/'>
          <button type="button" className="btn btn-primary">Home</button>
        </a>
      </div>
      <div>
       <input type="text" placeholder='Enter Customer Id' value ={customerId} onSubmit={handleCustomerIdChange}/>
      <button  type="button" className="btn btn-success" 
      onClick={handleCustomerIdChange}>Search</button>
      <button type="button" className='btn btn-warning' onClick={refreshCustomerTable}>Refresh</button>
      </div>

      <div className='container'>
        <table className="table table-striped table-light" id="customerPoints">
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
                  <tr key={month}>
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
    </div >
  )
}

export default CustomerPoints