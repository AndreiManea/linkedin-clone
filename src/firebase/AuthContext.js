import React, { useContext, useState, useEffect } from 'react'
import { auth } from './firebase'
import firebase from 'firebase'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../features/userSlice';


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                // user is logged in
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoURL
                }))
            } else {
                // user is logged out
                dispatch(logout());
            }
        })

        return unsubscribe
    }, []);


    function signup(email, password, displayName, photoURL) {
        return auth.createUserWithEmailAndPassword(email, password).then(userAuth => {
            userAuth.user.updateProfile({
                displayName: displayName,
                photoURL: photoURL
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: displayName,
                    photoURL: photoURL,
                }));
            }).catch(err => alert(err));
        }).catch(err => alert(err));
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password).then(() => {
            history.push("/home");
        }).catch(err => alert(err.message));
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function logout() {
        return auth.signOut()
    }

    function updateEmail(email) {
        user.updateEmail(email)
    }

    function updatePassword(password) {
        user.updatePassword(password)
    }




    const value = {
        user,
        signup,
        // login,
        resetPassword,
        logout,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
