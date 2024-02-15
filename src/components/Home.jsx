import React from 'react'

const Home = () => {
  return (
    <div class="container">
        <h1>Welcome to Customer Points web page..</h1>
        <h3>Please select your options..</h3>
       <a href='/allCustomerPoints'>
       <button type="button" class="btn btn-success">All Customer Points</button>
       </a>
       <a href='/customerPoint'>
       <button type="button" class="btn btn-warning">Customer Point</button>
       </a>
    </div>
  )
}

export default Home