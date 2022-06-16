<template>
  <div>
    <nav class="nav-container">
      <font-awesome-icon icon="fa-solid fa-arrow-left" class="ic-return" />
      <h5>CADASTRO DE USUÁRIO</h5>
    </nav>
    <header>
      <div class="center">
        <button>CADASTRO</button>
        <button>LISTAGEM</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavbarListagem",
};
</script>

<style scoped>
.nav-container {
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;

  background-color: rgba(224, 43, 87, 255);
}

.ic-return {
  width: 22px;
  height: 22px;
  margin-left: 10px;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  color: white;
}

.ic-return:hover {
  background-color: rgba(255, 255, 255, 0.218);
}
h5 {
  margin-left: 43%;
  color: white;
}

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
</style>