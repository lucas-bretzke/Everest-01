<template>
  <LoginSlot
    label="Password"
    Button="Entrar"
    nextPageUrl=""
    textBtnLink="ESQUECI MINHA SENHA"
  >
    <template #CenterRightLogin>
      <div class="container-input-icon">
        <BtnReturn previousPageUrl="/LoginEmail" />


        <span>{{email}}</span>
        <font-awesome-icon icon="fa-solid fa-lock" class="ic-lock" />

        <input class="input-email-senha" type="password" placeholder="Senha" />
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
};
</script>


