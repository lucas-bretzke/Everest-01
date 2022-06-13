<template >
  <CadastroSlot
    previousPageUrl="DadosDeContato"
    nextPageUrl="CadastroFinalizado"
    :current-state="2"
    @onEmailSmsIcon="emailSmsIcon"
  >
    <template #Center>
      <form id="conteudo-principal">
        <ProgressionBar :current-state="2" />

        <h2>Dados pessoais</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis
          reprehenderit consequatur ad.
        </p>
        <div id="container-global-inputs">
          <div class="container-inputs">
            <label for="pais one reside">País onde reside</label>
            <input
              v-model="country"
              required
              type="email"
              placeholder="Digite seu E-mail"
            />

            <label for="Cep">Cep</label>
            <input v-model="cep" name="cpf" placeholder="Cpf" />
          </div>

          <div class="container-inputs">
            <label for="Cidade">Cidade</label>
            <input
              v-model="city"
              required
              type="text"
              placeholder="Confirmar e-mail"
            />

            <label id="" for="nome">Endereço</label>
            <input
              v-model="address"
              required
              type="text"
              placeholder="celular"
            />
          </div>
        </div>
        <div class="input-numero-tel">
          <label id="label-numero" for="numero">Número</label>
          <input
            v-model="number"
            required
            type="text"
            placeholder="Digite seu número"
          />
        </div>
      </form>

      <button
        id="continuar-button"
        v-on:click="
          showModal();
          checkFrom();
        "
      >
        Continuar
      </button>
      <ModalCadastro
        v-show="show_modal"
        @onLeftButtonClick="closeModal()"
        :fullName="fullName"
        :cellphone="cellphone"
        :cpf="cpf"
        :email="email"
        :birthdate="birthdate"
        :country="country"
        :city="city"
        :cep="cep"
        :address="address"
        :number="number"
        :showEmailIcon="checkboxEmail"
        :style="modalOpacity"
      >
      </ModalCadastro>
    </template>
  </CadastroSlot>
</template>

<script>
import ProgressionBar from "../../components/ProgressionBar.vue";
import CadastroSlot from "./components/CadastroSlot.vue";
import ModalCadastro from "./components/ModalCadastro.vue";
import { required } from "@vuelidate/validators";

export default {
  name: "DadosPessoais",
  components: {
    ProgressionBar,
    CadastroSlot,
    ModalCadastro,
  },

  data() {
    return {
      // checked: true,
      ImgDeCadastro: "/img/img-tela-cadastro.png",
      show_modal: false,

      fullName: this.$route.params.toSendDice[0],
      email: this.$route.params.toSendDice[1],
      cpf: this.$route.params.toSendDice[2],
      cellphone: this.$route.params.toSendDice[3],
      birthdate: this.$route.params.toSendDice[4],
      checkboxEmail: this.$route.params.toSendDice[5],
    };
  },

  validations() {
    return {
      country: { required },
      cep: { required },
      city: { required },
      address: { required },
      number: { required },
    };
  },
  methods: {
    created() {
      this.$watch(
        () => this.$route.params,
        () => {
          this.fetchData();
        },
        { immediate: true }
      );
    },
    showModal() {
      if (
        this.country &&
        this.cep &&
        this.city &&
        this.address &&
        this.number
      ) {
        this.show_modal = true;
      }
    },
    closeModal() {
      this.show_modal = false;
    },
  },
};
</script>


<style scoped>
h2 {
  margin: 15px 0px;
}

p {
  font-size: 12px;
  margin-bottom: 10px;
}

#continuar-button:hover {
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.444);
}

.input-numero-tel {
  margin-top: 5px;
}

.modal {
  width: 470px;
  height: auto;

  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  border-radius: 5px;
  border: 1px solid rgba(105, 105, 105, 0.77);
  background-color: white;
  box-shadow: 2px 2px 5px rgb(75, 75, 75);
  z-index: 2;
}
</style>