import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      console.log("Form submitted successfully!");
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  /*
  return (
    <>
      <div className="contact">
        <h1>contact</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-div">
            <label className="form-label">name:</label>
            <input
              className="form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && <span className="error-message">{errors.name}</span>}

          <div className="form-div">
            <label className="form-label">email:</label>
            <input
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}

          <div className="form-div">
            <label className="form-label">message:</label>
            <input
              className="form-input"
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}

          <button className="submit-button" type="submit">
            submit
          </button>
        </form>
      </div>
    </>
  ); */
}
