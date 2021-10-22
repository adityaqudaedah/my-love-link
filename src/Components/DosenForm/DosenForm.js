import React, { useState, useEffect } from "react";
import "./DosenForm.css";
import { auth } from "../../firebase/fire-config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "@firebase/auth";
import Card from "../../UI/Card";
import InputDosen from "../InputDosenForm/InputDosen";
import LoginAdminForm from "../LoginAdminForm/LoginAdminForm";

const DosenForm = () => {
  /* check is user loged in?*/
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* login handler*/
  const onAuth = (loginData) => {
    setEmail(loginData.email);
    setPassword(loginData.password);
  };

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      // alert("login sukses");
    })
    .catch((error) => {
     
    });

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  return (
    <Card className="form-dosen">
      { user && <InputDosen getUserName={user.email} />} 
      {!user && <LoginAdminForm onAuth={onAuth} />}
    </Card>
  );
};

export default DosenForm;
