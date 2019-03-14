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
  overflow: hidden;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  border-bottom: solid 5px #bd6565;
  transition: .4s;
}

.evacuate-button:hover {background-color: #94250c}

.evacuate-button:active {
  background-color:#94250c;
  -ms-transform: translateY(2px);
  -webkit-transform: translateY(2px);
  transform: translateY(2px);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
  border-bottom: none;
}

.evacuate-button:focus { outline: none; }

</style>
