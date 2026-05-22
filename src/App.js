import React, { useState } from 'react';

function App() {
  // 1. States setup
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  // 2. Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 3. Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  // --- CLEAR FORM FUNCTION ---
  const handleClear = () => {
    setFormData({ name: '', email: '', password: '' });
  };

  return ( 
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Join Our Community</h2>
      
      {submitted && (
        <div style={{ color: 'green', marginBottom: '10px', fontWeight: 'bold' }}>
          Success! Form submitted successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} required />
        
        {/* Submit Button */}
        <button type="submit" style={{ cursor: 'pointer', padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Submit
        </button>

        {/* --- CLEAR FORM BUTTON --- */}
        <button type="button" onClick={handleClear} style={{ cursor: 'pointer', padding: '10px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '4px' }}>
          Clear Form
        </button>

      </form>
    </div>
  );
}

export default App;