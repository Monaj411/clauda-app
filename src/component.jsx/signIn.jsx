import React from "react";
const handleSubmit = (e) => {
  e.preventDefault();
  alert("Submit");
};
const Sign = () => {
  return (
    <React.Fragment>
      <div class="container fontBody welcome text-white">
        <header class="header">
          <h1 id="title" className="text-center heading">
            Clauda Sign Up{" "}
          </h1>
          <p id="description" class="description text-center">
            Thank you for giving us the privilege to serve you better
          </p>
          <p className="heading">Getting Started</p>
        </header>
        <div class="form-group">
          <p>Please Select your type of business</p>
          <select id="dropdown" name="role" class="form-control" required>
            <option disabled selected value>
              Your type of business
            </option>
            <option value="student">Individual</option>
            <option value="other">Company</option>
          </select>
        </div>
        <form id="survey-form">
          <div class="form-group">
            <label id="name-label" for="name"></label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
              placeholder="first name"
              required
            />
          </div>
        </form>

        <form id="survey-form">
          <div class="form-group">
            <label id="name-label" for="last-name"></label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              class="form-control"
              placeholder="last name"
              required
            />
          </div>
        </form>

        <form id="survey-form">
          <div class="form-group">
            <label id="name-label" for="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              placeholder=" Email address"
              required
            />
          </div>
        </form>
        <form id="survey-form">
          <div class="form-group">
            <label id="name-label" for="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              placeholder=" Re-enter email address"
              required
            />
          </div>
        </form>

        <form id="survey-form">
          <div class="form-group">
            <label id="name-label" for="date-of-Birth"></label>
            <input
              type="date"
              name="date-of-birth"
              id="date-of-birth"
              class="form-control"
              placeholder=" Date of birth"
              required
            />
          </div>
        </form>
        <button className="btn button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </React.Fragment>
  );
};

export default Sign;
