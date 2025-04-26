import React from "react";
import "./formSection.css";
const FormSection = () => {
  return (

    <>

<section className="contact">
            <div className="content-left">
                <h2>“Books On Desk – One Platform, Infinite Possibilities”</h2>
                <p className="formm-p">
                    Rent. Sell. Connect. A community built around stories. Join the journey.
                </p>
                <div>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                </div>
            </div>
            <div className="contact-form shadow-lg bg-neutral-200">
<<<<<<< HEAD
                {/* <form action="" name="contact-form">
=======
                <form className="formm" action="" name="contact-form">
>>>>>>> a312046bdd784c15adb202281e570063cf1dc80f
                    <div className="input-grp">
                        <label for="fname">First Name</label>
                        <input type="text" name="fname"/>
                    </div>
                    <div className="input-grp">
                        <label for="lname">Last Name</label>
                        <input type="text" name="lname"/>
                    </div>
                    <div className="input-grp">
                        <label for="email">Email *</label>
                        <input type="email" name="email" id="email" required=""/>
                    </div>
                    <div className="input-grp">
                        <label for="msg">Leave us a message</label>
                        <textarea className="form-text" name="msg"></textarea>
                    </div>
<<<<<<< HEAD
                    <submit form="contact-form" className="form-submit" >Submit</submit>
                </form> */}
=======
                    <submit form="contact-form" className="formm-submit" >Submit</submit>
                </form>
>>>>>>> a312046bdd784c15adb202281e570063cf1dc80f
            </div>
        </section>
    
    
    
    </>
  )
}

export default FormSection;
