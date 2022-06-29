<template>
  <footer>
    <ul>
      <h1>Sobre</h1>
      <a>Sobre a Warren</a>
      <a>Quanto Custa</a>
      <a>Warren Magazine</a>
      <a>Trabalhe Conosco</a>
      <a>Imprensa</a>
      <a>LOREM INPSUM</a>
    </ul>

    <ul>
      <h1>Produtos</h1>
      <a>Bolsa</a>
      <a>Carteira</a>
      <a>Home Broker</a>
      <a>Produtos de Investimento</a>
      <a>Previdência</a>
      <a>Conta PJ</a>
      <a>Warren Pro</a>
    </ul>

    <ul>
      <h1>Escritórios</h1>
      <a>Blumenau </a>
      <a>Curitiba</a>
      <a>Florianópolis</a>
      <a> Itajaí</a>
      <a> Jaraguá do Sul</a>
      <a>São Paulo</a>
      <a>Rio de Janeiro</a>
      <a> Outros</a>
    </ul>

    <ul>
      <h1>Fale Conosco</h1>
      <a>Dúvidas?</a>
      <a>Acesse nosso FAQ</a>
      <a>Precisa de ajuda?</a>
      <a>meajuda@warren.com.br</a>
      <a>Acesse o chat</a>
      <a>Acesse o WhatsApp</a>
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