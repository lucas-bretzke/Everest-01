<template>
  <main v-show="modalIsOpen" class="modal">
    <div class="nav-bar-model">
      <h5>{{ title }}</h5>
      <button class="btn-fechar-modal" v-on:click="onLeftButtonClick">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
    </div>

    <slot name="CenterModal" />

    <div class="btns-saida-modal">
      <button class="left-button" v-on:click="onLeftButtonClick">
        {{ leftButtonTitle }}
      </button>

      <router-link to="CadastroFinalizado">
        <button class="right-button" v-on:click="onRightButtonClick">
          {{ rightButtonTitle }}
        </button>
      </router-link>
    </div>
  </main>
</template>


<script>
export default {
  name: "BaseModal",
  props: {
    leftButtonTitle: {
      type: String,
    },
    rightButtonTitle: {
      type: String,
    },
    title: { type: String },
  },
  data() {
    return {
      modalIsOpen: true,
    };
  },
  emits: ["onLeftButtonClick", "onRightButtonClick"],
  methods: {
    onLeftButtonClick() {
      this.$emit("onLeftButtonClick");
    },
    onRightButtonClick() {
      this.$emit("onRightButtonClick");
    },
  },
};
</script>


<style scopes>
.nav-bar-model {
  width: 100%;
  height: 50px;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid rgba(105, 105, 105, 0.542);
}

.nav-bar-model h5 {
  font-size: 13px;
}

.btn-fechar-modal {
  position: fixed;
  margin-left: 85%;

  font-size: 22px;
  font-weight: bold;
  color: rgb(95, 95, 95);

  border: none;
  background-color: transparent;
  cursor: pointer;
}
.btn-fechar-modal:hover {
  font-size: 24px;
}

.btns-saida-modal {
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 1px solid rgba(105, 105, 105, 0.542);
}

.left-button {
  padding: 15px 20px;
  margin: 0px 10px;

  font-weight: bold;

  border: none;
  border-radius: 5px;

  color: #ed2f5d;
  background-color: white;

  transition: 0.5s;
  cursor: pointer;
}
.left-button:hover {
  background-color: rgba(92, 92, 92, 0.171);
  opacity: 0.7;
}

.right-button {
  padding: 15px 20px;
  margin: 0px 10px;

  font-weight: bold;

  border: none;
  border-radius: 5px;

  color: white;
  background-color: #ed2f5d;

  transition: 0.3s;
  cursor: pointer;
}

.right-button:hover {
  padding: 17px 22px;
}
</style>