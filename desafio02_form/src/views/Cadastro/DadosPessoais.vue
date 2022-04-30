<template>
  <Cadastro
    previousPageUrl="DadosDeContato"
    nextPageUrl="CadastroFinalizado"
    :current-state="2"
  >
    <template #Center>
          <section class="conteudo-principal">
            <ProgressionBar :current-state="2" />

            <h1>Dados pessoais</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              facilis reprehenderit consequatur ad.
            </p>
            <div class="container-global-inputs">
              <div class="container-inputs">
                <label for="pais one reside">País onde reside</label>
                <input
                  type="email"
                  name="nome"
                  placeholder="Digite seu E-mail"
                />

                <label for="Cep">Cep</label>
                <input type="" name="cpf" placeholder="Cpf" />
              </div>

              <div class="container-inputs">
                <label for="Cidade">Cidade</label>
                <input type="text" name="nome" placeholder="Confirmar e-mail" />

                <label id="" for="nome">Endereço</label>
                <input type="text" name="nome" placeholder="celular" />
              </div>
            </div>
            <div id="container-global-inputs" class=".container-global-inputs">
              <label id="label-numero" for="numero">Número</label>
              <input type="text" placeholder="Digite seu nome" />
            </div>
          </section>
    </template>
  </Cadastro>
</template>

<script>
import ProgressionBar from "../../components/ProgressionBar.vue";
import Cadastro from "./components/Cadastro";


export default {
  name: "DadosPessoais",
  components: {
    ProgressionBar,
    Cadastro,
  },
  data() {
    return {
      ImgDeCadastro: "/img/img-tela-cadastro.png",
    };
  },
};
</script>


<style scoped>
h1 {
  margin: 35px 0px;
}

p {
  font-size: 12px;
  margin-bottom: 20px;
}

#container-global-inputs {
  margin-top: 9px;
}

</style>