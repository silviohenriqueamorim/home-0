import logoImage from '../../assets/logo.png'; // Substitua pelo caminho para a sua imagem de logo
import './logo.css'; // Arquivo CSS para estilizar o logo, se necessário

const Logo = () => {
  return (
    <img
      src={logoImage}
      alt="Logo"
      className="logo-image"
    />
  );
};

export default Logo;