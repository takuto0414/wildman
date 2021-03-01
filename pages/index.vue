<template>
  <div class="back">
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
      <div class="imdex-clo">
        <v-img class="index-images1" v-bind:src="indeximage2"
          ><span>name</span></v-img
        >
      </div>
      <div class="imdex-clo">
        <v-img class="index-images1" v-bind:src="indeximage3"
          ><span>name</span></v-img
        >
      </div>
      <div class="imdex-clo">
        <v-img class="index-images1" v-bind:src="indeximage4"
          ><span>name</span></v-img
        >
      </div>
      <div class="imdex-clo">
        <v-img class="index-images1" v-bind:src="indeximage5"
          ><span>name</span></v-img
        >
      </div>
    </div>
  </div>
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
  width: 48%;
float: left;  margin: 6px 1%;
}
.index-imagelink{
  margin: 6px 2px;
  
}

</style>