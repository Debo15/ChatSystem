import React, { useRef, useState } from 'react';
import {Card, Form, Button, Alert} from "react-bootstrap"
import { Link } from 'react-router-dom';
import {useAuth} from "../context/AuthContext"


export default function ProfileSettings() {
	
	
	const [loading, setLoading] = useState(false);
	const [emailMessage, setEmailMessage] = useState("");
	const [passwordMessage, setPasswordMessage] = useState("");
	const [error, setError] = useState("");
	const { updateEmail, updatePassword, currentUser } = useAuth();
	const passwordRef = useRef();
	const emailRef = useRef();
	const passwordConfirmRef = useRef();
	

	async function handleEmailUpdate(e){
		e.preventDefault();
		
		const email = emailRef.current.value

		setError('');
		setLoading(true);
		
		if (email !== currentUser.email){
			try{
				await updateEmail(email);
				setEmailMessage("Your Email has been updated successfully.")
			}catch(err){
				setError(err.message);
			}
		}

		setLoading(false);
	}
	async function handlePasswordUpdate(e){
		e.preventDefault();
		const [password, passwordConfirm] = 
		[passwordRef.current.value, passwordConfirmRef.current.value];

		setError('');
		setLoading(true);

		if (password !== passwordConfirm)
			return setError("Passwords don't match !!");
		
		try{
			await updatePassword(password);
			setPasswordMessage("Your password has been updated successfully.")
		}catch(err){
			setError(err.message);
		}
		setLoading(false);
	}

	return ( 
	<Card className = "w-100" style = {{maxWidth: "400px"}}>
		<Card.Header className = 'd-flex flex-column '>
		<h2 className = "text-center pb-2" >Settings</h2>
		{/* {currentUser.email} */}
		{error && <Alert variant = "danger">{error}</Alert>}
		</Card.Header>
		
		<Card.Body>
			<Form onSubmit = {handleEmailUpdate}>
				<p className = "text-center">Change Your Email</p>
				<Form.Group id="email">
					<Form.Label>New Email: </Form.Label>
					<Form.Control className = "font-weight-bold" defaultValue = {currentUser.email} type = 'email' ref = {emailRef} required />
				</Form.Group>
				{emailMessage && <Alert variant = "success">{emailMessage}</Alert>}
				<Button disabled = {loading} type = "submit" className = "font-weight-bold w-100">Update</Button>
				<hr />
				<p className = "text-center">Change Your Password</p>
			</Form>
			<Form onSubmit = {handlePasswordUpdate}>
				<Form.Group id = "password">
					<Form.Label>New Password: </Form.Label>
					<Form.Control className = "font-weight-bold" type = 'password' ref = {passwordRef} required/>
				</Form.Group>
				<Form.Group id = "password-confirm">
					<Form.Label>New Password Confirm: </Form.Label>
					<Form.Control className = "font-weight-bold" type = 'password' ref = {passwordConfirmRef} required/>
				</Form.Group>
				{passwordMessage && <Alert variant = "success">{passwordMessage}</Alert>}
				<Button disabled = {loading} type = "submit" className = "font-weight-bold w-100">Update</Button>
			</Form>
		</Card.Body>
		<Card.Footer className = "d-flex flex-column justify-content-between">
			<Link className = "btn btn-secondary text-center font-weight-bold" to = "/">Cancel</Link>
			{/* <span className = 'text-primary font-weight-bold m-2' >forgot your password?</span> */}
		</Card.Footer>
	</Card>
	);
}
 
