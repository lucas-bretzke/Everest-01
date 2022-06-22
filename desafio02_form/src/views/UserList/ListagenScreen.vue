<template>
  <div>
    <div class="nav-container">
      <font-awesome-icon icon="fa-solid fa-arrow-left" class="ic-return" />
      <h5>CADASTRO DE USUÁRIO</h5>
    </div>
    <header>
      <div class="center">
        <button :style="btn01" @click="show_register">CADASTRO</button>
        <button :style="btn02" @click="show_userList">LISTAGEM</button>
      </div>
    </header>

    <section>
      <UsersList v-show="show_UsersList" />
      <RegisterUser v-show="show_Register" />
    </section>
  </div>
</template>

<script>
import UsersList from "./components/UsersList.vue";
import RegisterUser from "./components/Register.vue";

export default {
  name: "ListagenScreen",
  components: {
    UsersList,
    RegisterUser,
  },
  data() {
    return {
      show_UsersList: true,
      show_Register: false,
    };
  },
  methods: {
    show_userList() {
      (this.show_UsersList = true), (this.show_Register = false);
    },
    show_register() {
      (this.show_Register = true), (this.show_UsersList = false);
    },
  },
computed: {
       btn01() {
      return {
        border:  this.show_Register ? " 3px solid #2f2f33;" : "transparent",
        color: this.show_UsersList ? "rgba(108, 108, 108, 0.782)" : " #2f2f33" 
      };
    },
    btn02() {
      return {
          bottom:  this.show_UsersList  ? " 3px solid #2f2f33;" : "transparent",
          color: this.show_Register ?  "rgba(108, 108, 108, 0.782)" :  " #2f2f33" 

      };
    },
}
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

/* button:focus {
  color: #2f2f33;
  border-bottom: 3px solid #2f2f33;
} */
</style>