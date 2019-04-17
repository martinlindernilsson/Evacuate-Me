
<template>
  <div>
    <v-container>
      <p class="infotext">
        Welcome.
        <br>To be able to provide a valuable service, we will need some basic information from you.
      </p>
      <br>
      <v-layout row justify-center class="user">
        <v-flex class="enterNameText" xs4 sm4 md3>Please enter your name:</v-flex>
        <v-flex xs7 sm5 md4>
          <v-text-field
            :rules="rules.userName"
            class="enterNameBox"
            label="Name"
            outline
            dark
            color="light-blue"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 sm6 md6>
          <v-radio-group v-model="headColor" class="radio" mandatory dark row @click="setHeadColor" >
            Head color:
            <v-radio label="blue" color="#049ED6" value="#049ED6"></v-radio>
            <v-radio label="green" color="#03C11A" value="#03C11A"></v-radio>
            <v-radio label="pink" color="#FFACAC" value="#FFACAC"></v-radio>
            <v-radio label="purple" color="#7C04D8" value="#7C04D8"></v-radio>
          </v-radio-group>
          <v-radio-group v-model="bodyColor" class="radio"  mandatory dark row @click="setBodyColor">
            Body color:
            <v-radio label="blue" color="#038DBF" value="#038DBF"></v-radio>
            <v-radio label="green" color="#03A516" value="#03A516"></v-radio>
            <v-radio label="pink" color="#EFA0A0" value="#EFA0A0"></v-radio>
            <v-radio label="purple" color="#7203C6" value="#7203C6"></v-radio>
          </v-radio-group>
          <v-radio-group v-model="eyeColor" class="radio"  mandatory dark row @click="setEyeColor">
            Eye color:
            <v-radio label="blue" color="#0586FF" value="#0586FF"></v-radio>
            <v-radio label="yellow" color="#EDCE04" value="#EDCE04"></v-radio>
            <v-radio label="red" color="#E50431" value="#E50431"></v-radio>
            <v-radio label="purple" color="#7C04D8" value="#7C04D8"></v-radio>
            
          </v-radio-group>
        </v-flex>
        <Avatar/>
      </v-layout>
      <v-flex>
        <v-btn class="nextButton" @click="$router.push({ path: '/climate' })">Start planning</v-btn>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import Avatar from "../components/Avatar";
export default {
  name: "CreateAvatar",
  components: { Avatar },
  data() {
    const avatarData = Object.freeze({
      userName: ""
    });
    return {
      headColor:"blue",
      bodyColor:"green",
      eyeColor:"pink",
      form: Object.assign({}, avatarData),
      rules: {
        userName: [val => (val || "").length > 0 || "Your name is required"]
      },
    };
  },
  methods:{
    setHeadColor: function() {
      this.$store.commit("setChosenHeadColor", this.headColor);
    },
    setBodyColor: function() {
      this.$store.commit("setChosenBodyColor", this.bodyColor);
    },
    setEyeColor: function() {
      this.$store.commit("setChosenEyeColor", this.eyeColor);
    },

  }
};
</script>


<style scoped>
.infotext {
  color: #c91e00;
  font-size: 18pt;
}

.enterNameText {
  padding-top: 1.5%;
}

.enterNameBox {
  color: #c91e00;
}
</style>


