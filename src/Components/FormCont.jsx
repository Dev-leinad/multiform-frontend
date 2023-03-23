import React from 'react'

const FormCont = () => {
  return (
    <>
       <div className="col">
        <div className="form-cont">

          <h2>Personal info</h2>
          <p>please provide your name, email address, and phone number </p>
           <form action="">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name"  />
            </div>
            <div className="form-group">
              <label htmlFor="email_address">Email Address:</label>
              <input type="email" name="email" id="email"  />
            </div>
            <div className="form-group">
              <label htmlFor="number">Phone Number:</label>
              <input type="tel" name="phone" id="name"  />
            </div>

        </form>
        <div className="form-btn">
          <button>
          Prev
        </button>
          <button>
          Next
        </button>
        </div>

        
        </div>

       
       
       </div>
    </>
  )
}

export default FormCont