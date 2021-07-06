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
	const [loading, setLoading] = useState(false);
	const value = {
		currentUser,
		signup
	}
	function signup(email, password){
		return auth.createUserWithEmailAndPassword(email, password);
	}
	// useEffect(() => {
	// 	return auth.onAuthStateChanged(user =>{
	// 		setCurrentUser(user)
	// 		setLoading(false)
	// 	})();
	// }, [])
	return(
		<AuthContext.Provider value = {value}>
			{!loading && children}
		</AuthContext.Provider >
	)
}
