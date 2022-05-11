<template>
  <CadastroSlot
    previousPageUrl="DadosDeContato"
    nextPageUrl="CadastroFinalizado"
    :current-state="2"
  >
    <template #Center>
      <form id="conteudo-principal">
        <ProgressionBar :current-state="2" />

        <h1>Dados pessoais</h1>

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

        <div class="container-inputs">
          <label id="label-numero" for="numero">Número</label>
          <input type="text" placeholder="Digite seu número" />
        </div>

        <BtnGloobal label="Continuar" id="continuar-button" v-on:click="true" />

        <transition name="fade" appear>
          <div class="modal-overlay" v-if="showModal" v-on:click="false"></div>
        </transition>
      </form>
    </template>
  </CadastroSlot>
</template>

<script>
import ProgressionBar from "../../components/ProgressionBar.vue";
import CadastroSlot from "./components/CadastroSlot";
import BtnGloobal from "../../components/BtnGloobal.vue";

export default {
  name: "DadosPessoais",
  components: {
    ProgressionBar,
    CadastroSlot,
    BtnGloobal,
  },
  data() {
    return {
      ImgDeCadastro: "/img/img-tela-cadastro.png",

      showModal: true,
    };
  },
};
</script>


<style scoped>

h1 {
  margin: 35px 0px;
}

p {
  font-size: 12px;
  margin-bottom: 20px;
}

#continuar-button {
  margin: 50px auto;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.444);
  transition: .5s;
}

#continuar-button:hover {
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.444);
}

/*-----------------------------------------------*/
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>