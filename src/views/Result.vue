<template>
  <div class="results">
    <div class="infotext">The results are in!</div>
    <div class="box-fluid">
      <div class="animation">
        <div class="planet" :style="{background: planetColor}"></div>
        <img class="rocket" src="../assets/rocket.png" style="z-index: 0;">
      </div>
      <div class="planet-result">
        <p>
          {{name}},
          <br>you will be evacuated to the planet...
        </p>
        <h1 class="name-of-planet">
          <p>{{planet.name}}</p>
        </h1>
        <p class="population">Population: {{planet.population}}</p>
        <p class="gravity">Gravity: {{planet.gravity}}</p>
        <p class="rotation">Rotaion period: {{planet.rotation_period}} hours</p>
        <p class="orbital">Orbital period: {{planet.orbital_period}} days</p>
        <Avatar/>
      </div>
      <v-btn fab large color="#c91e00" class="confirmButton" @click="addUser">
        Confirm
        <br>destination
      </v-btn>
      <div class=previousUsers>Previous Evacuees
      <table class="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Planet</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user">
              <td>{{user.name}}</td>
              <td>{{user.planet}}</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "../components/Avatar";
import Firebase from 'firebase'

 let config = {
        apiKey: "AIzaSyCZRoljnhpNIYgJXQ5zLeyxVVkTxt8ziII",
        authDomain: "evacuate-me-d8a07.firebaseapp.com",
        databaseURL: "https://evacuate-me-d8a07.firebaseio.com",
        projectId: "evacuate-me-d8a07",
        storageBucket: "evacuate-me-d8a07.appspot.com",
        messagingSenderId: "715639153462"
      };
      let app = Firebase.initializeApp(config);
      let db = app.database()

      let usersRef = db.ref('users')
      
export default {
  name: "Result",
  firebase: {
    users: usersRef
  },
  components: { Avatar },
  
  data() {
    return {
      planet: this.$store.getters.filteredPlanets[0],
      planetColor: this.$store.state.chosenPlanetColor,
      newUser: {
          name: this.$store.state.chosenName,
          planet: this.$store.getters.filteredPlanets[0].name,
          headColor: this.$store.state.chosenHead,
          bodyColor: this.$store.state.chosenBody,
          eyeColor: this.$store.state.chosenEye
      },
    };
  },
  computed: {
    name() {
      return this.$store.state.chosenName;
    }
  },
  mounted: function() {
    this.$store.state.currentStep = 5;
  },
  methods: {
    addUser: function () {
        usersRef.push(this.newUser);
        this.newUser.name = '';
        this.newUser.planet = '';
        this.newUser.headColor = '';
        this.newUser.bodyColor = '';
        this.newUser.eyeColor = '';
    }
  }
};
</script>


<style scoped>
.box-fluid {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 50px;
}
.animation {
  display: flex;
  justify-content: flex-start;
  max-width: 900px;
  min-width: 500px;
  max-height: 300px;
  min-height: 300px;
  position: relative;
  left: 0px;
}
.planet {
  position: absolute;
  width: 120px;
  height: 120px;
  background: blue;
  border-radius: 50%;
  left: 200px;
  top: 90px;
  box-shadow: 0 0 30px #3a72d3;
  z-index: 1;
}
.rocket {
  position: absolute;
  width: 50px;
  left: 240px;
  top: 80px;
  -webkit-animation: myOrbit 4s linear forwards; /* Chrome, Safari 5 */
  animation: myOrbit 4s linear forwards;
}
.planet-result {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  min-width: 500px;
}
.infotext {
  color: #c91e00;
  font-size: 16pt;
}

@keyframes myOrbit {
  0% {
    -webkit-transform: rotate(180deg) translateX(150px);
  }
  70% {
    -webkit-transform: rotate(-135deg) translateX(150px);
    top: 80px;
    left: 240px;
  }
  100% {
    -webkit-transform: rotate(-135deg) translateX(150px) rotate(97deg);
    top: 125px;
    left: 280px;
  }
}

.v-btn{
  min-width: 140px;
  min-height: 140px;
  z-index: 100;
}
.confirmButton {
  background-color: aquamarine;
  font-family: "Roboto Mono", monospace;
  font-size: 1em;
  letter-spacing: 3px;
  height: 40px;
  
  color: #fff;
  border: none;
}
.previousUsers {
  position: absolute;
  right: 12%;
  top: 60%;
  
}
</style>