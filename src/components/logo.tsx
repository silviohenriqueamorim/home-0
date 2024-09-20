import React from 'react';
import logoImage from '../assets/logo.png'; // Caminho para a imagem da logo
import '../app.css'; // Importa o CSS específico do componente (opcional)

const Logo: React.FC = () => {
  return (
    <img src={logoImage} alt="Logo" className='logo'/>
  );
};

export default Logo;
