import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from './Auth.css'

const Auth = () => {
    const { register, handleSubmit, errors } = useForm();
    const [message, setMessage] = useState();

    const onSubmit = (data, e) => {
        setMessage({
          data: "Registration is in progress...",
          type: "alert-warning",
        });
        fetch('http://localhost:4000/api/users/register', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
          .then((res) => res.json())
          .then((data) => {
            const hasError = "error" in data && data.error != null;
            setMessage({
              data: hasError ? data.error : "Registered successfully",
              type: hasError ? "alert-danger" : "alert-success",
            });
            
        !hasError && e.target.reset();
    });
};
return (
    <div
      className={ `${styles.container} container-fluid d-flex align-items-center justify-content-center`}
    >
      <div className={styles.registrationFormContainer}>
        {message && (
          <div
            className={`alert fade show d-flex ${message.type}`}
            role="alert"
          >
            {message.data}
            <span
              aria-hidden="true"
              className="ml-auto cursor-pointer"
              onClick={() => setMessage(null)}
            >
              &times;
            </span>
          </div>
        )}
        <fieldset className="border p-3 rounded">
          <legend
            className={`${styles.registrationFormLegend} border rounded p-1 text-center`}
          >
            Registration Form
          </legend>
          <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
            <div className="form-group">
              <label htmlFor="inputForEmail">Email address</label>
              <span className="mandatory">*</span>
              <input
                id="inputForEmail"
                name="email"
                type="email"
                className="form-control"
                aria-describedby="Enter email address"
                placeholder="Enter email address"
                ref={register({
                  required: {
                    value: true,
                    message: "Please enter your email address",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Enter a valid email address",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters are allowed",
                  },
                  maxLength: {
                    value: 255,
                    message: "Maximum 255 characters are allowed",
                  },
                })}
              />
              {/**
               * we provide validation configuration for email field above
               * error message are displayed with code below
               */}
              {errors.email && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="inputForPassword">Password</label>
              <span className="mandatory">*</span>
              <input
                type="password"
                name="password"
                className="form-control"
                id="inputForPassword"
                placeholder="Enter password"
                ref={register({
                  required: {
                    value: true,
                    message: "Please enter password",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters are allowed",
                  },
                  maxLength: {
                    value: 255,
                    message: "Maximum 255 characters are allowed",
                  },
                })}
              />
              {errors.password && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="inputForName">Your First Name</label>
              <span className="mandatory">*</span>
              <input
                id="inputForName"
                name="firstName"
                type="text"
                className="form-control"
                aria-describedby="Enter your First Name"
                placeholder="Enter your First Name"
                ref={register({
                  required: {
                    value: true,
                    message: "Please enter your First Name",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters are allowed",
                  },
                  maxLength: {
                    value: 255,
                    message: "Maximum 255 characters are allowed",
                  },
                })}
              />
              {errors.name && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.name.message}
                </span>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="inputForName">Your Last Name</label>
              <span className="mandatory">*</span>
              <input
                id="lastName"
                name="lastname"
                type="text"
                className="form-control"
                aria-describedby="Enter your Last Name"
                placeholder="Enter your Last Name"
                ref={register({
                  required: {
                    value: true,
                    message: "Please enter your Last Name",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters are allowed",
                  },
                  maxLength: {
                    value: 255,
                    message: "Maximum 255 characters are allowed",
                  },
                })}
              />
              {errors.name && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.name.message}
                </span>
              )}
              <div className="form-group">
              <label htmlFor="inputForName">Your Address</label>
              <span className="mandatory">*</span>
              <input
                id="address"
                name="address"
                type="text"
                className="form-control"
                aria-describedby="Enter your Address"
                placeholder="Enter your Address"
                ref={register({
                  required: {
                    value: true,
                    message: "Please enter your Address",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters are allowed",
                  },
                  maxLength: {
                    value: 255,
                    message: "Maximum 255 characters are allowed",
                  },
                })}
              />
              {errors.address && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.address.message}
                </span>
              )}
              <div className="form-group">
              <label htmlFor="inputForName">Your Phone</label>
              <span className="mandatory">*</span>
              <input
                id="phone"
                name="phone"
                type="number"
                className="form-control"
                aria-describedby="Enter your Phone Number"
                placeholder="Enter your Phone Number"
                ref={register({
                  required: {
                    value: true,
                    message: "Please enter your Phone",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters are allowed",
                  },
                  maxLength: {
                    value: 255,
                    message: "Maximum 255 characters are allowed",
                  },
                })}
              />
              {errors.phone && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.phone.message}
                </span>
              )}
            <div className="d-flex align-items-center justify-content-center">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <button className="btn btn-link">
                <Link to="/login">Cancel</Link>
              </button>
            </div>
            </div>
            </div>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Auth;
