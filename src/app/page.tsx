export default function Home() {
  return (
    <div>
      <h1> Challenge Front End Developer</h1>
      <h3>Objetivo do challenge é verificar o seu conhecimento em arquitetura, modularização, organização e bons conhecimentos em Javascript (>ES6) ou Typescript.</h3>
      <br />
      <p>A soluçao desse desafio foi basicamente criar um menu lateral com as 3 paginas conforme diz desciçao do teste</p>
      <p>Uma tela para Cadastro, outra para Lista e outra para o Carrinho de compras</p>
      <p>Na tela de cadastro é possivel cadastrar um produto com nome e preço que serao salvos no local storage do navegador</p>
      <p>Na tela de listagem a feito o carregamento do produtos cadastrados no local storage e mostrados em tela, permitindo tambem o usuario adicionar o produto ao carrinho de compras</p>
      <p>Quando um produto cadastrado é inserido no carrinho de compras é criada uma nova lista no local storage</p>
      <p>E para finalizar na tela do carrinho de compras a lista com os produtos adicionados ao carrinho de compras é carregada e calculado o valor total da compra.</p>
      <br />
      <p>Foram usadas para implementar a soluçao desse teste a a versao mais recente no Next.js, Typescript, Material UI e SASS</p>    
    </div>
  );
}
