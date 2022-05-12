<template>
  <CadastroSlot
    previousPageUrl="DadosDeContato"
    nextPageUrl="CadastroFinalizado"
    :current-state="2"
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
            <input type="email" name="nome" placeholder="Digite seu E-mail" />

            <label for="Cep">Cep</label>
            <input type="" name="cpf" placeholder="Cpf" />
          </div>

          <div class="container-inputs">
            <label for="Cidade">Cidade</label>
            <input type="text" name="nome" placeholder="Confirmar e-mail" />

            <label id="" for="nome">Endereço</label>
            <input type="text" name="nome" placeholder="celular" />
          </div>
        </div>
        <div class="input-numero-tel">
          <label id="label-numero" for="numero">Número</label>
          <input type="text" placeholder="Digite seu número" />
        </div>
      </form>

      <button id="continuar-button" v-on:click="showModal">Continuar</button>
      <ModalConfirmDadosSlot v-show="show_modal" class="modal"> 

        
      </ModalConfirmDadosSlot>
    </template>
  </CadastroSlot>
</template>

<script>
import ProgressionBar from "../../components/ProgressionBar.vue";
import CadastroSlot from "./components/CadastroSlot";
import ModalConfirmDadosSlot from "./components/ModalSlot.vue";

export default {
  name: "DadosPessoais",
  components: {
    ProgressionBar,
    CadastroSlot,
    ModalConfirmDadosSlot,
  },
  data() {
    return {
      ImgDeCadastro: "/img/img-tela-cadastro.png",
      show_modal: false,
    };
  },
  methods: {
    showModal() {
      this.show_modal = true;
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
  width: 450px;
  height: 550px;

  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  flex-direction: column;

  border-radius: 5px;
  border: 1px solid #444;
  background-color: white;
}
</style>