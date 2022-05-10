<template>
  <main id="main--login">
    <div class="container-logo-login">
      <img :src="logo" class="logo-warren-login" />
    </div>

    <div class="content">
      <h2 class="title-login">Acessar minha conta</h2>
      <label class=".label-Email-Password" for="E-mail">Password</label>
      <div class="container-input-icon">
        <h3>SN</h3>
        <input
          class="input-email-senha"
          type="e-mail"
          placeholder="Informe sua senha"
        />
      </div>
      <button class="button-continuar-login">ENTRAR</button>

      <div id="linha-pg-login"></div>
    </div>
  </main>
</template>


<script>
export default {
  name: "LoginPassword",

  data() {
    return {
      logo: "/img/logo-warren-loginView.png",
    };
  },
};
</script>