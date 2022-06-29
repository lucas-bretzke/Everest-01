<template>
  <section class="information-modal">
    <nav class="navbar-modal">
      <h4>Detalhes do usuário</h4>
      <button class="btn-ic-close" @click="closeModal">
        <font-awesome-icon icon="fa-solid fa-xmark" class="ic-close" />
      </button>
    </nav>

    <div class="contain-all-information">
      <div class="informations">
        <div class="information-content">
          <label>Cpf</label> <span>{{ objectUser.cpf }}</span>
        </div>
        <div class="information-content">
          <label>Nome completo</label>
          <span>{{ objectUser.fullname }}</span>
        </div>
        <div class="information-content">
          <label>Nascimento</label> <span>{{ objectUser.birthDate }}</span>
        </div>
      </div>

      <div class="informations">
        <div class="information-content">
          <label>Celular</label> <span>{{ objectUser.cellphone }}</span>
        </div>
        <div class="information-content">
          <label>Contato</label>
          <span>
            <p>
              <font-awesome-icon
                icon="fa-brands fa-whatsapp"
                class="ic-whatsapp"
              />
            </p>
            <p>Whatsapp</p>
          </span>
        </div>
        <div class="information-content">
          <label>Email</label>
          <span class="modal-email">{{objectUser.email}}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DetailsModal",
  props: {
    objectUser: { type: Object },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>


<style>
.information-modal {
  width: 450px;
  height: auto;
  flex-direction: column;

  border-radius: 10px;
  background-color: white;

  position: absolute;
  top: 45%;
  left: 50%;
  right: -50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 1px 1100px rgba(0, 0, 0, 0.239);
}
.navbar-modal {
  width: 100%;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;
}
.contain-all-information {
  margin: 20px;
  margin-top: 10px;
  padding: 40px;

  display: flex;
  justify-content: space-between;

  border: 2px solid rgba(211, 211, 211, 0.542);
  border-style: dashed;
}
.informations {
  width: 45%;
}
.information-content {
  margin: 15px 0px;
  display: flex;
  flex-direction: column;
}
.btn-ic-close {
  position: absolute;
  right: 20px;
  border: none;
  background-color: transparent;
}
.btn-ic-close:hover {
  cursor: pointer;
  transform: translateZ(0px) scale(1.2);
}
.ic-close {
  width: 21px;
  height: 21px;
  color: rgb(75, 75, 75);
}
span {
  font-weight: bold;
  display: flex;
  align-items: center;
}
label {
  font-size: 14px;
}

.ic-whatsapp {
  width: 21px;
  height: 21px;
  margin-right: 5px;
}

.modal-email {
  font-size: 13px;
}
</style>