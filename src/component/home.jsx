import React from 'react';
import { useAuth } from '../context/AuthContext';
import Signup from './Signup';

export default function Home(){
	const {currentUser} = useAuth();
	return (
	<h1>this is the home page mr {currentUser}</h1>
	)
}