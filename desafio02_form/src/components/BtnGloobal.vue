<template>
  <button :style="{ background }">{{ label }}</button>
</template>

<script>
export default {
  name: "BtnGloobal",
  props: {
    label: String,
    background: String,
    pdng: Number,
    String,
  },
  get computedStyle() {
    return {
      background: this.background,
      padg: this.padg,
    };
  },
};
</script>

<style scoped>
button {
  padding: 22px 25px;

  font-size: 12px;
  color: white;

  border: none;
  border-radius: 7px;

  transition: 1s;
  cursor: pointer;

  background-color: #2f2f33d5;
}
</style>