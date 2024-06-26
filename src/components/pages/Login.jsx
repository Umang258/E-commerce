import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookAuth from 'react-facebook-auth';

const styles = {
  body: {
    backgroundColor: 'white', 
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    
  },
  loginForm: {
    width: '80%', // Adjusted width
    maxWidth: '400px',
    margin: '0 auto', // Centering the form horizontally
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
    backgroundColor: '#000', // Black background
    color: '#fff', // White text color
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  formLabel: {
    fontWeight: '500',
  },
  formControl: {
    borderRadius: '0.25rem',
    color: '#000', // Black text color for form input
  },
  primaryButton: {
    backgroundColor: '#007bff',
    border: 'none',
    width: '100%',
  },
  primaryButtonHover: {
    backgroundColor: '#0056b3',
  },
};
const authenticate = (response) => {
  console.log(response);
}

const MyFacebookButton = ({ onClick }) => {
    return ( 
      <button onClick={onClick}>Facebook login</button>)
}
function Login() {
  return (
    <div style={styles.body}>
      <Container>
        <div style={styles.loginForm}>
          <h2 style={styles.header}>Login</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={styles.formLabel}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" style={styles.formControl} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={styles.formLabel}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" style={styles.formControl} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={styles.primaryButton}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.primaryButtonHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = styles.primaryButton.backgroundColor)}
            >
              Login
            </Button>
            
            <FacebookAuth
      appId="823563109737529"
      callback={authenticate}
      component={MyFacebookButton}
    />
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
