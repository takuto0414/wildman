<template>
  <main class="back">
    <!-- <div class="header-link-style">
      <v-sheet>
        <v-tabs background-color="black" center-active flat>
          <v-tab>
            <a class="header-link" href="#" style="color: #000">clothes</a>
          </v-tab>
          <v-tab>
            <a class="header-link" href="#" style="color: #000">kids</a>
          </v-tab>
          <v-tab>
            <a class="header-link" href="#" style="color: #000">goods</a>
          </v-tab>
        </v-tabs>
      </v-sheet>
    </div> -->
    <div>
      <v-img class="index-images" v-bind:src="indeximage1"></v-img>
    </div>
    <div class="index-imagelink">
      <div class="imdex-clo1">
        <v-img class="index-images1" v-bind:src="indeximage2"
          ><span>name</span></v-img
        ><v-img class="index-images-side" v-bind:src="indeximage6"></v-img>
      </div>
      <div class="imdex-clo">
        <v-img class="index-images2" v-bind:src="indeximage3"
          ><span>name</span></v-img
        ><v-img class="index-images-side1" v-bind:src="indeximage7"></v-img>
      </div>
      <div class="imdex-clo1">
        <v-img class="index-images1" v-bind:src="indeximage4"
          ><span>name</span></v-img
        >
      </div>
      <div class="imdex-clo">
        <v-img class="index-images2" v-bind:src="indeximage5"
          ><span>name</span></v-img
        >
      <v-img class="index-images-side2" v-bind:src="indeximage8"></v-img>

      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      indeximage1: require("@/assets/images/S__59252757.jpg"),
      indeximage2: require("@/assets/images/huphoto1.jpg"),
      indeximage3: require("@/assets/images/huphoto2.jpg"),
      indeximage4: require("@/assets/images/fam.jpg"),
      indeximage5: require("@/assets/images/huphoto4.jpg"),
      indeximage6: require("@/assets/images/brlogo9.jpg"),
      indeximage7: require("@/assets/brlogo.jpg"),
      indeximage8: require("@/assets/brlogo5.jpg"),

    };
  },
};
</script>
<style>
.back {
  background-color: black;
}
.index-images {
  width: 100%;
  height: 500px;
}
.v-image__image--cover {
  background-size: auto;
}
.header-link-style {
  text-align: center;
}
.header-link {
  text-decoration-line: none;
}
.index-images1 {
  width: 80%;
  float: left;
  margin: 6px 1%;
  position: relative;
}
.index-imagelink {
  margin: 6px 2px;
}
.index-images2 {
  width: 80%;
  float: right;
  margin: 6px 1%;
  position: relative;

}
.index-images-side {
  position: absolute;
  margin: 100px 0px 0px 290px;
}
.index-images-side1 {
  position: absolute;
  margin: 550px 190px 0px 10px;
}
.index-images-side2{
  margin: 1050px 0px 0px 235px;
  position: absolute;
opacity: .2;}
</style>