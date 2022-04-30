<template>
  <nav>
    <div class="center-NavBar">
      <ul>
        <router-link id="router-link" to="HomeView">
          <img :src="LogoWarren" alt="logo" />
        </router-link>
        <a href="">Investir</a>

        <a href="">Quanto custa</a>
        <a href="">Sobre</a>
        <a href="">Megazine</a>
      </ul>

      <ul>
        <Button label="Login" class="button-login" />
        <router-link id="router-link" to="/DadosDeContato">
          <Button label="Abra sua conta" class="button-Abra-Sua-Conta" />
        </router-link>
      </ul>
    </div>
  </nav>
</template>


<script>
import Button from "./Button.vue";

export default {
  name: "NavBar",
  components: {
    Button,
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
  padding: 10px 0px;

  display: flex;
  justify-content: space-around;

  border-bottom: 1px solid #000;

  background-color: #222;
}

.center-NavBar {
  min-width: 77%;
  max-width: 77%;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

img {
  width: 120px;
  height: auto;

  padding: 0px;

  border-radius: 10px;
  box-shadow: 4px 4px 6px #444;
}

ul {
  text-align: left;

  display: flex;
  align-items: center;
  justify-content: center;
}
a {
  font-size: 14px;
  text-decoration: none;
  color: white;
  padding: 5px 16px;
  border-radius: 7px;
}

a:hover {
  color: #ed2f5d;

  background-color: rgba(108, 108, 108, 0.133);
}

.button-login {
  font-size: 14px;
  padding: 10px 15px;
  margin: 0px 5px;
  background: none;
}
.button-login:hover {
  background: #2f2f33d5;
}
.button-Abra-Sua-Conta {
  font-size: 14px;
  padding: 10px 20px;
}

.button-Abra-Sua-Conta:hover {
  transition: 0s;
  font-size: 14.3px;
  padding: 10.2px 20.2px;
}
</style>