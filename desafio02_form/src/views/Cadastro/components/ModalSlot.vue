<template>
  <main>
    <div class="nav-bar-model">
      <h5>Confirmar informações de cadastro</h5>
      <button class="btn-fechar-modal">X</button>
    </div>
    <div class="analise-confirme-dados">
      <h5>Análise e confirm os dados inputados no cadastro.</h5>
      <button class="btns-contato-pessoal">Contato</button>
      <button class="btns-contato-pessoal">Pessoal</button>
    </div>

    <slot name="CenterModaCadastro" />

    <div class="btns-saida-modal">
      <button class="btn-cancelar" v-on:click="closeModal">Cancelar</button>

      
      <button class="btn-confirmar" v-on:click="closeModal">Confirmar</button>
    </div>
  </main>
</template>


<script>
export default {
  name: "ModalConfirmDados",
};
</script>


<style scopes>
.nav-bar-model {
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #444;
}

.btns-contato-pessoal {
  padding: 5px 10px;
  margin-right: 10px;

  border-radius: 50px;
  border: none;

  color: white;
  background-color: rgba(34, 34, 34, 0.897);
}

.btns-saida-modal {
  width: 100%;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 1px solid #444;
}
.btn-cancelar {
  padding: 10px 15px;
  margin: 0px 10px;

  font-weight: bold;

  border: none;
  border-radius: 5px;

  color: white;
  background-color: #ed2f5d;

  transition: 0.5s;
  cursor: pointer;
}
.btn-cancelar:hover {
  color: #ed2f5d;
  background-color: white;
}

.btn-confirmar {
  padding: 10px 15px;
  margin: 0px 10px;

  font-weight: bold;

  border: none;
  border-radius: 5px;

  color: white;
  background-color: #ed2f5d;

  transition: 0.3s;
  cursor: pointer;
}

.btn-confirmar:hover {
  padding: 12px 17px;
  box-shadow: 2px 2px 2px rgb(106, 106, 106);
}
</style>