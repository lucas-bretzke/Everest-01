<template>
  <Cadastro
    previousPageUrl="HomeView"
    nextPageUrl="DadosPessoais"
    :current-state="1"
  >
    <template #Center>
      <section class="conteudo-principal">
        <ProgressionBar :currentState="1" />
        <h1>Seja bem-vindo</h1>
        <h2>Dados de contato</h2>

        <div class=".container-global-inputs">
          <label for="nome">Nome Completo</label>
          <input type="text-box" placeholder="Digite seu nome" />
        </div>

        <div class="container-global-inputs">
          <div class="container-inputs">
            <label for="email">E-mail</label>
            <input type="text" name="emails" placeholder="Digite seu E-mail" />

            <label for="cpf">CPF</label>
            <input id="strCPF" type="text" placeholder="<enter> para validar" />
          </div>

          <div class="container-inputs">
            <label for="nome">Confirmar e-mail</label>
            <input type="text" name="confirmEmails" placeholder="E-mail aqui" />
            <label for="tel">Celular</label>
            <input type="text" mask="'####-###'" v-model="myInputModel" />
          </div>
        </div>

        <div id="calendario">
          <label for="">Data de nascimento</label>
          <input type="date" />
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
      </section>
    </template>
  </Cadastro>
</template>

<script>
import ProgressionBar from "../../components/ProgressionBar.vue";
import Cadastro from "./components/Cadastro";

export default {
  name: "DadosDeContato",
  components: {
    ProgressionBar,
    Cadastro,
  },
  data() {
    return {
      ImgDeCadastro: "/img/img-tela-cadastro.png",
      myInputModel: "",
    };
  },
  props: {},
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