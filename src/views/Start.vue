<template>
  <div class="home">
    <button class="evacuate-button">EVACUATE ME</button>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Start"
};
</script>
<style scoped>
.evacuate-button {
  font-family: "Roboto Mono", monospace;
  font-size: 2em;
  letter-spacing: 3px;
  color: #fff;
  background-color: #c91e00;
  height: 300px;
  width: 300px;
  border: none;
  border-radius: 150px;
}
</style>
