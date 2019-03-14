<template>
  <div class="home">
    <button class="evacuate-button">EVACUATE ME</button>
    <!-- Change the text to your liking -->
    <div class="board">
      <div class="content">
        <p class="title">Episode I</p>
        <p class="subtitle">THE EVACUATION</p>
        <br>
        <p>Turmoil has engulfed the Republic of Earth as the sun no longer shines.</p>
        <p>Every human is being evacuated to a new planet.</p>
        <p>This is your evacuation guide to the galaxy.</p>
      </div>
    </div>
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
p {
  color: #FFFF82;
}

/* Set the font, lean the board, position it */
.board {
  transform: perspective(300px) rotateX(25deg);
  transform-origin: 50% 100%;
  text-align: justify;
  position: absolute;
  margin-left: -9em;
  font-weight: bold;
  overflow: hidden;
  font-size: 350%;
  height: 50em;
  width: 18em;
  bottom: 0;
  left: 50%;
}

.board:after {
  position: absolute;
  content: ' ';
  bottom: 60%;
  left: 0;
  right: 0;
  top: 0;
}

/* Set the scrolling animation and position it */
.content {
  animation: scroll 110s linear 1s;
  position: absolute;
  top: 100%;
}

.title, .subtitle {
  text-align: center;
}

@keyframes scroll {
    0% {
        top: 100%;
    }
    100% {
        top: -170%;
    }
}

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
  transition: 0.4s;
}

.evacuate-button:hover {
  background-color: #94250c;
}

.evacuate-button:active {
  background-color: #94250c;
  -ms-transform: translateY(2px);
  -webkit-transform: translateY(2px);
  transform: translateY(2px);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
  border-bottom: none;
}

.evacuate-button:focus {
  outline: none;
}
</style>
