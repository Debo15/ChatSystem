import React, { useRef, useState } from 'react';
import {Card, Form, Button, Alert} from "react-bootstrap"
import { Link } from 'react-router-dom';
import {useAuth} from "../context/AuthContext"


export default function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const { /*currentUser, */ signup } = useAuth();
	

	async function handleSubmit(e){
		e.preventDefault();
		const [password, passwordConfirm, email] = 
		[passwordRef.current.value,
			passwordConfirmRef.current.value,
			emailRef.current.value]
			
		if (password !== passwordConfirm)
			return setError("Passwords don't match !!");
		setLoading(true);
		
		try{
			setError('')
			await signup(email, password)
		}catch{
			setError("Failed to create an account")
		}
		setLoading(false);
	}

	return ( 
	<Card className = "w-100" style = {{maxWidth: "400px"}}>
		<Card.Header className = 'd-flex flex-column '>
		<h2 className = "text-center pb-2" >Sign Up</h2>
		{/* {currentUser.email} */}
		{error && <Alert variant = "danger">{error}</Alert>}
		</Card.Header>
		
		<Card.Body>
			<Form onSubmit = {handleSubmit}>
				<Form.Group id="email">
					<Form.Label>Your Email: </Form.Label>
					<Form.Control className = "font-weight-bold" type = 'email' ref = {emailRef} required />
				</Form.Group>
				<Form.Group id = "password">
					<Form.Label>Password: </Form.Label>
					<Form.Control className = "font-weight-bold" type = 'password' ref = {passwordRef} required />
				</Form.Group>
				<Form.Group id = "password-confirm">
					<Form.Label>Password Confirm: </Form.Label>
					<Form.Control className = "font-weight-bold" type = 'password' ref = {passwordConfirmRef} required />
				</Form.Group>
				<Button disabled = {loading} type = "submit" className = "font-weight-bold w-100"> Sign Up !!</Button>
			</Form>
		</Card.Body>
		<Card.Footer className = "d-flex flex-column justify-content-between">
			<span className = "text-secondary">do you have an account Already? <Link to = "/signin" >Sign In Now !!</Link></span>
			
			{/* <span className = 'text-primary font-weight-bold m-2' >forgot your password?</span> */}
		</Card.Footer>
	</Card>
	);
}
 
