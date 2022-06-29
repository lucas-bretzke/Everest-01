<template>
  <main>
    <nav id="navbar-cadastro">
      <font-awesome-icon
        icon="fa-solid fa-arrow-left"
        v-on:click="previousPage"
        class="ic-arrow-left"
      />
      <h4 id="title-nav">FORMULÁRIO</h4>
    </nav>

    <section>
      <div id="center">
        <slot name="Center" />
        <!-- <button id="continuar-button" v-on:click="nextPage">Continuar</button> -->
      </div>

      <img
        id="img-de-cadastro"
        :src="ImgDeCadastro"
        alt="Imagem de uma mulher segurando um celular"
      />
    </section>
  </main>
</template>

<script>
export default {
  name: "CadastroSlot",

  props: {
    previousPageUrl: {
      type: String,
    },
    nextPageUrl: {
      type: String,
    },
    defaultProgressionBarState: {
      type: Number,
    },
  },

  data() {
    return {
      ImgDeCadastro: "/img/img-tela-cadastro.png",
    };
  },
  methods: {
    nextPage () {
      this.$router.push(this.nextPageUrl);
    },
    previousPage() {
      this.$router.push(this.previousPageUrl);
    },
  },
};
</script>




<style scoped>
main {
  width: 100vw;
  height: 100vh;

  max-width: 100vw;
  max-height: 100vh;

  position: fixed;
  box-sizing: border-box;
}
#center {
  max-height: 100vh;
  align-items: center;
  margin: 0px auto;
}

#navbar-cadastro {
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;

  background-color: #ed2f5d;
}

.ic-arrow-left {
  width: 22px;
  height: 22px;

  padding: 5px;
  margin-left: 10px;

  border-radius: 50%;
  cursor: pointer;
}
.ic-arrow-left:hover {
  background-color: rgba(255, 255, 255, 0.32);
}

#title-nav {
  margin-left: 44%;
  color: #fff;
}

section {
  display: flex;
}
.direction {
  flex-direction: column;
}

#img-de-cadastro {
  width: auto;
  height: calc(100vh - 44px);

  padding: 0px;
  margin: 0px;
  margin-right: 0px;
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

#conteudo-principal {
  max-width: 450px;
  min-width: 450px;
  max-height: calc(100vh - 44px);

  padding: 20px;

  display: flex;
  flex-direction: column;
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