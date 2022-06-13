<template>
  <div class="nav-container">
    <font-awesome-icon icon="fa-solid fa-arrow-left" class="ic-return" />
    <h5>CADASTRO DE USUÁRIO</h5>
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
</style>