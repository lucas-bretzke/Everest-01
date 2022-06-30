<template>
  <div>
    <nav>
      <BtnReturn previousPageUrl="/HomeView" />
      <h5>CADASTRO DE USUÁRIO</h5>
    </nav>
    <header>
      <div class="center">
        <button :class="{ style_btn1: styleBtnRegister }" @click="RegisterUsers">CADASTRO</button>
        <button :class="{ style_btn2: styleBtnListing }" @click="UsersList">LISTAGEM</button>
      </div>
    </header>
  </div>
</template>

<script>
import BtnReturn from "../../../components/BtnReturn.vue";
export default {
  name: "TopbarListagem",
  components: {
    BtnReturn,
  },
  props: {
    styleBtnRegister: {
      type: Boolean,
    },
    styleBtnListing: {
      type: Boolean,
    },
  },
  methods: {
    RegisterUsers() {
      this.$router.push({ name: "RegisterUser" });
    },
    UsersList() {
      this.$router.push({ name: "UsersList" });
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
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

.style_btn1 {
  color: black;
  border-bottom: 2px solid black;
}
.style_btn2 {
  color: black;
  border-bottom: 2px solid black;
}
</style>