<template>
  <header>
    <div class="center">
      <button>CADASTRO</button>
      <button>LISTAGEM</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderListagem",
  props: {
    show_listagem: { type: String },
    show_cadastro: { type: String },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 120px;

  display: flex;
}
.center {
  margin: 0px auto;
  align-items: center;
}
button {
  padding: 15px 30px;
  margin-top: 75px;
  font-weight: bold;
  border: none;
  color: rgba(108, 108, 108, 0.782);
  background-color: white;
  cursor: pointer;
}

button:focus {
  color: #2f2f33;
  border-bottom: 3px solid #2f2f33;
}
</style>