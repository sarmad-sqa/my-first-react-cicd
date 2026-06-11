import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Signup Successful!');
  };

  const handleClear = () => {
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // --- STYLING OBJECTS ---
  const styles = {
    formContainer: {
      maxWidth: '400px',
      margin: '50px auto',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      fontFamily: 'Arial, sans-serif'
    },
    heading: {
      textAlign: 'center',
      marginBottom: '25px',
      color: '#333'
    },
    formGroup: {
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      marginBottom: '8px',
      fontWeight: 'bold',
      color: '#555',
      fontSize: '14px'
    },
    input: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box'
    },
    passwordWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },
    passwordInput: {
      padding: '10px',
      paddingRight: '40px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box'
    },
    eyeButton: {
      position: 'absolute',
      right: '12px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '18px',
      padding: '0',
      display: 'flex',
      alignItems: 'center',
      userSelect: 'none'
    },
    buttonGroup: {
      display: 'flex',
      gap: '15px',
      marginTop: '25px'
    },
    submitBtn: {
      flex: 1,
      padding: '12px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    clearBtn: {
      flex: 1,
      padding: '12px',
      backgroundColor: '#5a6268',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <div style={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.passwordInput}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={styles.eyeButton}
            >
              {showPassword ? '👁️‍🗨️' : '👁️'}
            </button>
          </div>
        </div>

        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.submitBtn}>
            Submit
          </button>
          <button type="button" onClick={handleClear} style={styles.clearBtn}>
            Clear Form
          </button>
          <button type="button" style={{ cursor: 'pointer', padding: '10px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}>
            Reset Form
          </button>
          <div style={{ marginTop: '10px' }}>
            <input type="checkbox" id="subscribe" name="subscribe" style={{ marginRight: '5px' }} />
            <label htmlFor="subscribe">Subscribe to our newsletter</label>
          </div>
        </div>

      </form>

      {/* --- DEV2 KA NEW CODE (WARING TEXT) SHURU --- */}
      <p style={{ marginTop: '25px', textAlign: 'center', color: 'red', fontWeight: 'bold', fontSize: '14px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
        Warning: Do not share your OTP with anyone!
      </p>
      {/* --- DEV2 KA NEW CODE KHATAM --- */}

    </div>
  );
}

export default App;