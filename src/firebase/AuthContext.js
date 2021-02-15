import React, { useContext, useEffect } from 'react'
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../features/userSlice';
import { useHistory } from 'react-router-dom';


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const history = useHistory()

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
        // eslint-disable-next-line
    }, []);


    function signUp(email, password, displayName, photoURL) {
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
    function signIn(email, password) {
        return auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            console.log(email);
            console.log(userAuth.user);
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
            }));
            history.push("/home");
        }).catch(err => console.log(err));
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function signOut() {
        dispatch(logout());
        history.push("/login");
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
        signUp,
        signIn,
        resetPassword,
        signOut,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
