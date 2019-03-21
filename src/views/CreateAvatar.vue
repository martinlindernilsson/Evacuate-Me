
<template>
  <div>
    <v-container>
      <p class="infotext">Welcome.
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
          <v-radio-group v-model="skinColor" class="radio" mandatory dark row>Skin color:
            <v-radio label="blue" color="blue" value="blue"></v-radio>
            <v-radio label="white" color="white" value="white"></v-radio>
            <v-radio label="brown" color="brown" value="brown"></v-radio>
            <v-radio label="green" color="green" value="green"></v-radio>
          </v-radio-group>
          <v-radio-group class="radio" mandatory dark row>Hair color:
            <v-radio label="blue" color="blue" value="blue"></v-radio>
            <v-radio label="white" color="white" value="white"></v-radio>
            <v-radio label="brown" color="brown" value="brown"></v-radio>
            <v-radio label="green" color="green" value="green"></v-radio>
          </v-radio-group>
          <v-radio-group class="radio" mandatory dark row>Eye color:
            <v-radio label="blue" color="blue" value="blue"></v-radio>
            <v-radio label="white" color="white" value="white"></v-radio>
            <v-radio label="brown" color="brown" value="brown"></v-radio>
            <v-radio label="green" color="green" value="green"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-avatar size="220" :color="skinColor"></v-avatar>
        </v-flex>
      </v-layout>
      <v-flex>
        <v-btn class="nextButton" @click="$router.push({ path: '/climate' })">Start planning</v-btn>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CreateAvatar",
  data() {
    const avatarData = Object.freeze({
      userName: ""
    });
    return {
      form: Object.assign({}, avatarData),
      rules: {
        userName: [val => (val || "").length > 0 || "Your name is required"]
      },
      skinColor: "blue"
    };
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


