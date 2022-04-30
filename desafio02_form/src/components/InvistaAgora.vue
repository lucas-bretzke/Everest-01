<template>
  <div class="container">
    <div class="conteudo">
      <div class="container-text">
        <h1>Investir é sobre voçê</h1>
        <p>COMEÇE A INVESTIR EM POUCOS MINUTOS, DESCOMPLIQUE.</p>
      </div>

      <div>
        <router-link to="DadosDeContato">
          <Button label="Abra sua Conta" />
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import Button from "./Button.vue";

export default {
  name: "InvestirEsobreVC",
  components: {
    Button,
  },
};
</script>


<style scoped>
.container {
  width: 100%;

  margin-top: 150px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  color: white;
}

.conteudo {
  width: 100%;

  padding: 72px 90px;
  margin: 70px;

  align-items: center;
  display: flex;
  justify-content: space-between;

  border-radius: 10px;

  background-color: #ed2f5d;
}

h1 {
  font-size: 51px;
}

p {
  margin-top: 10px;
  font-size: 18px;
}
</style>