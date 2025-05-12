import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import CursoCompleto from "../CursoCompleto";

export default function Curso() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/"); // Se não estiver logado, volta pro login
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redireciona para a página de login após sair
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  return (
   <div>
      <CursoCompleto />
      {/* Botão fixo na lateral */}
      <button 
        onClick={handleLogout} 
        style={{
           position: 'fixed',
          top: '70px', // A mesma altura do botão de tema
          left: '20px', // Coloca o botão no lado esquerdo
          backgroundColor: '#2437c3', // Pode alterar a cor para algo distinto, por exemplo
          color: 'white',
          border: 'none',
          padding: '10px 16px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          transition: 'background-color 0.3s ease',
          zIndex: 1000
        }}
      >
        Sair
      </button>
    </div>
  );
}