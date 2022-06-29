<template>
  <main>
    <TopbarListagem :btn2="true" />
    <div class="container-listagem">
      <button class="cadastrar-usuario" @click="goCadastrar()">
        Cadastrar novo usuário
      </button>
      <div class="cpf-name">
        <h5 class="content-cpf">CPF</h5>
        <h5>NOME COMPLETO</h5>
      </div>
      <div id="renderResult">
        <ul v-for="user in currentItens" :key="user.message">
          <li class="content-cpf">{{ user.cpf }}</li>
          <li class="content-name">{{ user.fullname }}</li>
          <li @click="openModal(user)">
            <font-awesome-icon
              icon="fa-solid fa-eye"
              class="ic-eye"
              ref="selectedItem"
            />
          </li>
        </ul>
      </div>
    </div>
    <section v-show="informationModal" class="information-modal">
      <nav class="navbar-modal">
        <h4>Detalhes do usuário</h4>
        <button @click="closeModal()" class="btn-ic-close">
          <font-awesome-icon icon="fa-solid fa-xmark" class="ic-close" />
        </button>
      </nav>

      <div class="contain-all-information">
        <div class="informations">
          <div class="information-content">
            <label>Cpf</label> <span> </span>
          </div>
          <div class="information-content">
            <label>Nome completo</label> <span>nao tem nada</span>
          </div>
          <div class="information-content">
            <label>Nascimento</label> <span>nao tem nada</span>
          </div>
        </div>

        <div class="informations">
          <div class="information-content">
            <label>Celular</label> <span>nao tem nada</span>
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
            <span class="modal-email">lucas.bretzke@gmail.com</span>
          </div>
        </div>
      </div>
    </section>

    <jw-pagination
      :styles="customStyles"
      :labels="customLabels"
      :pageSize="6"
      :maxPages="4"
      :items="dataUsers"
      @changePage="onChangePage"
    ></jw-pagination>
  </main>
</template>

 <script>
import TopbarListagem from "./components/TopbarListagem.vue";
import axios from "axios";

const customLabels = {
  first: "<<",
  last: ">>",
  previous: "<",
  next: ">",
};
const customStyles = {
  li: {
    display: "inline-block",
    margin: "0px 3px",
  },
  a: {
    padding: "3px 3px",
  },
};

export default {
  name: "UsersList",
  components: {
    TopbarListagem,
  },
  data() {
    return {
      url: "http://localhost:8080/api/users",
      dataUsers: [],
      currentItens: [],
      informationModal: false,
      customLabels,

      customStyles,
      selectedItem: '',
    };
  },
  methods: {
    goCadastrar() {
      this.$router.push({ name: "RegisterUser" });
    },
    onChangePage(currentItens) {
      this.currentItens = currentItens;
    },
    get getData() {
      return [...Array(100).keys()].map((i) => ({
        id: i + 1,
      }));
    },
   
    openModal(user) {
      this.informationModal = true;
    },
    closeModal() {
      this.informationModal = false;
    },
  },
  async mounted() {
    const response = await axios.get(this.url);
    this.dataUsers = response.data.users;
  },
};
</script>

<style scoped>
section {
  display: flex;
}
.container-listagem {
  width: 750px;
  height: 400px;
  margin: 10px auto;
  border-bottom: 1px solid rgba(105, 105, 105, 0.542);
}
.cadastrar-usuario {
  position: static;
  margin: 10px 0px;
  margin-left: 552px;
  padding: 11px 24px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: rgba(224, 43, 87, 255);
  cursor: pointer;
}
.cadastrar-usuario:hover {
  transition: 0.5s;
  opacity: 0.6;
}
.cpf-name {
  display: flex;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  border-top: 1px solid rgba(105, 105, 105, 0.542);
  border-bottom: 1px solid rgba(105, 105, 105, 0.542);
}

h5 {
  font-weight: bold;
}

#renderResult {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
}
ul {
  display: flex;
  padding: 10px;
  align-items: center;
}
ul li {
  font-size: 13px;
  list-style-type: none;
}

.content-cpf {
  width: 260px;
}
.content-name {
  width: 450px;
}

.ic-eye {
  width: 17px;
  height: 17px;
  padding: 2px;
  cursor: pointer;
}
.ic-eye:hover {
  transform: translateZ(10px) scale(1.3);
}

.pagination {
  position: absolute;
  list-style-type: none;
  top: 640px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
}

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