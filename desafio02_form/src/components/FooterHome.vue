<template>
  <footer>
    <ul>
      <h1>Sobre</h1>
      <a href="">Sobre a Warren</a>
      <a href="">Quanto Custa</a>
      <a href="">Warren Magazine</a>
      <a href="">Trabalhe Conosco</a>
      <a href="">Imprensa</a>
      <a href="">LOREM INPSUM</a>
    </ul>

    <ul>
      <h1>Produtos</h1>
      <a href="">Bolsa</a>
      <a href="">Carteira</a>
      <a href="">Home Broker</a>
      <a href="">Produtos de Investimento</a>
      <a href="">Previdência</a>
      <a href="">Conta PJ</a>
      <a href="">Warren Pro</a>
    </ul>

    <ul>
      <h1>Escritórios</h1>
      <a href="">Blumenau </a>
      <a href="">Curitiba</a>
      <a href="">Florianópolis</a>
      <a href=""> Itajaí</a>
      <a href=""> Jaraguá do Sul</a>
      <a href="">São Paulo</a>
      <a href="">Rio de Janeiro</a>
      <a href=""> Outros</a>
    </ul>

    <ul>
      <h1>Fale Conosco</h1>
      <a href="">Dúvidas?</a>
      <a href="">Acesse nosso FAQ</a>
      <a href="">Precisa de ajuda?</a>
      <a href="">meajuda@warren.com.br</a>
      <a href="">Acesse o chat</a>
      <a href="">Acesse o WhatsApp</a>
    </ul>
  </footer>
</template>


<script>
export default {
  name: "FooterHome",
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 350px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: #6e6e6e;
}

h1 {
  margin-bottom: 30px;
  color: white;
}

ul {
  display: flex;
  flex-direction: column;
}

a {
  margin: 5px 0px;

  text-decoration: none;

  cursor: pointer;
  color: #d1d1d1;
}
</style>