<template>
  <font-awesome-icon
    icon="fa-solid fa-arrow-left"
    v-on:click="previousPage"
    class="ic-arrow-left"
  />
</template>


<script>
export default {
  name: "BtnReturn",
  props: {
    previousPageUrl: { type: String },
  },
  data() {
    return {};
  },
  methods: {
    previousPage() {
      this.$router.push(this.previousPageUrl);
    },
  },
};
</script>


<style scoped>
.ic-arrow-left {
  width: 22px;
  height: 22px;
  padding: 5px;

  top: 15px;
  left: 15px;
  position: fixed;

  font-size: 13px;

  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  background-color: transparent;
}

.ic-arrow-left:hover {
  background-color: rgba(255, 255, 255, 0.27);
}
</style>