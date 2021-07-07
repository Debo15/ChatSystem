import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Card, Form, Button, Alert} from "react-bootstrap"
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

export default function Signin(){

	const emailRef = useRef();
	const passwordRef = useRef();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const { signin } = useAuth();
	const history = useHistory();
	
	async function handleSubmit(e){
		e.preventDefault();
		
		const [email, password] = [emailRef.current.value, passwordRef.current.value];
		setError('')
		setLoading(true);
		try{
			await signin(email, password)
			history.push('/');
		}catch(err){
			if (err.code === 'auth/wrong-password')
				setError('Wrong password');
			else
				setError("email and password ain't match !")
		}
		setLoading(false);

	}

	return ( 
		<Card className = "w-100" style = {{maxWidth: "400px"}}>
		<Card.Header className = 'd-flex flex-column'>
		<h2 className = "text-center mb-3">Sign In</h2>
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
				
				<Button disabled = {loading} type = "submit" className = "font-weight-bold w-100"> Sign In</Button>
			</Form>
		</Card.Body>
		<Card.Footer className = "d-flex justify-content-end">
			<span className = 'text-primary font-weight-bold ' >forgot your password?</span>
		</Card.Footer>
	</Card>
	);
}
 
