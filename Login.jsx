import React, { useEffect, useState } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/curso");
    } catch (err) {
      console.error("Erro no login:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUsuario(null);
      navigate("/"); // Redireciona para a home ou login
    } catch (err) {
      console.error("Erro no logout:", err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Entrar no Curso</h1>

        {usuario ? (
          <>
            <p className="login-welcome">Olá, {usuario.displayName}</p>
            <button className="google-btn" onClick={handleLogout}>
              Sair da Conta
            </button>
          </>
        ) : (
          <button className="google-btn" onClick={handleLogin}>
            Entrar com Google
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
