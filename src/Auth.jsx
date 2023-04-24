import React, { useState, useEffect } from 'react'
import { 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
 } from 'firebase/auth';
import { useFirebaseApp } from 'reactfire'
import { auth } from './firebase-config';

export default (props)=> {
    const [email, setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [user, setUser]= useState(null)
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return unsubscribe; // unsubscribe from the listener on unmount
      }, []);

    const firebase= useFirebaseApp()

    const signIn= async()=>{
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            console.log(user)
        }catch (error) {
            console.log(error.message)
        }
    }

    const logOut= async()=>{
        await signOut(auth)
    }

    return (
        <div>
            <div>
            <h2>Iniciar sesión</h2>
		    {/* <label htmlFor="correo">Correo electrónico:</label> */}
		    <input type="email" id="correo" name="correo" onChange={(ev)=> setEmail(ev.target.value)}/>
		    <label htmlFor="contraseña">Contraseña:</label>
		    <input type="password" id="contraseña" name="contraseña" onChange={(ev)=> setPassword(ev.target.value)}/>
            <button onClick={signIn}>Iniciar sesion</button>
            </div>
    
                <h2>Usuario Actual</h2>

                {user ? user.email : 'No hay usuario conectado'}

                <button onClick={logOut}>Cerrar sesion</button>
        </div>
    )

 }