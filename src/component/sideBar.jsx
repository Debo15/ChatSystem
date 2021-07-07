import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faFileCode, faHandshake} from '@fortawesome/free-solid-svg-icons'
import { Alert, Button } from 'react-bootstrap';
import {Link} from "react-router-dom"
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';


function SideBar () {
	
	const [sideBarStatus, setSideBarStatus] = useState(true);
	const {currentUser, signout} = useAuth();
	const [error, setError] = useState("");

	function showSideBar(){
		setSideBarStatus(!sideBarStatus);
	}
	async function signOut(){
		if (!currentUser){
			setError("you aren't loged in.")
			return;
		}
		setError("");
		try{
			await signout();

		}catch{
			setError("Falied to signout.")
		}
	}

	return (
		<React.Fragment>
			<Button className = "btn-primary btn-sidebar-state ml-1 mt-1" onClick = {showSideBar}>☰</Button>
			
			<nav id="sidebar" className = {` ${sideBarStatus? 'active': '' }`} >
				<div id="dismiss" onClick = {showSideBar}>
					<i className="text-primary">X</i>
				</div>
				<div className = "sidebar-header">

				</div>
				<ul className="components">
					<h3 className = "text-center pr-3 pt-4">Chat System</h3>
					<li className="active mt-5">
						<Link to="/" >
						<FontAwesomeIcon icon = {faGlobe} /> 
							<span> Home</span>
						</Link>
					</li>
					<li>
						<a href="#">
						<FontAwesomeIcon icon = {faHandshake} /> 
						<span> Chats</span>
						</a>
					</li>
					<li>
						<Link to = '/settings'>
							<FontAwesomeIcon  icon = {faFileCode} /> 
							<span> Settings</span>
						</Link>
					</li>
					{error&&<Alert variant = "danger" className = "my-3">{error}</Alert>}
					<li className = "mt-3">
						<Link to = "/signin" >Sign In</Link>
					</li>
					<li>
						<Link to = "/signup">Sign Up</Link>
					</li>
					{currentUser&&<li>
						<a href = "#" onClick = {signOut}>Logout</a>
					</li>}
				</ul>
			</nav>
		</React.Fragment>
	)
}
 
export default SideBar;