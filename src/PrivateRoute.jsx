import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function PrivateRoute({component: Component, ...res}){
	const {currentUser} = useAuth();
	return (
		<Route {...res} 
		render = { props =>{
			return currentUser ? 
				<Component {...props} /> 
			:
				<Redirect to = '/signin' />
			}
		}
		></Route>
	)
}

export default PrivateRoute;