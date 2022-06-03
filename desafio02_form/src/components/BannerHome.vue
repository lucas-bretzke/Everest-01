<template>
  <div class="container-banner">
    <div class="center">
      <div class="contentText">
        <h1>Quer investir</h1>
        <h1>seu dinheiro?</h1>
        <h1>Abra sua conta.</h1>
        <h1>É grátis.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <router-link to="DadosDeContato">
          <BtnGlobal label="Comece agora" class="button-cadastrar" />
        </router-link>
      </div>
      <div class="contentImg">
        <img
          :src="imgCelular"
          alt="Imagem mostrando a tela home do aplicativo de investimentos da Warren em um celular"
        />
      </div>
    </div>
  </div>
</template>


<script>
import BtnGlobal from "./btnGlobal.vue";

export default {
  name: "BannerHome",
  components: {
    BtnGlobal,
  },
  data() {
    return {
      imgCelular: "/img/celular.png",
    };
  },
};
</script>


<style scoped>
.container-banner {
  width: 100%;
  height: 730px;

  padding: 0px;
  margin: 0px;
  margin-bottom: 130px;

  display: flex;

  background-color: #ed2f5d;
}
.center {
  width: 78%;
  max-width: 1200px;

  padding: 0px;
  margin: 0px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.contentText,
.contentImg {
  width: 50%;
}
.button-cadastrar {
  font-size: 17px;
  font-weight: bold;
  padding: 20px 40px;
}
.button-cadastrar:hover {
  transition: 0.2s;
  box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.294);
}
h1 {
  font-size: 69px;
  color: white;
}
p {
  margin: 13px 0px 35px;
  color: white;
}
</style>