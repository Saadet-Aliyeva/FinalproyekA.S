import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import {BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
const Contact = () => {
    return(
      <div className="cc">
      <section className="contact">
  <div className="content">
   <h2>Contact Us</h2>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, rem architecto consequatur, eos porro, veritatis quaerat amet eius quia debitis repudiandae quasi deserunt illum minima asperiores nam facere aperiam vel.</p>
   </div>
  <div className="container">
   <div className="contactINfo">
   <div className="box">
   <div className="icon"><MdLocationOn /></div>
     <div className="text">
     <h3>Address</h3>
    <p>Ziya Bünyadov prospekti.73</p>
     </div>
    </div>
     <div className="box">
       <div className="icon"><BsTelephoneFill /></div>
      <div className="text">
     <h3>Phone</h3>
     <p>+994 055-763-40-53</p>
    </div>
    </div>
     <div className="box">
     <div className="icon"><MdEmail /></div>
     <div className="text">
       <h3>Email</h3>
      <p>architecture@gmail.com</p>
      </div>
  </div>
       </div>

    <div className="contactFrom">
     <form>
      <h2>Send Massage</h2>

     <div className="inputBox">
      <input type="text" name="" required="required"></input>
     <span>Full Name</span>
       </div>

    <div className="inputBox">
       <input type="text" name="" required="required"></input>
       <span>Email</span>
    </div>

    <div className="inputBox">
     <textarea></textarea>
      <span>Type your Message...</span>
      </div>

      <div className="inputBox">
     <input type="submit" name="" value="Send" ></input>
     
      </div>

      </form>
      </div>
    </div>
     </section> 
     </div>

    )
}

export default Contact