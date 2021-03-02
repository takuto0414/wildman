<template>
  <div>
    <footer>
      <v-layout justify-center>
        <v-img class="footer-logo" v-bind:src="imagefooter1"></v-img>
        
      </v-layout>
      <a href="https://www.instagram.com/___wildman___/">
        <v-icon style="color: white">mdi-instagram</v-icon></a
      >
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imagefooter1: require("@/assets/S__brlogo5.jpg"),
    };
  },
};
</script>
<style>
footer {
  float:left;
}

footer a {
  text-decoration-line: none;
  position: absolute;
  margin: 0px 50%;
}
</style>