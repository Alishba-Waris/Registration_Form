import { useForm } from 'react-hook-form';
import { useState } from 'react';
import React from 'react';

function Form() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();

  const password = watch("password");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitted(true);
    reset();
  };
  return (
    <>
    {isSubmitted && <p className="success-message">Data Registered Successfully!</p>}
    <form className="form_style" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="heading">Registration Form</h1>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          name="username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 5,
              message: "Username must be at least 5 characters",
            },
          })}
        />

        {errors.username && <p className="error-message">{errors.username.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </>
  );
}

export default Form;
