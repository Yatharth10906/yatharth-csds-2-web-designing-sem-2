// App.jsx - Combined Component (Student + App)

// --- Student Component ---
function Student(props) {
  const status = props.marks >= 50 ? "Pass" : "Fail";

  const cardStyle = {
    backgroundColor: "white",
    border: "2px solid #4a00e0",
    borderRadius: "10px",
    padding: "20px",
    margin: "15px auto",
    width: "350px",
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    color: "#4a00e0",
    marginBottom: "8px",
  };

  const paraStyle = {
    fontSize: "16px",
    margin: "5px 0",
    color: "#333",
  };

  const statusStyle = {
    fontSize: "16px",
    margin: "5px 0",
    color: props.marks >= 50 ? "green" : "red",
    fontWeight: "bold",
  };

  return (
    <div style={cardStyle}>
      <h2 style={headingStyle}>{props.name}</h2>
      <p style={paraStyle}><strong>Course:</strong> {props.course}</p>
      <p style={paraStyle}><strong>Marks:</strong> {props.marks} / 100</p>
      <p style={statusStyle}>Status: {status}</p>
    </div>
  );
}


function App() {
  return (
    <div>
      <h1>Student Report Card</h1>

      <Student name="Ananya Sharma" course="B.Tech Computer Science" marks={92} />
      <Student name="Rohan Mehta" course="B.Tech Data Science" marks={78} />
      <Student name="Priya Patel" course="B.Tech IT" marks={85} />
      <Student name="Arjun Singh" course="B.Tech Electronics" marks={45} />
      <Student name="Sneha Gupta" course="B.Tech Computer Science" marks={67} />
    </div>
  );
}

export default App;
