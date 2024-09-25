import React from 'react';
import './css/Card2.css';

interface CardProps {
  title: string;
}

const Card2: React.FC<CardProps> = ({ title }) => {
  return (
    <main>
        <div className="card">
            <h2 className="card-title">{title}Descubra as regras para postar um carro em nosso Site!</h2>
          <div className='button'>
            <button>Regras</button>
          </div>
        </div>
    </main>
  );
};

export default Card2;