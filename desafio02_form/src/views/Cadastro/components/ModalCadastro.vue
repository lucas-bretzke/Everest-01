<template>
  <BaseModal
    ref="baseModalRef"
    title="Confirmar informações de cadastro"
    rightButtonTitle="Confirmar"
    leftButtonTitle="Cancelar"
    @onLeftButtonClick="lefttButtonClick"
    @onRightButtonClick="rightButtonClick"
  >
    <template #CenterModal>
      <div class="analise-confirme-dados">
        <h5>Análise e confirm os dados inputados no cadastro.</h5>

        <button v-on:click="showDadosDeContato" class="btns-contato-pessoal">
          Contato
        </button>
        <button v-on:click="showDadosPessoais" class="btns-contato-pessoal">
          Pessois
        </button>
      </div>

      <div v-show="dados_de_contato" id="content-modal">
        <h4>Dados de contato</h4>

        <div class="linha-bottom-modal"></div>

        <div class="container-dados-de-contato">
          <div class="container-dados">
            <p>CPF</p>
            <span>{{ cpf }}</span>
          </div>

          <div class="container-dados">
            <p>Celular</p>
            <span>{{ cellphone }}</span>
          </div>
        </div>

        <div class="container-dados-de-contato">
          <div class="container-dados">
            <p>Nome</p>
            <span>{{ fullName }}</span>
          </div>
          <div class="container-dados">
            <p>Contato</p>
            <div>
              <div v-if="showEmailIcon" class="containt-icon-mssg">
                <font-awesome-icon class="icon" icon="fa-regular fa-envelope" />
                <span class="email">E-mail</span>
              </div>
              <div v-else class="containt-icon-mssg">
                <font-awesome-icon class="icon" icon="fa-brands fa-whatsapp" />
                <span>Whatsapp</span>
              </div>
            </div>
          </div>
        </div>
        <div class="container-dados-de-contato">
          <div class="container-dados">
            <p>Nascimento</p>
            <span>{{ birthdate }}</span>
          </div>
        </div>
      </div>

      <div v-show="dados_pessoais" id="content-modal">
        <h4>Dados Pessoais</h4>

        <div class="linha-bottom-modal"></div>

        <div class="container-dados-de-contato">
          <div class="container-dados">
            <p>País onde reside</p>
            <span>{{ country }}</span>
          </div>
          <div class="container-dados">
            <p>Endereço</p>
            <span>{{ address }}</span>
          </div>
        </div>

        <div class="container-dados-de-contato">
          <div class="container-dados">
            <p>Cidade</p>
            <span>{{ city }}</span>
          </div>
          <div class="container-dados">
            <p>Numero</p>
            <span>{{ number }}</span>
          </div>
        </div>
        <div class="container-dados-de-contato">
          <div class="container-dados">
            <p>Cep</p>
            <span>{{ cep }}</span>
          </div>
        </div>
      </div>
    </template>
  </BaseModal>
</template>


<script>
import BaseModal from "../../../components/BaseModal.vue";

export default {
  name: "ModalConfirmDados",
  components: {
    BaseModal,
  },
  data() {
    return {
      dados_de_contato: true,
      dados_pessoais: false,
    };
  },

  props: {
    fullName: String,
    cellphone: String,
    cpf: String,
    email: String,
    birthdate: String,
    country: String,
    city: String,
    cep: String,
    address: String,
    number: String,
    showEmailIcon: String,
  },
  emits: ["hfullName"],
  methods: {
    showDadosDeContato() {
      (this.dados_de_contato = true), (this.dados_pessoais = false);
    },
    showDadosPessoais() {
      (this.dados_de_contato = false), (this.dados_pessoais = true);
    },

    lefttButtonClick() {
      this.$emit("onLeftButtonClick");
    },
    rightButtonClick() {
      console.log("Recebimento do evento on-right-button-click");
    },
  },
};
</script>


<style scoped>
.analise-confirme-dados {
  margin: 0px 60px;
  margin-top: 40px;
}

.btns-contato-pessoal {
  padding: 10px 15px;
  margin-top: 10px;
  margin-right: 10px;

  border-radius: 50px;
  border: none;

  color: white;
  background-color: rgba(34, 34, 34, 0.897);
  cursor: pointer;
}

.btns-contato-pessoal:focus {
  font-weight: bold;
  color: black;
  background-color: white;
  border: 1px solid rgba(105, 105, 105, 0.542);
}

#content-modal {
  margin: 15px 60px 40px;
  padding: 30px;
  border: 1px solid rgba(105, 105, 105, 0.542);
  border-radius: 5px;
}

.linha-bottom-modal {
  border-bottom: 1px solid rgba(105, 105, 105, 0.542);
  width: 100%;
  margin: 10px 0px;
  margin-bottom: 15px;
}
.container-dados-de-contato {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container-dados {
  width: 50%;
  margin: 10px 0px;
  align-items: center;
}
.container-dados div {
  display: flex;
}
.container-dados div h4 {
  margin: 0px 5px;
}

p {
  font-size: 13px;
  margin-bottom: 2px;
}
span {
  font-size: 15px;
  font-weight: bold;
}
.containt-icon-mssg {
align-items: center;
}

.icon {
  width: 21px;
  height: 21px;
  margin-right: 7px;
}

h4 {
  font-size: 18px;
}
</style>