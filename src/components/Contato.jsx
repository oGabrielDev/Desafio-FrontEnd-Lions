import React from 'react';
import Header from './Header';
import '../Styles/Form.css';

export default function Contato() {
  return (
    <>
      <Header />
      <form className="form">
        <div
          className="d-flex
          flex-column shadow p-3 mb-5
          bg-body-tertiary rounded w-25 h-20
          "
        >
          <div className="p-2 m-1">
            <input
              type="text"
              id="name"
              placeholder="Nome"
              className="w-100 form-control border-success"
            />
          </div>
          <div className="p-2 m-1">
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="w-100 form-control border-success"
            />
          </div>
          <div className="p-2 m-1">
            <input
              type="number"
              id="Contato"
              placeholder="Telefone"
              className="w-100 form-control border-success"
            />
          </div>
          <button
            className="btn
            btn-success
            d-flex
            justify-content-center
            align-items-center
            w-25
            m-auto"
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
