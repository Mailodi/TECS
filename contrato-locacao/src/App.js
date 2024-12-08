import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      {/* Cabeçalho */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1c1c1e' }}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" style={{ color: '#fff' }}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#fff' }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#fff' }}>
                Cliente
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#fff' }}>
                Locação
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#fff' }}>
                Devolução
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#fff' }}>
                Veículo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#fff' }}>
                Manutenção
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#fff' }}>
                Relatórios
              </a>
            </li>
          </ul>
          <div className="navbar-nav">
            <a href="#" className="nav-link" style={{ color: '#fff' }}>
              <i className="fas fa-user" style={{ color: '#fff' }}></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Container de Conteúdo */}
      <div className="container mt-4">
        <h3 className="mb-4" style={{ color: '#fff' }}>Contrato de Locação</h3>
        <div className="row">
          {/* Formulário */}
          <div className="col-md-6">
            <div className="card p-4" style={{ backgroundColor: '#1c1c1e' }}>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label" style={{ color: '#fff' }}>Buscar Locação:</label>
                    <input type="text" className="form-control" placeholder="Digite aqui..." />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label" style={{ color: '#fff' }}>Data de Locação:</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label" style={{ color: '#fff' }}>Devolução:</label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label" style={{ color: '#fff' }}>CPF / CNPJ do Locatário:</label>
                    <input type="text" className="form-control" placeholder="000.000.000-00" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ color: '#fff' }}>Nome do Locatário:</label>
                    <input type="text" className="form-control" placeholder="Digite o nome do locatário..." />
                  </div>
                </div>
                <button type="button" className="btn btn-primary w-100 mb-3">
                  Calcular Contrato (R$)
                </button>
                <div className="d-flex justify-content-between w-100">
                  <button type="button" className="btn btn-secondary flex-grow-1 mx-1" style={{ color: '#fff' }}>
                    Novo
                  </button>
                  <button type="button" className="btn btn-success flex-grow-1 mx-1" style={{ color: '#fff' }}>
                    Salvar
                  </button>
                  <button type="button" className="btn btn-danger flex-grow-1 mx-1" style={{ color: '#fff' }}>
                    Excluir
                  </button>
                  <button type="button" className="btn btn-warning flex-grow-1 mx-1" style={{ color: '#fff' }}>
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Tabela de Veículos */}
          <div className="col-md-6">
            <div className="card p-4" style={{ backgroundColor: '#1c1c1e' }}>
              <h5 style={{ color: '#fff' }}>Veículos</h5>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label" style={{ color: '#fff' }}>Valor Caução (R$):</label>
                  <input type="text" className="form-control" placeholder="Valor Caução" />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ color: '#fff' }}>Valor Total (R$):</label>
                  <input type="text" className="form-control" placeholder="Valor Total" />
                </div>
              </div>
              <button type="button" className="btn btn-success mb-3" style={{ color: '#fff' }}>
                Adicionar Veículo
              </button>
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th style={{ color: '#fff' }}>Marca</th>
                    <th style={{ color: '#fff' }}>Modelo</th>
                    <th style={{ color: '#fff' }}>Categoria</th>
                    <th style={{ color: '#fff' }}>Locação (R$)</th>
                    <th style={{ color: '#fff' }}>Ocorrência (R$)</th>
                    <th style={{ color: '#fff' }}>Ações</th>
                  </tr>
                </thead>
                <tbody>{/* Renderizar dados */}</tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tabela Principal */}
        <div className="table-container mt-4">
          <h5 style={{ color: '#fff' }}>Contratos Registrados</h5>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th style={{ color: '#fff' }}>N° Contrato</th>
                <th style={{ color: '#fff' }}>Locatário</th>
                <th style={{ color: '#fff' }}>Data Locação</th>
                <th style={{ color: '#fff' }}>Data Devolução</th>
                <th style={{ color: '#fff' }}>Status</th>
                <th style={{ color: '#fff' }}>Total Ocorrência</th>
                <th style={{ color: '#fff' }}>Valor Ocorrência (R$)</th>
                <th style={{ color: '#fff' }}>Valor Total (R$)</th>
              </tr>
            </thead>
            <tbody>{/* Renderizar dados */}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
