import React, { useState, createContext, useEffect } from "react";
import {auth} from "../../firebase";

import {createOrUpdateUser} from "../../functions/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextprovider = ({children})=>{
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("user", user);
    }, [user]);

    const onLogin = async (email, password) => {
        setIsLoading(true);
        const result = await auth.signInWithEmailAndPassword(email, password);
        const idTokenResult = await result.user.getIdTokenResult();
        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            setUser({
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role: res.data.role,
              _id: res.data._id,
            });
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
            console.log(err);
          });
      };
    
    const onRegister = async (email, password, repeatedPassword) => {
        setIsLoading(true);
        if (password !== repeatedPassword) {
            setError("Error: Passwords do not match");
            return;
        }
        const result = await auth.createUserWithEmailAndPassword(email, password);
        const idTokenResult = await result.user.getIdTokenResult();
        createOrUpdateUser(idTokenResult.token)
            .then((res) => {
            setUser({
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
            });
            setIsLoading(false);
            })
            .catch((err) => {
            setIsLoading(false);
            console.log(err);
            });
    };

    const onLogout = () => {
        auth
        .signOut()
        .then(() => {
        setUser(null);
        setError(null);
        });
    };
    
    return (
    <AuthenticationContext.Provider
        value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        }}
    >
        {children}
    </AuthenticationContext.Provider>
    );
}