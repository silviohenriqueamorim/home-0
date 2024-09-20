import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import backImage from '../assets/back.png';
import myImage from '../assets/logo.png';

const Login: React.FC = () => {
  // Estados para gerenciar os valores do formulário e possíveis mensagens de erro
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Dados a serem enviados
    const requestData = { email, senha };
    console.log('Enviando dados para o backend:', requestData);

    try {
      const response = await fetch('http://localhost:5000/usuarios/login', { // Ajuste a URL conforme o endpoint real
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData), // Envia os dados no corpo da requisição
      });

      console.log('Resposta do backend:', response);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro na resposta:', errorData);
        setError(errorData.error || 'Erro desconhecido');
        return;
      }

      const result = await response.json();
      console.log('Dados recebidos do backend:', result);

      // Armazene o accessToken no localStorage ou onde preferir
      localStorage.setItem('accessToken', result.accessToken);
      alert("login feito com sucesso")
      
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao fazer login. Tente novamente.');
    }
  };


  return (
    <div className="login-container">
      
        <div className="row login-header">
          
          <div className="col-4">
          <Link to="/register"><img src={backImage} alt="" style={{width:"50px", paddingLeft:"10px"}} /></Link>
          </div>

          <div className="col-4"  >
          <img src={myImage} alt="Logo" className='logo'/>
          </div>

          <div className="col-4"></div>

        </div>

      <div className='content'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="signup-link">
        Não tem conta? <Link to="/register">Crie uma</Link>
        Não tem conta? <Link to="/home">Crie uma</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
