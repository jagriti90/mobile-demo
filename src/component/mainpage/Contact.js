import React, { useState } from 'react'
import './Contact.css'
const Contact = () => {
  const formSubmit= (e) =>{
    e.preventDefault();
    alert(`$ {data.fullname}`)
  };
  return (
    <>
      <div className='contact_section'>
        <div className='main_header_section'>
          <p className='main_header_name'>Contact us</p>

          <div className='detail_section'>
            <form onSubmit={formSubmit}>
            <form >
              <label className='name_section'>First name:</label><br />
              <input
                className='number_section'
                value={data.fullname }
                onChange={InputEvent}
                placeholder='Enter your name' /><br /><br />
            </form>
            <form >
              <label className='digit_section'>Mobile Number</label><br />
              <input
                className='number_section'
                value={data.phone }
                onChange={InputEvent}
                placeholder=' Enter your mobile number' /><br /><br />
            </form>
            <form >
              <label className='ea_section'>Email Address</label><br />
              <input className='number_section'
                value={data.email }
                onChange={InputEvent}
                placeholder='name@example.com' /><br /><br />
            </form>
            </form>
          </div>
          
          <div>
            <form>
              <p><label >Messages</label></p>
              <textarea></textarea>

            </form>
            <form>
              <input className='ending_section' type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact