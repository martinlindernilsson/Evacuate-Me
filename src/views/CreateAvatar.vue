
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
          <v-radio-group v-model="skinColor" class="radio" mandatory dark row>
            Skin color:
            <v-radio label="blue" color="#FFACAC" value="#FFACAC"></v-radio>
            <v-radio label="white" color="white" value="white"></v-radio>
            <v-radio label="brown" color="brown" value="brown"></v-radio>
            <v-radio label="green" color="green" value="green"></v-radio>
          </v-radio-group>
          <v-radio-group v-model="bodyColor" class="radio" mandatory dark row>
            Body color:
            <v-radio label="blue" color="blue" value="blue"></v-radio>
            <v-radio label="white" color="white" value="white"></v-radio>
            <v-radio label="brown" color="brown" value="brown"></v-radio>
            <v-radio label="green" color="green" value="green"></v-radio>
          </v-radio-group>
          <v-radio-group v-model="eyeColor" class="radio" mandatory dark row>
            Eye color:
            <v-radio label="blue" color="blue" value="blue"></v-radio>
            <v-radio label="white" color="white" value="white"></v-radio>
            <v-radio label="brown" color="brown" value="brown"></v-radio>
            <v-radio label="green" color="green" value="green"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex class="avatar" xs12 sm6 md6>
          <v-avatar class="head" size="180" :color="skinColor">
            <div class="eyeball">
              <div class="iris" :style="{ background: eyeColor }">
                <div class="pupil"></div>
              </div>
            </div>
            <div class="mouth">
              <div class="tongue"></div>
            </div>
          </v-avatar>
          <div class="whole-body">
            <div class="body" :style="{ background: bodyColor }"></div>
            <div class="l-left" :style="{ background: bodyColor }"></div>
            <div class="l-right" :style="{ background: bodyColor }"></div>
            <div class="a-left" :style="{ background: bodyColor }"></div>
            <div class="a-right" :style="{ background: bodyColor }"></div>
          </div>
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
      skinColor: "green",
      eyeColor: "brown",
      bodyColor:"blue"

    };
  }
};
</script>


<style scoped>
.infotext {
  color: #c91e00;
  font-size: 18pt;
}
.head {
  display: flex;
  flex-direction: column;
  margin-left: 150px;
  position: relative;
  z-index: 2;
}
.eyeball {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  position: relative;
  bottom: 30px;
}
.iris {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: blueviolet;
  position: absolute;
  left: 10px;
  top: 10px;
}
.pupil {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: black;
  position: absolute;
  left: 5px;
  top: 5px;
}
.mouth {
  width: 50%;
  height: 50px;
  position: absolute;
  bottom: 30px;
  background-color: rgb(41, 41, 41);
  border-radius: 10px 10px 150px 150px;
  border: 5px solid rgb(41, 41, 41);
  overflow: hidden;
  position: absolute;
}
.tongue {
  width: 100px;
  height: 80px;
  position: absolute;
  top: 20px;
  background-color: #f15962;
  border-radius: 50%;
}
.avatar {
  position: relative;
  margin-top: 30px;
}
.body {
  background-color: green;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 190px;
  top: 140px;
  border-radius: 25%;
  z-index: 1;
}
.l-left {
  width: 20px;
  height: 60px;
  position: absolute;
  top: 210px;
  left: 210px;
  border-radius: 50%;
}
.l-right {
  width: 20px;
  height: 60px;
  position: absolute;
  top: 210px;
  left: 250px;
  border-radius: 50%;
  z-index: 0;
}
.a-left {
  width: 20px;
  height: 60px;
  position: absolute;
  top: 160px;
  left: 170px;
  border-radius: 50%;
  transform: rotate(25deg);
  z-index: 0;
}
.a-right {
  width: 20px;
  height: 60px;
  position: absolute;
  top: 160px;
  left: 290px;
  border-radius: 50%;
  transform: rotate(-25deg);
  z-index: 0;
}

.enterNameText {
  padding-top: 1.5%;
}

.enterNameBox {
  color: #c91e00;
}
</style>


