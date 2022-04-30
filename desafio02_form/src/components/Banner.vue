<template>
  <div class="container-banner">
    <div class="center">
      <h1>
        Quer investir<br />
        seu dinheiro? <br />
        Abra sua conta. <br />
        É grátis.
      </h1>

      <router-link to="DadosDeContato">
        <Button label="Começar agora" class="button-cadastrar" />
      </router-link>
    </div>
  </div>
</template>


<script>
import Button from "./Button.vue";

export default {
  name: "Banner",
  components: {
    Button,
  },
};
</script>


<style scoped>
.container-banner {
  width: 100%;
  height: calc(100vh - 56px);

  margin: 0px;

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
  padding: 0px 0px 30px;

  font-size: 70px;
  color: white;
}

.button-cadastrar {
  padding: 20px 40px;

  position: inherit;

  font-size: 17px;
  transition: .1s;
}

.button-cadastrar:hover {
line-height: 26px;
}
</style>