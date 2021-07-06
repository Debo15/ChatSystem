import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faFileCode, faHandshake} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';


class SideBar extends Component {
	state = {
		sideBarClasses: 0,
		sideBarStatus: false
	}
	showSideBar = () =>{
		this.setState({sideBarStatus: !this.state.sideBarStatus})
	}
	
	render() { 
		return (
			<React.Fragment>
				<Button className = "btn-primary btn-sidebar-state ml-1 mt-1" onClick = {this.showSideBar}>☰</Button>
				{/* <div className = "overlay active"></div> */}
				<nav id="sidebar" className = {` ${this.state.sideBarStatus? 'active': '' }`} >
					<div id="dismiss" onClick = {this.showSideBar}>
						<i className="text-primary">X</i>
					</div>
					<div className="sidebar-header">
						{this.props.Title}
					</div>
					<ul className="components">
						<h3 className = "text-center pr-3 pt-4">Chat System</h3>
						<li className="active mt-5">
							<a href="#" >
							<FontAwesomeIcon icon={faGlobe} /> 
								<span> Home</span>
							</a>
						</li>
						<li>
							<a href="#">
							<FontAwesomeIcon  icon={faHandshake} /> 
							<span> Chats</span>
							</a>
						</li>
						<li>
							<a href="#">
								<FontAwesomeIcon  icon={faFileCode} /> 
								<span> Settings</span>
							</a>
						</li>
						<li className = "mt-3">
							<a href="#">Sign In</a>
						</li>
						<li>
							<a href="#">About Us !!</a>
						</li>
					</ul>
				</nav>
				</React.Fragment>
			)
	}
}
 
export default SideBar;