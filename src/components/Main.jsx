import React from 'react';
import bgprincipal from '../image/bgprincipal.png';
import '../Styles/Main.css';

export default function Main() {
  return (
    <div className="container-img">
      <img
        src={ bgprincipal }
        alt="Mulher indicando a propaganda"
      />
      <h3>
        Fature muito com a melhor concessionaria de seminovos do brasil
      </h3>
      <p className="descricao">
        Um portal feito especialmente para
        quem quer evoluir
        junto com a Lions Seminovos,
        a empresa que mais cresce no Brasil.
      </p>
      <a href="/contato">
        <button
          className="button btn btn-danger"
        >
          Clique aqui
        </button>
      </a>
      <div className="img-container">
        <div className="equipe" />
      </div>
      <h1 className="text-1">
        Nossos parceiros possuem todo o
        suporte necessário para alcançar
        o sucesso na vendas.
      </h1>
      <h2 className="text-2">
        Temos os melhores especialistas para te ajudar
        para que você não perca nenhuma venda
      </h2>
      <div className="cards-container">
        <div className="card">
          <div className="card1" />
          <p>Clique para mais detalhes</p>
        </div>
        <div className="card">
          <p className="card2">Clique para mais detalhes</p>
        </div>
        <div className="card">
          <p className="card3">Clique para mais detalhes</p>
        </div>
      </div>
    </div>
  );
}
