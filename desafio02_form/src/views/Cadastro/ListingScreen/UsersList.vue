<template>
  <main>
    <NavbarListagem />
    <HeaderListagem />
    <div class="container-listagem">
      <button class="cadastrar-usuario" v-on:click="getUser()">
        Cadastrar novo usuário
      </button>
      <div class="cpf-name">
        <h5 class="content-cpf">CPF</h5>
        <h5>NOME COMPLETO</h5>
      </div>
      <div id="renderResult">
        <ul v-for="user in dataUsers" :key="user.id">
          <li class="content-cpf">{{ user.cpf }}</li>
          <li class="content-name">{{ user.fullname }}</li>
          <li><font-awesome-icon icon="fa-solid fa-eye" class="ic-eye" /></li>
        </ul>
      </div>
      <div id="testandoP"></div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

import NavbarListagem from "../components/NavbarListagem.vue";
import HeaderListagem from "../components/HeaderListagem.vue";
// import "./teste.js";

export default {
  name: "UsersList",
  components: {
    NavbarListagem,
    HeaderListagem,
  },
  data() {
    return {
      dataUsers: [],
      url: "http://localhost:8080/api/users",
    };
  },
  methods: {
    async getUser() {
      try {
        const response = await axios.get(this.url);
        this.dataUsers = response.data.users;
        console.log(this.dataUsers);
      } catch (error) {
        console.log(error);
      }
    },
    async addNewUser() {
      // const newUser = {
      //   fullname: "Lucas bretzke",
      //   cpf: "124.472.219-75",
      //   phone: "80986882515",
      //   email: "hvlobos@mail.com",
      // };
      try {
        await axios.post(this.url, {
          fullname: "Lucas bretzke",
          cpf: "124.472.219-75",
          phone: "80986882515",
          email: "hvlobos@mail.com",
        });
        console.log(this.dataUsers);
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    await this.addNewUser();
    // await this.getUser();
  },
};
</script>

<style scoped>
section {
  display: flex;
}
.container-listagem {
  width: 750px;
  height: 400px;
  margin: 10px auto;
  border-bottom: 1px solid rgba(105, 105, 105, 0.542);
}
.cadastrar-usuario {
  position: static;
  margin: 10px 0px;
  margin-left: 556px;
  padding: 11px 24px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: rgba(224, 43, 87, 255);
  cursor: pointer;
}
.cadastrar-usuario:hover {
  transition: 0.5s;
  opacity: 0.6;
}
.cpf-name {
  display: flex;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  border-top: 1px solid rgba(105, 105, 105, 0.542);
  border-bottom: 1px solid rgba(105, 105, 105, 0.542);
}

h5 {
  font-weight: bold;
}

#renderResult {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
ul {
  display: flex;
  padding: 10px;
  align-items: center;
  /* border-top: 1px solid rgba(105, 105, 105, 0.542); */
  /* border-bottom: 1px solid rgba(105, 105, 105, 0.542); */
}
ul li {
  font-size: 13px;
  list-style-type: none;
}

.content-cpf {
  width: 260px;
}
.content-name {
  width: 450px;
}

.ic-eye {
  width: 17px;
  height: 17px;
  padding: 2px;
  cursor: pointer;
}
.ic-eye:hover {
  width: 18px;
  box-shadow: 3px 3px 3px solid red;
}
</style>