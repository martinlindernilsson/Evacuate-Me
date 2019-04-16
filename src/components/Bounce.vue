<template>
  <div>
    <div id="ball"></div>
    <div id="ground"></div>
    <div id="shadow"></div>
  </div>
</template>

<script>
export default {
  name: "Bounce",
  mounted: function() {
    
  }
};
</script>


<style scoped>


#ground {
  
  background: #ad8766;
  top: 18em;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

#shadow {
  position: relative;
  top: 210px;  
  left: 22px;
  margin-left: -1em;
  width: 2em;
  height: 1em;
  background: rgb(41, 39, 39);
  border-radius: 50%;
  -webkit-animation:   pulse .5s infinite alternate;
  -moz-animation:     pulse .5s infinite alternate;
  -o-animation:       pulse .5s infinite alternate;
  animation:          pulse .5s infinite alternate;
}

@-webkit-keyframes pulse {
  0% { width: 2em; margin-left: -1em; }
  75% { width: 2.5em; margin-left: -1.25em; }
  100% { width: 3em; margin-left: -1.5em; }
}
@-webkit-keyframes pulse {
  0% { width: 2em; margin-left: -1em; }
  75% { width: 2.5em; margin-left: -1.25em; }
  100% { width: 3em; margin-left: -1.5em; }
}
@-moz-keyframes pulse {
  0% { width: 2em; margin-left: -1em; }
  75% { width: 2.5em; margin-left: -1.25em; }
  100% { width: 3em; margin-left: -1.5em; }
}
@-o-keyframes pulse {
  0% { width: 2em; margin-left: -1em; }
  75% { width: 2.5em; margin-left: -1.25em; }
  100% { width: 3em; margin-left: -1.5em; }
}
@keyframes pulse {
  0% { width: 2em; margin-left: -1em; }
  75% { width: 2.5em; margin-left: -1.25em; }
  100% { width: 3em; margin-left: -1.5em; }
}

#ball {
  position: relative;
  background: #c91e00;
  top: 100px;
  border-radius: 50%;
  margin: 0 auto;
  z-index: 2;
  -webkit-animation: bounce .5s cubic-bezier(.63,.09,.75,.46) infinite alternate;
  -moz-animation:    bounce .5s cubic-bezier(.63,.09,.75,.46)  infinite alternate;
  -o-animation:      bounce .5s cubic-bezier(.63,.09,.75,.46)  infinite alternate;
  animation:         bounce .5s cubic-bezier(.63,.09,.75,.46)  infinite alternate;
}

@-webkit-keyframes bounce {
  0%, 10% { top: 3em; height: 3em; width: 3em; }
  15% { height: 3.15em; width: 2.9em; }
  35% { height: 4em; width: 2.5em; }
  75% { height: 4em; width: 2.5em; }
  95% { height: 2em; width: 3.5em; }
  100% { top: 18em; height: 1em; width: 3em; }
}
@-moz-keyframes bounce {
  0%, 10% { top: 3em; height: 3em; width: 3em; }
  15% { height: 3.15em; width: 2.9em; }
  35% { height: 4em; width: 2.5em; }
  75% { height: 4em; width: 2.5em; }
  95% { height: 2em; width: 3.5em; }
  100% { top: 18em; height: 1em; width: 3em; }
}
@-o-keyframes bounce {
  0%, 10% { top: 3em; height: 3em; width: 3em; }
  15% { height: 3.15em; width: 2.9em; }
  35% { height: 4em; width: 2.5em; }
  75% { height: 4em; width: 2.5em; }
  95% { height: 2em; width: 3.5em; }
  100% { top: 18em; height: 1em; width: 3em; }
}
@keyframes bounce {
  0%, 10% { top: 3em; height: 3em; width: 3em; }
  15% { height: 3.15em; width: 2.9em; }
  35% { height: 4em; width: 2.5em; }
  75% { height: 4em; width: 2.5em; }
  95% { height: 2em; width: 3.5em; }
  100% { top: 18em; height: 1em; width: 3em; }
}
</style>