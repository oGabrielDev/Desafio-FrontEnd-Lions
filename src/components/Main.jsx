import React from 'react';
// import mulherapontando from '../image/mulherapontando.jpg';
import bgprincipal from '../image/bgprincipal.png';
// import bgprincipal1 from '../image/mulherapontando1.png';
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
      <p>
        Um portal feito especialmente para
        quem quer evoluir
        juntocom a Lions Seminovos,
        a empresa que mais cresce no Brasil.
      </p>
      <button className="button btn btn-danger">Clique aqui</button>
    </div>
  );
}
