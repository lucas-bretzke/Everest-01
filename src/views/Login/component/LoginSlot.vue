<template>
  <main id="main--login">
    <div class="container-logo-login">
      <img :src="logo" class="logo-warren-login" />
    </div>

    <div class="content">
      <h2 class="title-login">Acessar minha conta</h2>
      <label class="label-Email-Password" for="E-mail">{{ label }}</label>

      <slot name="CenterRightLogin" />

      <button class="button-continuar-login" v-on:click="nextPage">
        {{ Button }}
      </button>

      <div id="linha-pg-login"></div>

      <button class="button-cadastrar-login" v-on:click="linkBtn">
        {{ textBtnLink }}
      </button>
    </div>
  </main>
</template>


<script>
export default {
  name: "LoginSlot",
  components: {},
  props: {
    label: { type: String },
    Button: { type: String },
    nextPageUrl: { type: String },
    textBtnLink: { type: String },
    linkBtn: { type: String },
  },
  data() {
    return {
      logo: "/img/logo-warren-loginView.png",
    };
  },
  methods: {
    nextPage() {
      this.$router.push(this.nextPageUrl);
    },
  },
};
</script>


<style  scoped>
#main--login {
  display: flex;
}
.container-logo-login {
  width: 50%;
  height: 100vh;

  display: flex;

  background-color: #ed2f5d;
}
.logo-warren-login {
  width: 100%;
  max-width: 450px;

  margin: auto;
}
.content {
  width: 100%;
  max-width: 360px;

  display: flex;
  flex-direction: column;

  margin: auto;
}
.title-login {
  margin-bottom: 45px;
}
.label-Email-Password {
  font-size: 12px;

  position: fixed;
  margin-top: 59px;
  margin-left: 14px;
  padding: 5px;
  background-color: white;
}

.container-input-icon {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px 20px;

  border-radius: 5px;
  border: 1px solid rgb(205, 205, 205);
  background-color: transparent;
}
.input-email-senha {
  width: 100%;

  padding: 20px 10px;
  font-size: 18px;
  border: none;

  outline: none;
}

.button-continuar-login {
  width: 100%;
  padding: 22px 32px;

  margin-top: 35px;

  font-size: 17px;
  font-weight: bold;
  color: rgb(255, 255, 255);

  border: none;
  border-radius: 10px;

  cursor: pointer;
  transition: 0.4s;
  background-color: #ed2f5d;
}

.button-continuar-login:hover {
  opacity: 0.9;
  font-size: 18px;
  padding: 25px 34px;
}

#linha-pg-login {
  margin-top: 25px;
  border-bottom: 1px solid rgb(205, 205, 205);
}

.button-cadastrar-login {
  width: 170px;

  margin: 60px auto;

  font-weight: bold;
  font-size: 12px;

  border: none;
  cursor: pointer;
  background-color: transparent;
}

.ic-email {
  width: 21px;
  height: 21px;
}
</style>