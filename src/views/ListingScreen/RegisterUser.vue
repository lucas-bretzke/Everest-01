<template>
  <div>
    <TopbarListagem :btn1="true" />

    <form action="" v-on:submit.prevent="checkForm" class="form-container">
      <div class="container-titles">
        <h2>Dados de contato</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit, Mattis
          semper dolor, elit pretiun nulla.
        </p>
      </div>
      <div>
        <label for="fullName">Nome Completo</label>
        <input
          v-model="fullName"
          type="text-box"
          placeholder="Digite seu nome"
        />
      </div>

      <div id="container-global-inputs">
        <div class="container-inputs">
          <label for="email">E-mail</label>
          <input
            v-model="email"
            name="email"
            type="text-box"
            placeholder="Digite seu E-mail"
          />
          <font-awesome-icon icon="fa-regular fa-envelope" class="ic-email" />

          <label for="cpf">CPF</label>
          <input
            id="cpfInput"
            v-mask="'###.###.###-##'"
            v-model="cpf"
            type="text-box"
            placeholder="Digite seu Cpf aqui"
            @keyup.enter="verificarCpf"
          />
          <div v-show="!pendente" :style="messageType" class="msg-error-cpf">
            <span v-if="valido"></span>
            <span v-else>CPF inválido </span>
          </div>
        </div>

        <div class="container-inputs">
          <label for="confirmEml">Confirmar e-mail</label>
          <input
            v-model="confirmEmail"
            name="confirmEml"
            type="text-box"
            placeholder="E-mail aqui"
          />
          <font-awesome-icon icon="fa-regular fa-envelope" class="ic-email" />

          <label for="celular">Telefone</label>
          <input
            type="text-box"
            v-mask="'(##) ####-####'"
            v-model="cellphone"
            placeholder="Digite seu numero aqui"
          />
        </div>
      </div>

      <div id="calendario">
        <label>Data de nascimento</label>
        <input v-model="birthDate" type="date" />
      </div>

      <div class="opcionais-container">
        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
        <h5>Mattis semper dolor, elit pretiun nulla.</h5>

        <div class="checkbox-container">
          <input v-model="checkboxEmail" class="checkbox" type="checkbox" />
          <span>Email ou SMS</span>
        </div>

        <div class="checkbox-container">
          <input class="checkbox" type="checkbox" />
          <span>Whatsapp</span>
        </div>
      </div>
    </form>
    <footer>
      <div class="container-buttons">
        <button
          class="LeftButton"
          v-on:click="
            verificarCpf();
            checkForm();
          "
        >
          Salvar
        </button>
        <button class="RighttButton">Voltar</button>
      </div>
    </footer>
    <div class="container-errors">
      <li v-for="error in errors" :key="error.$uid">{{ error }}.</li>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TopbarListagem from "./components/TopbarListagem.vue";
import { validar } from "../../utils/helpers";

export default {
  name: "RegisterUser",
  components: {
    TopbarListagem,
  },
  data() {
    return {
      fullName: "",
      email: "",
      confirmEmail: "",
      cellphone: "",
      birthDate: "",
      cpf: "",
      checkboxEmail: false,
      errors: [],

      pendente: true,
      valido: false,
      url: "http://localhost:8080/api/users",
    };
  },
  computed: {
    messageType() {
      return {
        color: this.valido ? "green" : "red",
      };
    },
  },

  methods: {
    checkForm() {
      this.errors = [];

      if (!this.fullName) {
        this.errors.push("O nome deve ser preenchido");
      }
      if (this.email != this.confirmEmail) {
        this.errors.push("Os campos de E-mail são diferentes");
      }
      if (!this.cellphone) {
        this.errors.push("O numero deve ser preenchido");
      }
      if (!this.birthDate) {
        this.errors.push("O campo de data deve ser preenchido");
      }
      if (
        this.fullName &&
        this.email &&
        this.cellphone &&
        this.birthDate &&
        this.email === this.confirmEmail &&
        this.valido
      ) {
        this.addNewUser();
        alert("Usuário cadastrado com Sucesso");
        this.$router.push({ name: "UsersList" });
      }
    },

    verificarCpf() {
      this.valido = validar(this.cpf);
      this.pendente = false;
    },

    async addNewUser() {
      const payload = {
        fullname: this.fullName,
        cpf: this.cpf,
        cellphone: this.cellphone,
        email: this.email,
        confirmEmail: this.confirmEmail,
        birthDate: this.birthDate
      };
      try {
        await axios.post(this.url, payload);
      } catch (error) {
        console.log(error);
      }
    },
  },
};

</script>

<style scoped>
.form-container {
  width: 650px;
  margin: 10px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.container-titles {
  margin-bottom: 10px;
}
#calendario {
  width: 48%;
  margin: 15px 0px;
}
#container-global-inputs {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.container-inputs {
  width: 48%;
  display: flex;
  flex-direction: column;
}
label {
  width: 100px;
  font-size: 10px;
  font-weight: bold;
  margin-top: 15px;
  margin-left: 5px;
  margin-bottom: 0px;
  padding: 0px 2px;
  background-color: white;
  position: relative;
}

input {
  width: 100%;
  padding: 11px;
  border-radius: 4px;
  border: 1px solid black;
}

.checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: 0px;
}

.checkbox-container .checkbox {
  width: auto;
  margin: 5px 0px;
}

.checkbox-container span {
  font-size: 12px;
  margin-left: 10px;
}

.ic-email {
  position: fixed;
  width: 18px;
  height: 18px;
  margin-left: 250px;
  margin-top: 38px;
}

h1 {
  font-size: 35px;
  padding: 20px 0px;
  color: #222;
}

h2 {
  margin-bottom: 10px;
  font-size: 20px;
  color: #222;
}

h5 {
  font-size: 12px;
  margin-bottom: 13px;
  color: #222;
}

p {
  font-size: 12px;
  margin: 5px 0px;
}

.container-errors {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 21px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: #444;
}
.container-errors li {
  margin: 6px 2px;
  padding: 6px 3px;
  font-size: 13px;
  color: red;
  border-radius: 5px;
  border-left: 2px solid black;
  border-right: 2px solid black;
  list-style-type: none;
}
.msg-error-cpf {
  font-size: 12px;
}
footer {
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(105, 105, 105, 0.542);
  border-bottom: 1px solid rgba(105, 105, 105, 0.542);
}
.container-buttons {
  margin: 8px auto;
}

button {
  position: absolute;
  padding: 11px 27px;
  margin: 0px 10px;
  font-weight: bold;
  position: relative;
  border-radius: 5px;
  border: none;
  margin: 5px;
  cursor: pointer;
  transition: 0.3s;

  background-color: transparent;
}
.LeftButton {
  border-radius: 5px;
  color: white;
  background-color: #ed2f5d;
}
.LeftButton:hover {
  transform: translateZ(10px) scale(1.1);
}
.RighttButton {
  color: #ed2f5d;
  background-color: white;
}
.RighttButton:hover {
  background-color: rgba(92, 92, 92, 0.171);
  opacity: 0.7;
}
</style>