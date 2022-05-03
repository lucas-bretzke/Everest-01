<template>
  <CadastroSlot
    previousPageUrl="/HomeView"
    nextPageUrl="DadosPessoais"
    :current-state="1"
  >
    <template #Center>
      <form
        action=""
        v-on:submit.prevent="checkForm"
        class="conteudo-principal"
      >
        <ProgressionBar :currentState="1" />
        <h1>Seja bem-vindo</h1>
        <h2>Dados de contato</h2>

        <div class=".container-global-inputs">
          <label for="fullName">Nome Completo</label>
          <input
            v-model="fullName"
            type="text-box"
            placeholder="Digite seu nome"
          />
        </div>

        <div class="container-global-inputs">
          <div class="container-inputs">
            <label for="email">E-mail</label>
            <input
              v-model="email"
              name="email"
              type="text-box"
              placeholder="Digite seu E-mail"
            />

            <label for="cpf">CPF</label>
            <input
              type="text-box"
              v-mask="'###.###.###-##'"
              v-model="cpf"
              placeholder="Digite seu Cpf aqui"
            />
          </div>

          <div class="container-inputs">
            <label for="confirmEml">Confirmar e-mail</label>
            <input
              v-model="confirmEml"
              name="confirmEml"
              type="text-box"
              placeholder="E-mail aqui"
            />
            <label for="celular">Celular</label>
            <input
              type="text-box"
              v-mask="'(##) ####-####'"
              v-model="celular"
              placeholder="Digite seu numero aqui"
            />
          </div>
        </div>

        <div id="calendario">
          <label>Data de nascimento</label>
          <input
            v-model="dataDeNascimento"
            v-mask="'##/##/####'"
            type="text-box"
            placeholder="Data:"
          />
        </div>

        <div id="container-errors">
          <li v-for="error in errors" :key="error.$uid">Error! {{ error }}.</li>
        </div>

        <div class="opcionais-container">
          <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
          <h5>Mattis semper dolor, elit pretiun nulla.</h5>

          <div class="checkbox-container">
            <input id="checkbox" type="checkbox" />
            <span>Email ou SMS</span>
          </div>

          <div class="checkbox-container">
            <input id="checkbox" type="checkbox" /> <span>Whatsapp</span>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          reprehenderit fugiat pariatur consectetur, quae nam est ratione
          voluptas debitis libero nesciunt!
        </p>
        <router-link to="DadosPessoais">
          <button v-on:click.prevent="checkForm" id="continuar-button">
            Continuar
          </button>
        </router-link>
      </form>
    </template>
  </CadastroSlot>
</template>

<script>
import ProgressionBar from "../../components/ProgressionBar.vue";
import CadastroSlot from "./components/CadastroSlot";

import useVuelidate from "@vuelidate/core";
import { required, email, sameAs } from "@vuelidate/validators";

export default {
  name: "DadosDeContato",
  components: {
    ProgressionBar,
    CadastroSlot,
  },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      ImgDeCadastro: "/img/img-tela-cadastro.png",
      fullName: null,
      email: null,
      confirmEml: null,
      cpf: null,
      celular: null,
      dataDeNascimento: null,
      errors: [],
    };
  },
  validations() {
    return {
      fullName: { required },
      email: { required, email },
      confirmEml: { required, sameAsEmail: sameAs(this.email) },
      cpf: { required },
      celular: { required },
      dataDeNascimento: { required },
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Formulário OK");
      } else {
        alert("Algo no formulário não corresponde aos requisitos");
      }
    },
    checkForm() {
      this.errors = [];
      if (!this.fullName) {
        this.errors.push("Nome não está preenchido");
      }
      if (!this.email) {
        this.errors.push("E-mail não está preenchido");
      }
      if (!this.confirmEml) {
        this.errors.push("Confirmar e-mail não está preenchido");
      }
      if (!this.cpf) {
        this.errors.push("CPF não foi preenchido");
      }
      if (!this.celular) {
        this.errors.push("Numero de Tel não foi preenchido");
      }
      if (!this.dataDeNascimento) {
        this.errors.push("Data de nascimento não foi preenchida");
      }
    },
  },
};
</script>



<style>
#seta-direcional-esquerda {
  width: 20px;
  height: auto;
  margin-left: 10px;
}
#navbar-cadastro {
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;

  background-color: #ed2f5d;
}

#voltar {
  border: none;

  color: #fff;
  background-color: transparent;
}

#title-nav {
  margin-left: 44%;

  color: #fff;
}

main {
  display: flex;
}

#center {
  align-items: center;
  margin: 0px auto;
}

.conteudo-principal {
  max-width: 450px;
  min-width: 450px;
  max-height: calc(100vh - 44px);

  padding: 20px;

  display: flex;
  flex-direction: column;
}

#img-de-cadastro {
  width: auto;
  height: calc(100vh - 44px);

  padding: 0px;
  margin: 0px;
  margin-right: 0px;
}

.container-global-inputs {
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
  margin-top: 15px;
  font-size: 10px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 11px;
  border-radius: 4px;
  border: 1px solid #222;
  outline: none;
}

#continuar-button {
  width: 100px;
  padding: 10px;
  margin: 10px 38%;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #ed2f5d;
  cursor: pointer;
}

#container-errors {
  width: 300px;

  margin-left: 440px;
  position: fixed;

  border-radius: 5px;
  background-color: rgb(203, 203, 203);
}

#container-errors li {
  padding: 5px;

  color: red;
  font-size: 12px;
}
</style>



<style  scoped>
#calendario {
  width: 48%;
  margin: 15px 0px 30px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.checkbox-container #checkbox {
  width: auto;
}

.checkbox-container span {
  font-size: 12px;
  margin-left: 10px;
}

h1 {
  font-size: 35px;
  padding: 20px 0px;
  color: #222;
}

h2 {
  margin-bottom: 20px;
  font-size: 20px;
  color: #222;
}

h5 {
  margin-bottom: 17px;
  color: #222;
}

p {
  font-size: 13px;
  margin: 10px 0px;
}
</style>