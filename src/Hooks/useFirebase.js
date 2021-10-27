import { useEffect, useState } from 'react';
import initializeFirebase from '../Firebase/firebaseInitialize';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, GithubAuthProvider, signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    //Provider List
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const auth = getAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    //State and Error
    const [user, setUser] = useState({})
    const [error, setError] = useState("");

    //Register Function 
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
      }
      const handlePassChange = (e) =>{
        if(e.target.value.length<6){
          console.error("Not Possible");
        }else{
          setPassword(e.target.value);
        }
      }
    const registerHandle = (e) =>{e.preventDefault();
        e.preventDefault();
        console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const {displayName, email, photoURL} = result.user;
          const userInfo = {
              name : displayName,
              email: email,
              photoURL: photoURL
          };
          setUser(userInfo);
          })
          .catch (error =>{
              setError(error.message);
          })
      }
      useEffect(() => {
          onAuthStateChanged(auth, (user)=>{
          if(user){
              setUser(user);
          }else{
              setError("");
          }
          });
      }, []);

    //Email PassWord Login Function
    const handaleLogin =() =>{
    signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const {displayName, email, photoURL} = result.user;
            const userInfo = {
                name : displayName,
                email: email,
                photoURL: photoURL
            };
            setUser(userInfo);
            })
    }
    //Toggle Login
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
    
    
    //Github Login 
    const handleGithubSign = () =>{
    signInWithPopup(auth, gitProvider)
        .then((result) => {
            const {displayName, email, photoURL} = result.user;
            const userInfo = {
                name : displayName,
                email: email,
                photoURL: photoURL
            };
            setUser(userInfo);
            })
    }
    //Github Login 
    const updateUser = () =>{
        signInWithPopup(auth, gitProvider)
            .then((result) => {
                const {displayName, email, photoURL} = result.user;
                const userInfo = {
                    name : displayName,
                    email: email,
                    photoURL: photoURL
                };
                setUser(userInfo);
                })
        }
    
    //Googole Login
    const handleGoogleSign = () =>{
    signInWithPopup(auth, provider)
        .then((result) => {
            const {displayName, email, photoURL} = result.user;
            const loggedInUser = {
                name : displayName,
                email: email,
                photoURL: photoURL
            };
            setUser(loggedInUser);
            })
            .catch (error =>{
            setError(error.message);
            })
        };
        useEffect(() => {
            onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }else{
                setError("");
            }
            });
        }, []);
    const logout = () =>{
    signOut(auth)
    .then(() => {
        setUser({})
    })
    .catch((error) => {
        // An error happened.
    });
}
return{handleGoogleSign, user,error,logout, handleGithubSign, registerHandle, handleEmailChange, handlePassChange,handaleLogin,toggleLogin,updateUser};
    
};

export default useFirebase;