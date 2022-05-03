<template>
  <div>
    <nav id="navbar-cadastro">
      <img
        id="seta-direcional-esquerda"
        src="/img/icon2.png"
        v-on:click="previousPage"
      />
      <h4 id="title-nav">FORMULÁRIO</h4>
    </nav>

    <main>
      <div id="center" class="centralizar-button">
        <slot name="Center" />
        <button id="continuar-button" v-on:click="nextPage">Continuar</button>
      </div>

      <img id="img-de-cadastro" :src="ImgDeCadastro" />
    </main>
  </div>
</template>

<script>
export default {
  name: "CadastroSlot",

  props: {
    previousPageUrl: String,
    nextPageUrl: String,
    defaultProgressionBarState: Number,
  },

  data() {
    return {
      ImgDeCadastro: "/img/img-tela-cadastro.png",
    };
  },
  methods: {
    nextPage: function () {
      this.$router.push(this.nextPageUrl);
    },
    previousPage: function () {
      this.$router.push(this.previousPageUrl);
    },
  },
};
</script>

<style scoped>
#navbar-cadastro {
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;

  background-color: #ed2f5d;
}

#seta-direcional-esquerda {
  width: 20px;
  height: auto;
  margin-left: 10px;

  cursor: pointer;
}

#title-nav {
  margin-left: 44%;
  color: #fff;
}

main {
  display: flex;
}
.direction {
  flex-direction: column;
}
.centralizar-button {
  align-items: center;
  justify-content: center;
}

#img-de-cadastro {
  width: auto;
  height: calc(100vh - 44px);

  padding: 0px;
  margin: 0px;
  margin-right: 0px;
}
</style>