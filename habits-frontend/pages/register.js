// src/pages/Register.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../habits-backend/src/services/firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registro bem-sucedido!');
      navigate('/login');
    } catch (err) {
      console.error(err);
      setError('Erro ao registrar. Verifique os dados.');
    }
  };

  return (
    <div className="register-container">
      <h2>Registrar</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha (mínimo 6 caracteres)"
          required
        />
        <button type="submit">Registrar</button>
      </form>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default Register;
