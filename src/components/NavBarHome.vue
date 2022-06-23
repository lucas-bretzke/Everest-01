<template>
  <nav>
    <div class="center">
      <router-link id="router-link" to="HomeView">
        <img :src="LogoWarren" alt="logo da Warren" />
      </router-link>

      <ul>
        <li>
          <p>
            Investir
            <font-awesome-icon
              icon="fa-solid fa-angle-down"
              class="ic-angleDown"
            />
          </p>
          <ul>
            <li><p>Carteiras</p></li>
            <li><p>Bolsa</p></li>
            <li><p>Home Broker</p></li>
          </ul>
        </li>
      </ul>

      <a>Quanto custa</a>
      <a>Sobre</a>
      <a>Megazine</a>
      <router-link id="router-link" to="LoginEmail">
        <BtnGlobal label="Login" class="button-login" />
      </router-link>
      <router-link id="router-link" to="/DadosDeContato">
        <BtnGlobal label="Abra sua conta" class="button-Abra-Sua-Conta" />
      </router-link>
    </div>
  </nav>
</template>


<script>
import BtnGlobal from "./BtnGlobal.vue";

export default {
  name: "NavBar",
  components: {
    BtnGlobal,
  },

  data() {
    return {
      LogoWarren: "/img/ic-warren.png",
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
  position: relative;
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;

  background-color: #222;
}
.center {
  width: 1180px;
  min-width: 500px;
  max-width: 1180px;
  height: 56px;

  margin: 0px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
#router-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

img {
  width: auto;
  height: 29px;

  margin-right: 10px;
}

.ic-angleDown {
  margin-left: 5px;
}

li,
button,
a {
  font-size: 14px;
  font-weight: bold;
  padding: 1.9% 4%;

  display: flex;
  text-decoration: none;
  cursor: pointer;
  color: white;
}

a:hover,
li:hover {
  color: #ed2f5d;
  background-color: rgba(108, 108, 108, 0.133);
}

.button-login {
  padding: 10px;
  font-size: 14px;
  background: transparent;
  transition: 0.5s;
}

.button-login:hover {
  color: #ed2f5d;
  background-color: rgba(108, 108, 108, 0.133);
  box-shadow: 0px 0px 0px transparent;
}

.button-Abra-Sua-Conta {
  padding: 10px 20px;

  box-shadow: 0px 0px 0px transparent;
  background-color: #ed2f5d;
}
.button-Abra-Sua-Conta:hover {
  transition: .3s;
  transform: translateZ(0px) scale(1.1);
}

li {
  display: block;
  list-style-type: none;
}

li ul {
  position: absolute;
  display: none;
  visibility: hidden;
  background-color: white;
}

ul li:hover {
  background-color: rgba(23, 112, 255, 0.051);
  transition: 0.3s;
}

ul li:hover > ul,
ul li ul:hover {
  visibility: visible;
  display: block;
  opacity: 1;
}

p {
  display: flex;
}

ul li ul {
  width: 250px;
  height: auto;

  margin-top: 5px;

  padding: 10px 0px;
  border-radius: 10px;
}

ul li ul li p {
  padding: 10px 0px;
  color: #2f2f33;
}
</style>