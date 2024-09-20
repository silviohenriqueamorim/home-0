import React from 'react';
import perfilImage from '../../assets/perfil1.png'; // Substitua pelo caminho para a sua imagem de perfil
import './perfil.css'; // Arquivo CSS para estilizar o perfil, se necessário
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Perfil = () => {
  return (
    <div className='containerr'>
      <div className='foto'>
        <img
        src={perfilImage}
        alt="perfil"
        className="perfil-image"
        />
      </div>
      <div className='texto'>
        <div>Usuário</div>
        <div>ver perfil</div>
      </div>
    </div>
  );
};

export default Perfil;