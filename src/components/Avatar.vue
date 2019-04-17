<template>
  <v-flex class="avatar" xs12 sm6 md6>
    <v-avatar class="head" size="180" :color="getHeadColor()">
      <div class="eyeball">
        <div class="iris" :style="{ background: getEyeColor() }">
          <div class="pupil"></div>
        </div>
      </div>
      <div class="mouth">
        <div class="tongue"></div>
      </div>
    </v-avatar>
    <div class="whole-body">
      <div class="body" :style="{ background: getBodyColor() }"></div>
      <div class="l-left" :style="{ background: getBodyColor()}"></div>
      <div class="l-right" :style="{ background: getBodyColor() }"></div>
      <div class="a-left" :style="{ background: getBodyColor() }"></div>
      <div class="a-right" :style="{ background: getBodyColor() }"></div>
    </div>
  </v-flex>
</template>
<script>
export default {
  data() {
    return {
    };
  },
 methods: {
  getHeadColor () {
    return this.$store.getters.getHead
  },
  getBodyColor(){
      return this.$store.getters.getBody
  },
  getEyeColor(){
      return this.$store.getters.getEye
  }
},
};
</script>

<style scoped>
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

</style>
