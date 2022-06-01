<template>
  <main id="main--login">
    <btnReturn :route="HomeView" />
    <div class="container-logo-login">
      <img :src="logo" class="logo-warren-login" />
    </div>

    <div class="content">
      <h2 class="title-login">Acessar minha conta</h2>
      <label class=".label-Email-Password" for="E-mail">E-mail</label>

      <div class="container-input-icon">
        <font-awesome-icon icon="fa-regular fa-envelope" class="ic-email" />
        <input
          class="input-email-senha"
          type="e-mail"
          placeholder="Informe o e-mail"
        />
      </div>

      <router-link to="LoginPassword">
        <button class="button-continuar-login">Continuar</button>
      </router-link>

      <div id="linha-pg-login"></div>

      <router-link id="router-link-login" to="DadosdeContato">
        <button class="button-cadastrar-login">AINDA NÃO SOU CLIENTE</button>
      </router-link>
    </div>
  </main>
</template>


<script>
import btnReturn from "../../components/btnReturn";

export default {
  name: "LoginEmail",
  components: {
    btnReturn,
  },
  data() {
    return {
      logo: "/img/logo-warren-loginView.png",
    };
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
  margin-bottom: 10px;
}
.label-Email-Password {
  margin: 10px 0px;
  font-size: 14px;
  font-weight: normal;
}

.container-input-icon {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  border: solid 1px black;
  border-radius: 5px;
  background-color: rgba(238, 238, 238, 0.767);
}

.input-email-senha {
  width: 100%;

  padding: 20px 10px;
  font-size: 18px;
  border: none;

  outline: none;
  background-color: transparent;
}

.ic-email {
  width: 21px;
  height: 21px;
}

.button-continuar-login {
  width: 100%;
  padding: 27px 32px;

  margin-top: 45px;

  font-size: 17px;
  font-weight: bold;
  color: rgb(255, 255, 255);

  border: none;
  border-radius: 10px;

  cursor: pointer;
  background-color: #ed2f5d;
}

.button-continuar-login:hover {
  transition: 0.2s;
  font-size: 18px;
  padding: 29px 34px;
}

.button-cadastrar-login {
  width: 170px;
  font-weight: bold;

  border: none;
  cursor: pointer;
  background-color: transparent;
}
#router-link-login {
  margin: 0px auto;
  margin-top: 70px;
}

#linha-pg-login {
  margin-top: 25px;
  border-bottom: 1px solid rgb(205, 205, 205);
}
</style>