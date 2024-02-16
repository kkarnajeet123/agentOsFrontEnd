import React, { useEffect, useState } from 'react'

function CustomerPoints() {

  const [response, setResponse] = useState([]);

  const [customerId, setCustomerId] = useState('1');

  const [total, setTotal] = useState();

  const [mapdata, setMapData] =useState();

  const BASE_URL = 'http://localhost:9090/purchaseHistory/';

  useEffect(() => {
    fetchEachCustomerPointsApi()
  }, []);

  const fetchEachCustomerPointsApi = async () => {
    try {
      console.log(`${BASE_URL}${customerId}/total`)
      const res = await fetch(`${BASE_URL}${customerId}/total`);
      const data = await res.json();
      console.log(data);
      console.log("the point is: ",data["data"][1]);
      setResponse(data["data"]);
      let calculatedTotal =0;
     
       for(const point in data["data"][customerId]){

           calculatedTotal += data["data"][customerId][month][point];
       }
      console.log("total point is:",calculatedTotal);
      setTotal(calculatedTotal)
    } catch (e) {
      //  console.log(e);
    }
  }

  const handleInputChange = (event) => {
    console.log(event);
    setCustomerId(event.target.value)
  }

  const handleCustomerIdChange = () => {
    fetchEachCustomerPointsApi();
  };

  const refreshCustomerTable = () => {
    setCustomerId('');
    setResponse({});
  }


  return (
    <div>
      <div>
        <a href='/'>
          <button type="button" className="btn btn-primary">Home</button>
        </a>
        <span>{total}</span>
      </div>
      <div>
        <input type="text" placeholder='Enter Customer Id' value={customerId} onChange={(event) => setCustomerId(event.target.value)} />
        <button type="button" className="btn btn-success" onClick={handleCustomerIdChange}>Search</button>
        <button type="button" className='btn btn-warning' onClick={refreshCustomerTable}>Reset</button>
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