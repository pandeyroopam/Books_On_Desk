import React from "react";
import "./formSection.css";
const FormSection = () => {
  return (

    <>

<section class="contact">
            <div class="content-left">
                <h2>“Books On Desk – One Platform, Infinite Possibilities”</h2>
                <p className="form-p">
                    Rent. Sell. Connect. A community built around stories. Join the journey.
                </p>
                <div>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                </div>
            </div>
            <div className="contact-form shadow-lg bg-neutral-200">
                <form action="" name="contact-form">
                    <div class="input-grp">
                        <label for="fname">First Name</label>
                        <input type="text" name="fname"/>
                    </div>
                    <div class="input-grp">
                        <label for="lname">Last Name</label>
                        <input type="text" name="lname"/>
                    </div>
                    <div class="input-grp">
                        <label for="email">Email *</label>
                        <input type="email" name="email" id="email" required=""/>
                    </div>
                    <div class="input-grp">
                        <label for="msg">Leave us a message</label>
                        <textarea className="form-text" name="msg"></textarea>
                    </div>
                    <button className="form-submit" form="contact-form">Submit</button>
                </form>
            </div>
        </section>
    
    
    
    </>
  )
}

export default FormSection;
