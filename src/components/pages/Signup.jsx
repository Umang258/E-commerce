import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  background: {
    backgroundImage: `url(${process.env.PUBLIC_URL+"/image/bg.jpg"})`,
    backgroundSize: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, // Ensure the background stays behind the content
    filter: "blur(5px)", // Applied blur effect to the background image
    WebkitBackdropFilter: "blur(5px)", // Required for Safari
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "0 15px",
    position: "relative", // Added relative positioning to contain the absolute background
  },
  formContainer: {
    maxWidth: "500px",
    width: "100%",
    padding: "20px",
    borderRadius: "50px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#333",
  },
  formGroup: {
    marginBottom: "1.5rem",
  },
  formRow: {
    display: "flex",
    marginBottom: "1.5rem",
  },
  formLabel: {
    fontWeight: "bold",
    color: "#555",
    width: "60%",
    marginRight: "10px",
  },
  formControl: {
    flex: 1,
    borderRadius: "4px",
    boxShadow: "none",
    border: "1px solid #ddd",
  },
  checkboxLabel: {
    fontWeight: "normal",
  },
  registerButton: {
    width: "100%",
    marginTop: "1.5rem",
  },
};

function Signup() {
  return (
    <div style={styles.container}>
      <div style={styles.background}></div> {/* Background element */}
      <div style={styles.formContainer}>
        <h2 style={styles.header}>Registration</h2>
        <Form>
          <div style={styles.formRow}>
            <Form.Group style={{ ...styles.formGroup, flex: 1 }} controlId="formFirstName">
              <Form.Label style={styles.formLabel}>First Name</Form.Label>
              <Form.Control
                style={styles.formControl}
                type="text"
                placeholder="Enter first name"
              />
            </Form.Group>

            <Form.Group style={{ ...styles.formGroup, flex: 1, marginLeft: "1rem" }} controlId="formLastName">
              <Form.Label style={styles.formLabel}>Last Name</Form.Label>
              <Form.Control
                style={styles.formControl}
                type="text"
                placeholder="Enter last name"
              />
            </Form.Group>
          </div>

          <Form.Group style={styles.formGroup} controlId="formBasicEmail">
            <Form.Label style={styles.formLabel}>Email address</Form.Label>
            <Form.Control
              style={styles.formControl}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group style={styles.formGroup} controlId="formBasicPassword">
            <Form.Label style={styles.formLabel}>Password</Form.Label>
            <Form.Control
              style={styles.formControl}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group style={styles.formGroup} controlId="formConfirmPassword">
            <Form.Label style={styles.formLabel}>Confirm Password</Form.Label>
            <Form.Control
              style={styles.formControl}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>

          <Form.Group style={styles.formGroup} controlId="formBasicCheckbox">
            <Form.Check
              // style={styles.formControl}
              type="checkbox"
              label="I agree to the terms and conditions"
            />
          </Form.Group>

          <Button style={styles.registerButton} variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
