<template>
  <button v-on:click="runRoute">
    <font-awesome-icon icon="fa-solid fa-arrow-left" />
  </button>
</template>


<script>
export default {
  name: "btnReturn",
  data() {
    return {
        a: this.$router.push
    };
  },
  // props: {
  //   route: {
  //     type: String,
  //     default: "",
  //   },
  // },
  // method: {
  //   runRoute() {
  //     this.$router.push({
  //       name: route,
  //     });
  //   },
  // },
};
</script>


<style scoped>
button {
  position: fixed;
  margin: 15px;

  font-size: 13px;

  cursor: pointer;
}
</style>