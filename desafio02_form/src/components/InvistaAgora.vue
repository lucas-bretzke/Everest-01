<template>
  <div class="conteudo">
    <div class="container-text">
      <h1>Investir é sobre voçê</h1>
      <p>COMEÇE A INVESTIR EM POUCOS MINUTOS, DESCOMPLIQUE.</p>
    </div>

    <div>
      <router-link to="DadosDeContato">
        <BtnGlobal label="Abra sua Conta" class="btn" />
      </router-link>
    </div>
  </div>
</template>


<script>
import BtnGlobal from "./btnGlobal.vue";

export default {
  name: "InvestirEsobreVC",
  components: {
    BtnGlobal,
  },
};
</script>


<style scoped>
.conteudo {
  width: 100%;

  padding: 72px 150px;

  align-items: center;
  display: flex;
  justify-content: space-between;

  color: white;
  background-color: #ed2f5d;
}

.btn {
  font-size: 17px;
}
.btn:hover {
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.294);
}
h1 {
  font-size: 51px;
}

p {
  margin-top: 10px;
  font-size: 18px;
}
</style>