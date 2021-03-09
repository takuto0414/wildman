<template>
  <header>
    <div class="header-line">
      <v-layout justify-center>
        <v-img class="header-logo" v-bind:src="image1"></v-img>
      </v-layout>
      <div class="hamburger-menu">
        <input type="checkbox" id="menu-btn-check" />
        <label for="menu-btn-check" class="menu-btn"><span></span></label>
        <div class="menu-content">
          <ul>
            <li style="text-align: left; padding-left: 6px">
              <v-img
                v-bind:src="image2"
                style="
                  width: 32px;
                  float: right;
                  margin-right: 6px;
                  margin-top: 3px;
                  height: 32px;
                "
              ></v-img>

              <a href="#">clothes </a>
            </li>
            <li style="text-align: right; padding-right: 6px">
              <v-img
                v-bind:src="image3"
                style="width: 32px; margin-top: 3px; float: left"
              ></v-img>

              <a href="#">kids</a>
            </li>
            <li style="text-align: left; padding-left: 6px">
              <v-img
                v-bind:src="image4"
                style="
                  width: 32px;
                  float: right;
                  margin-right: 6px;
                  height: 32px;
                  margin-top: 3px;
                "
              ></v-img>

              <a href="#">goods</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      image1: require("@/assets/images/S__logo.jpg"),
      image2: require("@/assets/S__brlogo3.jpg"),
      image3: require("@/assets/images/brlogo8.jpg"),
      image4: require("@/assets/brlogo4.jpg"),
      image5: require("@/assets/images/brlogo10.jpg"),
    };
  },
};
</script>
<style>
header {
  position: fixed;
  z-index: 1000;
  top: 0px;
  width: 100%;
  background-color: black;
  margin-bottom: 64px;
}
.header-logo {
  height: 50px;
  width: 100%;
}
.v-image__image--cover {
  background-size: auto;
}
.header-line {
  border-bottom: solid 2px white;
  padding: 6px 0px;
}

.v-tabs-bar {
  border-radius: inherit;
  height: 30px;
}
/* ハンバーガー */
.hamburger-menu {
  float: right;
}
.menu-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  height: 45px;
  width: 60px;
  justify-content: center;
  align-items: center;
  z-index: 90;
}
.menu-btn span,
.menu-btn span:before,
.menu-btn span:after {
  content: "";
  display: block;
  height: 3px;
  width: 25px;
  border-radius: 3px;
  background-color: #ffffff;
  position: absolute;
}
.menu-btn span:before {
  bottom: 8px;
}
.menu-btn span:after {
  top: 8px;
}
#menu-btn-check:checked ~ .menu-btn span {
  background-color: rgba(
    255,
    255,
    255,
    0
  ); /*メニューオープン時は真ん中の線を透明にする*/
}
#menu-btn-check:checked ~ .menu-btn span::before {
  bottom: 0;
  transform: rotate(45deg);
}
#menu-btn-check:checked ~ .menu-btn span::after {
  top: 0;
  transform: rotate(-45deg);
}
#menu-btn-check {
  display: none;
}
.menu-content {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 80;
}
.menu-content ul {
  padding: 65px 0px;
}
.menu-content ul li {
  border-bottom: solid 1px #ffffff;
  background-color: black;
  list-style: none;
}
.menu-content ul li a {
  display: block;
  width: 100%;
  font-size: 15px;
  box-sizing: border-box;
  color: #ffffff;
  text-decoration: none;
  padding: 9px 0px 10px 0;
  position: relative;
}
.menu-content ul li a::before {
  border-top: solid 2px #ffffff;
  border-right: solid 2px #ffffff;
  transform: rotate(45deg);
  position: absolute;
  right: 11px;
  top: 16px;
  /* background-color: black; */
}
.menu-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 100%; /*leftの値を変更してメニューを画面外へ*/
  z-index: 80;
  transition: all 0.5s; /*アニメーション設定*/
}
#menu-btn-check:checked ~ .menu-content {
  left: 0; /*メニューを画面内へ*/
}
</style>