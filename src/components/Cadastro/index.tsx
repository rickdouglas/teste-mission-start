import "./cadastro.scss";

export function Cadastro() {
  return (
    <div className="cadastro__wrapper">
      <h2>Cadastrar Produto</h2>
      <form className="cadastro__form">
        <label>
          Nome do produto
          <input type="text" placeholder="Nome do produto" />
        </label>

        <label>
          Preço
          <input type="text" placeholder="Preço" />
        </label>

        <button>Salvar</button>
      </form>
    </div>
  );
}
