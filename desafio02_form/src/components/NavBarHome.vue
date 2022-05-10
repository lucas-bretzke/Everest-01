<template>
  <nav>
    <router-link id="router-link" to="HomeView">
      <img :src="LogoWarren" alt="logo" />
    </router-link>
    <a href="">Investir</a>

    <a href="">Quanto custa</a>
    <a href="">Sobre</a>
    <a href="">Megazine</a>
    <router-link id="router-link" to="LoginEmail">
      <BtnGloobal label="Login" class="button-login" />
    </router-link>
    <router-link id="router-link" to="/DadosDeContato">
      <BtnGloobal label="Abra sua conta" class="button-Abra-Sua-Conta" />
    </router-link>
  </nav>
</template>


<script>
import BtnGloobal from "./BtnGloobal.vue";

export default {
  name: "NavBar",
  components: {
    BtnGloobal,
  },

  data() {
    return {
      LogoWarren: "/img/Logo-Warren.png",
    };
  },
  methods: {
    showSubMenu() {
      this.mostrar_subMenu = !this.mostrar_subMenu;
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 56px;
  padding: 10px 12%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 1px solid #000;

  background-color: #222;
}

img {
  width: 120px;
  height: auto;

  padding: 0px;

  border-radius: 10px;
  box-shadow: 4px 4px 6px #444;
}

a {
  font-size: 14px;
  text-decoration: none;
  color: white;
  padding: 2% 4%;
  border-radius: 7px;
}

a:hover {
  color: #ed2f5d;
  background-color: rgba(108, 108, 108, 0.133);
}

.button-login,
.button-Abra-Sua-Conta {
  font-size: 14px;
  background: transparent;
  transition: 0.5s;
}

.button-login:hover,
.button-Abra-Sua-Conta:hover {
  color: #ed2f5d;
  font-size: 15px;
}
</style>