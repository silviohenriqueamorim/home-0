import Header from '../components/header/Header';
import './css/home.css'
import Carrosel from './Carrosel';
import Card1 from './Card1'
import Card2 from './Card2'


const Home = () => {
    return (
      <div>
        <Header />
        <Card1 />
        <Carrosel />
        <Card2 />
      </div>
    );
};

export default Home;
