<template>
  <Cadastro
    previousPageUrl="DadosPessoais"
    nextPageUrl="HomeView"
    :current-state="3"
  >
    <template #Center>
      <section class="conteudo-principal">
        <ProgressionBar :current-state="3" />

        <img id="OkFinalizado-img" :src="OkFinalizado" alt="" />
        <h1>Cadastro</h1>
        <h1>finalizado</h1>
        <p>Caso deseja retornar á página inicial</p>
        <p>clique no botão a baixo</p>
      </section>
    </template>
  </Cadastro>
</template>


<script>
import Button from "../../components/Button.vue";
import ProgressionBar from "../../components/ProgressionBar.vue";
import Cadastro from "../Cadastro/components/Cadastro";

export default {
  name: "CadastroFinalizado",
  components: {
    Button,
    ProgressionBar,
    Cadastro,
  },
  data() {
    return {
      ImgDeCadastro: "/img/img-tela-cadastro.png",
      OkFinalizado: "/img/sucesso.png",
    };
  },
};
</script>

<style scoped>
section {
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

#OkFinalizado-img {
  width: 45px;
  margin-top: 20vh;
}

img,
h1,
p {
  align-items: center;
  justify-content: center;
}

p {
  font-size: 12px;
}
</style>