import React from 'react'
import './Contact.css'


function Contact ()  {
  return (
    <div className='container'>
    <h3 className='text-center text-uppercase pt-4'>CONTACT US</h3>
    <div className='mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2'>
   
   <form>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Full name</label>
      <input type="email" className="form-control" id="name" required/>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" required/>
    </div>
    <div className='mb-3'>
    <label htmlFor="email" className="form-label">Contact no</label>
    <input type="email" className="form-control" id="number" required/>
    </div>
   <div className='mb-3'>
   <label htmlFor="timing" className="form-label">When can we reach you </label>
   <select className="form-select" id="timing">
   <option defaultValue=''>Best time to reach</option>
   <option value="1">Morning</option>
   <option value="2">Afternoon</option>
   <option value="3">Evening</option>
 </select>
   </div>
   <div className='mb-3'>
     <label htmlFor="timing" className="form-label">Enter your quary below?</label>
     <textarea className='form-control' id='quary' required></textarea>
   </div>
   <div className='d-grid'>
   <button type="submit" className="btn btn-primary">Submit</button>
   </div>
  </form>

    </div>  
    </div>
  )
}

export default Contact