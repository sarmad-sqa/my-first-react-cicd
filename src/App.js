import React, { useState } from 'react';

function App() {
  // States for form fields and success message
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
    
    // 3 seconds baad msg hide karne ke liye
    setTimeout(() => setSubmitted(false), 3000);
  };

  return ( 
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Sign Up Form</h2>
      
      {submitted && (
        <div style={{ color: 'green', marginBottom: '10px', fontWeight: 'bold' }}>
          Success! Form submitted successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ cursor: 'pointer', padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;