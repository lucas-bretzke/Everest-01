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
              id="cpfInput"
              v-mask="'###.###.###-##'"
              v-model="cpf"
              @keyup.enter="verificarCpf"
              type="text-box"
              placeholder="Digite seu Cpf aqui"
            />

            <div v-show="!pendente" :style="messageType" class="msg-error-cpf">
              <span v-if="valido"> CPF valido, parabens </span>
              <span v-else>CPF inválido </span>
            </div>
          </div>

          <div class="container-inputs">
            <label for="confirmEml">Confirmar e-mail</label>
            <input
              v-model="confirmEml"
              name="confirmEml"
              type="text-box"
              placeholder="E-mail aqui"
            />
            <label for="celular">Telefone</label>
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
        <button v-on:click="verificarCpf" id="continuar-button">
          Continuar
        </button>
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
      celular: null,
      dataDeNascimento: null,
      errors: [],

      cpf: null,
      pendente: true,
      valido: false,
    };
  },
  computed: {
    messageType() {
      return {
        color: this.valido ? "green" : "red",
      };
    },
  },
  validations() {
    return {
      fullName: { required },
      email: { required, email },
      confirmEml: { required, confirmEml: sameAs(this.email) },
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
      if (!this.cpf) {
        this.errors.push("CPF não foi preenchido");
      }
      if (!this.celular) {
        this.errors.push("Numero de Tel não foi preenchido");
      }
      if (!this.dataDeNascimento) {
        this.errors.push("Data de nascimento não foi preenchida");
      }
      if (this.email != this.confirmEml) {
        this.errors.push("Os campos de E-mail são diferentes");
      }
      if (this.cpf != this.valido) {
        this.errors.push("CPF inválido");
      }
      if (
        this.fullName &&
        this.email &&
        this.cpf &&
        this.celular &&
        this.dataDeNascimento &&
        this.email === this.confirmEml &&
        this.cpf === this.valido
      ) {
        this.$router.push({ name: "DadosPessoais" });
      }
    },

    verificarCpf() {
      this.valido = validar(this.cpf);
      this.pendente = false;
    },
  },
};

const validar = (cpf) => checkAll(prepare(cpf));

const notDig = (i) => ![".", "-", " "].includes(i);
const prepare = (cpf) => cpf.trim().split("").filter(notDig).map(Number);
const is11Len = (cpf) => cpf.length === 11;
const notAllEquals = (cpf) => !cpf.every((i) => cpf[0] === i);
const onlyNum = (cpf) => cpf.every((i) => !isNaN(i));

const calcDig = (limit) => (a, i, idx) => a + i * (limit + 1 - idx);
const somaDig = (cpf, limit) => cpf.slice(0, limit).reduce(calcDig(limit), 0);
const resto11 = (somaDig) => 11 - (somaDig % 11);
const zero1011 = (resto11) => ([10, 11].includes(resto11) ? 0 : resto11);

const getDV = (cpf, limit) => zero1011(resto11(somaDig(cpf, limit)));
const verDig = (pos) => (cpf) => getDV(cpf, pos) === cpf[pos];

const checks = [is11Len, notAllEquals, onlyNum, verDig(9), verDig(10)];
const checkAll = (cpf) => checks.map((f) => f(cpf)).every((r) => !!r);
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

.msg-error-cpf {
  font-size: 12px;
}
</style>