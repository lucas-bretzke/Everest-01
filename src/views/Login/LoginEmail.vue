<template>
  <LoginSlot
    label="E-mail"
    Button="Continuar"
    nextPageUrl="/LoginPassword"
    textBtnLink="AINDA NÃO SOU CLIENTE"
    :linkBtn="cadastrar"
  >
    <template #CenterRightLogin>
      <div class="container-input-icon">
        <BtnReturn previousPageUrl="/HomeView" />

        <font-awesome-icon icon="fa-regular fa-envelope" class="ic-email" />
        <input
          class="input-email-senha"
          type="E-mail"
          v-model="email"
          placeholder="Informe seu e-mail"
        />
      </div>
    </template>
  </LoginSlot>
</template>
 


<script>
import LoginSlot from "../Login/component/LoginSlot.vue";
import BtnReturn from "../../components/BtnReturn";

export default {
  name: "LoginEmail",
  components: {
    LoginSlot,
    BtnReturn,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    cadastrar() {
      this.$router.push("/DadosDeContato");
    },
  },
};
</script>


