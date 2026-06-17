import React, { useState } from 'react'

const App = () => {
  const [data, setFormData] = useState({ username: "", email: "", password: "" });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!data.username)
      formErrors.username = "Username is required";
    if (!data.email.includes("@"))
      formErrors.email = "Email is not valid";
    if (data.password.length < 6)
      formErrors.password = "Password must be at least 6 characters long";
    setError(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setUsers([...users, data]);
      setFormData({ username: "", email: "", password: "" });
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...data, [name]: value });
  }

  const errorStyle = { color: "red", fontSize: "13px", margin: "2px 0" };
  const inputStyle = { padding: "8px", width: "100%", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" };

  return (
    <div style={{ textAlign: "center", marginTop: "60px", fontFamily: "Arial" }}>
      <div style={{ display: "inline-block", textAlign: "left", border: "2px solid #4a00e0", borderRadius: "10px", padding: "30px 40px", backgroundColor: "white" }}>

        <h2 style={{ color: "#4a00e0", textAlign: "center" }}>Registration Form</h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p style={errorStyle}>{error.username}</p>
          <input type="text"     name="username" id="username" placeholder="Enter your username" value={data.username} onChange={handleChange} style={inputStyle} />

          <p style={errorStyle}>{error.email}</p>
          <input type="email"    name="email"    id="email"    placeholder="Enter your Email"    value={data.email}    onChange={handleChange} style={inputStyle} />

          <p style={errorStyle}>{error.password}</p>
          <input type="password" name="password" id="password" placeholder="Enter your password" value={data.password} onChange={handleChange} style={inputStyle} />

          <button type="submit" style={{ marginTop: "6px", padding: "9px", backgroundColor: "#4a00e0", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
            Register
          </button>
        </form>

        <div style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#4a00e0", fontSize: "16px" }}>Registered Users</h2>
          {users.map((user, index) => (
            <div key={index} style={{ fontSize: "14px", color: "#333", marginBottom: "4px" }}>
              {user.username} : {user.email}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default App