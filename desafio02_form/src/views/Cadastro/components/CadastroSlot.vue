<template>
  <div>
    <nav id="navbar-cadastro">
      <img
        id="seta-direcional-esquerda"
        src="/img/icon2.png"
        :onClick="previousPage"
      />
      <h4 id="title-nav">FORMULÁRIO</h4>
    </nav>

    <main>
      <div id="center" class="centralizar-button">
        <slot name="Center" />
        <button id="continuar-button"  :onClick="nextPage">Continuar</button>
      </div>

      <img id="img-de-cadastro" :src="ImgDeCadastro" />
    </main>
  </div>
</template>

<script>

export default {
  name: "CadastroSlot",
  components: {
  },

  props: {
    previousPageUrl: String,
    nextPageUrl: String,
    defaultProgressionBarState: Number,
  },
  methods: {
    nextPage: function () {
      this.$router.push(this.nextPageUrl);
    },
    previousPage: function () {
      this.$router.push(this.previousPageUrl);
    },
  },
  data() {
    return {
      ImgDeCadastro: "/img/img-tela-cadastro.png",
    };
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

#continuar-button {
  width: 100px;
  padding: 10px;
  margin: 0px 38%;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #ed2f5d;
  cursor: pointer;
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