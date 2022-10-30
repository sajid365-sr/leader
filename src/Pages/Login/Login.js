
import { Image } from "react-bootstrap";
import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { ToggleThemeContext } from '../../Contexts/ThemeContext/ThemeContext';
import facebook from "../../Assets/Icons/facebook.png";
import google from "../../Assets/Icons/google.png";
import github from "../../Assets/Icons/github.png";
import { AuthContext } from "../../Contexts/UserContext/UserContext";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const {theme} = useContext(ToggleThemeContext);
    const {providerLogin} = useContext(AuthContext);
    
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleSubmit = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    }

    // google sign in
    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(e => console.error(e));
    }

    //   facebook sign in
  const handleFacebookSignIn = () =>{
    providerLogin(facebookProvider)
    .then(result =>{
        const user = result.user;
        console.log(user)
    })
    .catch(e => console.error(e));
  }
    return (
        <div>
            <Form  onSubmit={handleSubmit} style={{width:'50%'}} className={`mx-auto px-5 py-3 rounded rounded-4 ${theme? 'bg-secondary bg-opacity-10':'bg-secondary bg-opacity-50 '}`}>
            <h2 className="text-uppercase text-center mt-3 mb-4">Login</h2>
      

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          className='py-2'
          name="email"
          type="email"
          placeholder='Enter Email (ex: example@gmail.com)'
          required
        />
        <Form.Label>Your Email</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          className='py-2'
          name="password"
          type="password"
          placeholder='Enter Password'
          required
        />
        <Form.Label>Password</Form.Label>
      </Form.Group>


      <Button
        style={{background:'linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))'}}
        className="me-4 fs-5 px-5 w-100 border-0 text-dark py-2 shadow-lg fw-semibold"
        type="submit"
      >
        Login
      </Button>

      <div className="text-center my-4">
          <p className="mb-2 fw-semibold">Or</p>
          <p className="text-secondary ">Login Using</p>
          <span>
            <Image onClick={handleGoogleSignIn} src={google} style={{ width: "30px" }} role="button"></Image>
          </span>
          <span>
            <Image
            onClick={handleFacebookSignIn}
              src={facebook}
              style={{ width: "30px" }}
              className="mx-3"
              role="button"
            ></Image>
          </span>
          <span>
            <Image src={github} style={{ width: "30px" }} role="button"></Image>
          </span>
        </div>

      <>
          <p className='text-center mt-4'>New to here? <Link className={`fw-semibold ${theme ?'text-dark' : 'text-info'}`} to="/register">Register</Link></p>
      </>

      <Form.Text className="text-danger">{}</Form.Text>
    </Form>


        </div>
    );
};

export default Login;