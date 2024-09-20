import { useState } from 'react';
import perfilImage from '../../assets/perfil1.png'; // Substitua pelo caminho para a sua imagem de perfil
import './menu.css'; // Arquivo CSS para estilizar o perfil, se necessário
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`menu-icon ${isActive ? 'active' : ''}`} onClick={handleClick}>
      
    <div className='containerr2'>
      <div className='foto2'>
        <img style={{padding:"0 0 0 4px"}}
        src={perfilImage}
        alt="perfil2"
        className="perfil-image2"
        />
      </div>
      <div className='texto2'>
        <div style={{textAlign:"center", width:"100%"}}>Usuário</div>
      </div>
    </div>
    </div>
  );
};

export default Menu;
