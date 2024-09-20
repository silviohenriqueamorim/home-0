import Header from '../components/header/Header';
import './css/home.css'
import Carrosel from './Carrosel';
import Card from './Card'


const Home = () => {
    return (
      <div>
        <Header />
        <Carrosel />
        <Card />
      </div>
    );
};

export default Home;
