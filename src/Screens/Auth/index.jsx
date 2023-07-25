import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { dataBase } from "../../Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLogin, loginUser } from "./Slice";



const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [sinUp, setSinUp] = useState(false);

    const history = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        

        if(!email) console.log('error')
        if(!password) console.log('error')

        if(!sinUp){
            signInWithEmailAndPassword(dataBase, email, password)
            .then((data) => {
                dispatch(loginUser(JSON.stringify(data.user)));
                dispatch(setIsLogin(true));
                history("/")
            })
            .catch((err) => {
                alert(err.message)
            });
        }else{
            createUserWithEmailAndPassword(dataBase, email, password)
            .then((data) => {
                dispatch(loginUser(JSON.stringify(data.user)));
                console.log(data.user)
                dispatch(setIsLogin(true));
                history("/")
            })
            .catch((err) => {
                alert(err.message)
            });
        }
    }

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
      };

    return(
        <div
        className="container-fluid pt-3"
        style={{ background: "#566573", height: "100%", width: "100%" }}
        >
            <div className="p-2 m-2 mt-5 d-flex flex-row flex-wrap justify-content-center align-items-center" style={{height: '100vh'}}>
                <Form className="border p-4 rounded" onSubmit={(e) => handleSubmit(e)}>
                    <div className="d-flex justify-content-center align-items-center btn-group mb-3">
                        <button type="button" class={!sinUp ? "btn btn-dark" : "btn btn-secondary"} onClick={() => setSinUp(false)}>Sign In</button>
                        <button type="button" class={sinUp ? "btn btn-dark" : "btn btn-secondary"} onClick={() => setSinUp(true)}>Sign Up</button>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email"  required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={showPassword ? "text" : "password"} name="password" placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" onChange={handleCheckboxChange} label="Show Password" />
                    </Form.Group>
                    <div className="d-flex justify-content-center align-items-center m-3">
                        <Button className="btn btn-success" variant="secondary" type="submit">
                            JOIN
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )

}
export default SignIn;