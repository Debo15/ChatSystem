import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function PublicRoute({component: Component, ...res}){
	const {currentUser} = useAuth();
	return (
		<Route {...res} 
		render = { props =>{
			return currentUser?
			<Redirect to = '/' />
			:
			 <Component {...props} /> 
			}
		}
		></Route>
	)
}

export default PublicRoute;