<template>
  <div class="container-banner">
    <div class="center">
      <h1>Quer investir</h1>
      <h1>seu dinheiro?</h1>
      <h1>Abra sua conta.</h1>
      <h1>É grátis.</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam ips</p>

      <router-link to="DadosDeContato">
        <BtnGloobal label="Começar agora" class="button-cadastrar" />
      </router-link>
    </div>
  </div>
</template>


<script>
import BtnGloobal from "./BtnGloobal.vue";  

export default {
  name: "BannerHome",
  components: {
    BtnGloobal,
  },
};
</script>


<style scoped>
.container-banner {
  width: 100%;
  height: calc(100vh - 56px);

  margin: 0px;
  margin-bottom: 130px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #6e6e6e;
}
.center {
  min-width: 73%;
  max-width: 73%;

  margin: 0px auto;

  background-color: #6e6e6e;
}
h1 {
  font-size: 70px;
  color: white;
}
p {
  margin: 13px 0px 35px;
  color: white;
}

.ButtonGloobal-cadastrar {
  padding: 20px 40px;

  position: inherit;

  font-size: 17px;
  transition: 0.1s;
}

.ButtonGloobal-cadastrar:hover {
  font-size: 19px;
}
</style>