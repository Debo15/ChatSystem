import React, {useContext} from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { auth } from "../firebase"
const AuthContext = React.createContext();

export function useAuth(){
	return useContext(AuthContext);
}

export default function AuthProvider({ children }){
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);
	const value = {
		currentUser,
		signup,
		signin,
		signout,
		updateEmail,
		updatePassword,
	}
	function signup(email, password){
		return auth.createUserWithEmailAndPassword(email, password);
	}
	function updateEmail(email){
		return currentUser.updateEmail(email);
	}
	function updatePassword(password){
		return currentUser.updatePassword(password);
	}
	function signin(email, password){
		return auth.signInWithEmailAndPassword(email, password);
	}
	function signout(){
		return auth.signOut();
	}
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user =>{
			setCurrentUser(user);
			setLoading(false);
		});
	
		return unsubscribe;
	
	}, [])
	return(
		<AuthContext.Provider value = {value}>
			{!loading && children}
		</AuthContext.Provider >
	)
}
