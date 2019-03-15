
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
      }
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


