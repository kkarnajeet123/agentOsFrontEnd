import React from 'react'
import '../components/Statements/Home.css'

const Home = () => {
  return (
    <div class="container" id="homeScreen">
        <h1>Welcome to Customer Points web page..</h1>
        <h3>Please select your options..</h3>
       <a href='/allCustomerPoints'>
       <button type="button" class="btn btn-success" id="allCustomerPoints">All Customer Points</button>
       </a>
       <a href='/customerPoint'>
       <button type="button" class="btn btn-warning" id="customerPoint">Customer Point</button>
       </a>
    </div>
  )
}

export default Home