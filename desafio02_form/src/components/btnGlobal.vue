<template>
  <button :style="{ background }">{{ label }}</button>
</template>

<script>
export default {
  name: "BtnGloobal",
  props: {
    label: {
      type: String,
      default: "",
    },
    background: {
      type: String,
      default: "",
    },
  },
  get computedStyle() {
    return {
      background: this.background,
    };
  },
};
</script>

<style scoped>
button {
  padding: 22px 25px;

  font-size: 12px;
  font-weight: bold;
  color: white;

  border: none;
  border-radius: 7px;

  transition: 1;
  cursor: pointer;

  background-color: #2f2f33;
}
</style>