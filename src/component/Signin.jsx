import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Card, Form, Button} from "react-bootstrap"


export default function Signin(){

	const emailRef = useRef();
	const passwordRef = useRef();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	

	return ( 
		<Card className = "w-100" style = {{maxWidth: "400px"}}>
		<Card.Header className = 'd-flex justify-content-center'>
		<h2 >Sign In</h2>
		</Card.Header>
		<Card.Body>
			<Form >
				<Form.Group id="email">
					<Form.Label>Your Email: </Form.Label>
					<Form.Control className = "font-weight-bold" type = 'email' ref = {emailRef} required />
				</Form.Group>
				<Form.Group id = "password">
					<Form.Label>Password: </Form.Label>
					<Form.Control className = "font-weight-bold" type = 'password' ref = {passwordRef} required />
				</Form.Group>
				
				<Button type = "submit" className = "font-weight-bold w-100"> Sign In</Button>
			</Form>
		</Card.Body>
		<Card.Footer className = "d-flex justify-content-end">
			<span className = 'text-primary font-weight-bold ' >forgot your password?</span>
		</Card.Footer>
	</Card>
	);
}
 
