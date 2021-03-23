import React, { useContext, useEffect, useState } from 'react'
import { auth } from './firebase'
import { useDispatch, } from 'react-redux';
import { login, logout } from '../features/userSlice';
import { useHistory } from 'react-router-dom';
import { db } from '../firebase/firebase';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const dispatch = useDispatch()
    const history = useHistory()
    const [loading, setLoading] = useState(true)

    function signUp(email, password, displayName, photoURL, job) {
        return auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            db.collection('users').add({
                email: email,
                uid: userAuth.user.uid,
                displayName: displayName,
                photoURL: photoURL,
                job: job
            }).then(() => {
                dispatch(login({
                    email: email,
                    displayName: displayName,
                    photoUrl: photoURL,
                    job: job
                }))
                history.push('/home')
            }).catch(err => alert(err));
        }).catch(err => alert(err));
    }

    function signIn(email, password) {
        return auth.signInWithEmailAndPassword(email, password).then(() => {
            getUser(email)
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

    // function updateEmail(email) {
    //     user.updateEmail(email)
    // }

    // function updatePassword(password) {
    //     user.updatePassword(password)
    // }

    const getUser = (uid) => {
        db.collection('users').where("uid", "==", uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    let data = doc.data()
                    dispatch(login({
                        email: data.email,
                        uid: uid,
                        displayName: data.displayName,
                        photoUrl: data.photoURL,
                        job: data.job
                    }))
                });
            })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            setCurrentUser(userAuth)
            setLoading(false)
            if (userAuth) {
                // user is logged in
                getUser(userAuth.uid)
            } else {
                // user is logged out
                dispatch(logout());
            }

        })
        return unsubscribe
    }, []);




    const value = {
        currentUser,
        signUp,
        signIn,
        resetPassword,
        signOut,
        // updateEmail,
        // updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
