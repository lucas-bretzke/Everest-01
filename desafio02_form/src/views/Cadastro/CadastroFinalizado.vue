<template>
  <CadastroSlot
    previousPageUrl="DadosPessoais"
    nextPageUrl="HomeView"
    :current-state="3"
  >
    <template #Center>
      <section class="conteudo-principal">
        <ProgressionBar :current-state="3" />

        <img id="OkFinalizado-img" :src="OkFinalizado" alt="" />
        <h1>Cadastro</h1>
        <h2>Finalizado</h2>
        <p>Caso deseja retornar á página inicial</p>
        <p>clique no botão a baixo</p>
      </section>
      <router-link to="HomeView">
        <BtnGloobal label="Continuar" id="continuar-button" />
      </router-link>
    </template>
  </CadastroSlot>
</template>


<script>
import ProgressionBar from "../../components/ProgressionBar.vue";
import CadastroSlot from "../Cadastro/components/CadastroSlot";
import BtnGloobal from "../../components/BtnGloobal.vue";

export default {
  name: "CadastroFinalizado",
  components: {
    ProgressionBar,
    CadastroSlot,
    BtnGloobal
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
}

#OkFinalizado-img {
  width: 45px;
  margin-top: 20vh;
  margin-bottom: 10px;
}

img,
h1,
h2,
p {
  align-items: center;
  justify-content: center;
}

h2 {
  margin-bottom: 5px;
}

p {
  font-size: 12px;
}
</style>