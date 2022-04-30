<template>
  <div class="animation-linhas">
    <input id="initial-input" type="radio" :checked="currentState >= 1" />
    <div class="linha01" />
    <input id="center-input" type="radio" :checked="currentState >= 2" />
    <div class="linha02" />
    <input
      id="finished-input"
      type="radio"
      :checked="currentState === 3"
    />
  </div>
</template>

<script>
export default {
  name: "ProgressionBar",
  props: {
    currentState: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style scoped>
.animation-linhas {
  width: 100%;
  margin-top: 15px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.animation-linhas .linha01,
.linha02 {
  width: 100%;
  border-bottom: 2px solid #ed2f5d;
}

#initial-input,
#center-input,
#finished-input {
  width: 25px;
  padding: 0px;
  margin: 0px;
  border: 2px solid red;
}
</style>