<template>
  <main>
    <TopbarListagem :styleBtnListing="true" />
    <div class="container-listagem">
      <button class="cadastrar-usuario" @click="registerUser()">
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

    <DetailsModal
      v-show="informationModal"
      @closeModal="closeModal"
      :objectUser="this.objectUser"
    />

    <jw-pagination
      :disableDefaultStyles="true"
      class="jw-pagination"
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
import axios from "axios";
import TopbarListagem from "./components/TopbarListagem.vue";
import DetailsModal from "../ListingScreen/components/DetailsModal.vue";

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
};

export default {
  name: "UsersList",
  components: {
    TopbarListagem,
    DetailsModal,
  },
  data() {
    return {
      url: "http://localhost:8080/api/users",
      dataUsers: [],
      currentItens: [],
      informationModal: false,
      customLabels,

      customStyles,
      selectedItem: "",
      objectUser: {},
    };
  },
  methods: {
    cadastrarUser() {
      this.$router.push({ name: "RegisterUser" });
    },

    onChangePage(currentItens) {
      this.currentItens = currentItens;
    },

    getData() {
      return [...Array(100).keys()].map((i) => ({
        id: i + 1,
      }));
    },

    openModal(user) {
      this.informationModal = true;
      this.objectUser = user;
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

.jw-pagination {
  list-style-type: none;
  display: flex !important;
  width: 100%;
  justify-content: center;
}
::v-deep .jw-pagination li a {
  cursor: pointer;
  padding: 5px 3px;
}
::v-deep .jw-pagination .active:hover {
  background: black !important;
}
::v-deep .jw-pagination .page-number {
  font-size: 15px;
  padding: 5px 2px;
  color: rgb(165, 165, 165);
  background-color: rgb(255, 255, 255) !important;
}
::v-deep .jw-pagination .page-number:hover {
  color: black;
  background-color: rgba(126, 126, 126, 0.281) !important;
  border-radius: 3px;
}
::v-deep .jw-pagination li.first,
::v-deep .jw-pagination li.last,
::v-deep .jw-pagination li.previous,
::v-deep .jw-pagination li.next {
  font-weight: bold;
}
::v-deep .jw-pagination li.first:hover,
::v-deep .jw-pagination li.last:hover,
::v-deep .jw-pagination li.previous:hover,
::v-deep .jw-pagination li.next:hover {
  transform: translateZ(10px) scale(1.1);
}
::v-deep .jw-pagination .active {
  color: white !important;
  background: black !important;
  border-radius: 3px;
}
</style>