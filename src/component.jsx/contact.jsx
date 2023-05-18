import React from "react";
const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your message has been submitted");
  };
  return (
    <>
      <div className="contact text-white welcome">
        <h2 className="heading">Contact Us</h2>

        <form action="">
        <div className="form-group">
            <label className="username" htmlFor="username">
              Name
            </label>
            <input id="name" type="text" placeholder="Name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              autoFocus
              id="email"
              type="text"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <label htmlFor="message">Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
        <button onClick={handleSubmit} type="submit" className="btn button">
          Submit
        </button>
        
      </div>
    </>
  );
};

export default Contact;
