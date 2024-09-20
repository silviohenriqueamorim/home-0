import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import backImage from '../assets/back.png';
import myImage from '../assets/logo.png';


const Cadastro: React.FC = () => {
  // Definindo os estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [showSenha, setShowSenha] = useState(false); // Estado para mostrar/esconder senha

  // Estados para os valores limpos (sem formatação)
  const [cleanCpf, setCleanCpf] = useState('');
  const [cleanTelefone, setCleanTelefone] = useState('');

  // Função para formatar a data no formato yyyy-mm-dd
  const formatDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 8) {
      const year = cleaned.slice(0, 4);
      const month = cleaned.slice(4, 6);
      const day = cleaned.slice(6, 8);
      return `${year}${month ? '-' + month : ''}${day ? '-' + day : ''}`;
    }
    return value;
  };

  // Função para formatar o telefone no formato (xx)xxxxx-xxxx
  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  // Função para formatar o CPF no formato xxx.xxx.xxx-xx
  const formatCpf = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 11) {
      return cleaned
        .replace(/(\d{3})(\d{1,3})/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .substring(0, 14); // Limita o tamanho do CPF
    }
    return value;
  };

  const handleNascimentoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedValue = formatDate(value);
    setNascimento(formattedValue);
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cleaned = value.replace(/\D/g, ''); // Valor limpo para armazenamento
    const formattedValue = formatPhone(value); // Valor formatado para exibição
    setTelefone(formattedValue);
    setCleanTelefone(cleaned);
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cleaned = value.replace(/\D/g, ''); // Valor limpo para armazenamento
    const formattedValue = formatCpf(value); // Valor formatado para exibição
    setCpf(formattedValue);
    setCleanCpf(cleaned);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();


    // Verifique se as senhas coincidem
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem');
      return;
    }

    const formData = {
      nome,
      email,
      senha,
      cpf: cleanCpf, // Enviando o valor limpo
      telefone: cleanTelefone, // Enviando o valor limpo
      nascimento,
      isAdmin: false
    };

    try {
      const response = await fetch('http://localhost:5000/usuarios/', { // Ajuste a URL conforme o endpoint real
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Erro: ${errorData.error}`);
        return;
      }

      const result = await response.json();
      alert('Conta criada com sucesso!');
      console.log('Usuário criado:', result);
      document.location.href = "./"
      // Redirecionar ou limpar o formulário conforme necessário
    } catch (error) {
      console.error('Erro ao criar conta:', error);
    }
  };

  return (
    <div className="login-container">
      
      <div className="row login-header">
          
          <div className="col-4">
          <Link to="/"><img src={backImage} alt="" style={{width:"50px", paddingLeft:"10px"}} /></Link>
          </div>

          <div className="col-4"  >
          <img src={myImage} alt="Logo" className='logo'/>
          </div>

          <div className="col-4"></div>

        </div>
      
      <div className='content'>
        <div className='row'></div>
        <div className="col-4" >
          <h2>Register</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="row">
            <div className="col-md-7">
              <input
                type="text"
                placeholder="CPF"
                value={cpf}
                onClick={() => { console.log(cleanCpf); }}
                onChange={handleCpfChange}
                maxLength={14} // Limita a quantidade de caracteres para o formato xxx.xxx.xxx-xx
                required
              />
            </div>
            <div className="col-md-5">
              <input
                type="text"
                placeholder="Nascimento"
                value={nascimento}
                onClick={() => { console.log(nascimento); }}
                onChange={handleNascimentoChange}
                maxLength={10} // Limita a quantidade de caracteres para o formato yyyy-mm-dd
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Telefone"
                value={telefone}
                onClick={() => { console.log(cleanTelefone); }}
                onChange={handleTelefoneChange}
                maxLength={15} // Limita a quantidade de caracteres para o formato (xx)xxxxx-xxxx
                required
              />
            </div>
            <div className="col-md-6"></div>
          </div>

          <input
            type={showSenha ? "text" : "password"}
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <div className="row">
            <div className="col-11">
              <input
                type={showSenha ? "text" : "password"}
                placeholder="Confirmar senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required
              />
            </div>
            <div className="col-1">
              <input
                id="mostrarSenha"
                type="checkbox"
                onChange={() => setShowSenha(!showSenha)}
              />
            </div>
          </div>

          <button type="submit" className="login-button">Register</button>
        </form>
        <div className="signup-link">
          Já tem uma conta? <Link to="/login">Entre</Link>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
