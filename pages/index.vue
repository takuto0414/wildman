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
      <v-img class="index-images" v-bind:src="indeximage1">
        <div class="wid-wrap" style="padding: 450px 0px 0px 50px; color: white">
          <div id="top-image" style="color: white">
            <div class="mask" style="color: white">
              <div class="top-text" style="color: white">
                <button @click="run" style="color: white;outline: none;">
                  <v-icon>mdi-skip-next-circle</v-icon>
                </button>
              </div>
              <div id="text-area" style="width: 150px"></div>
            </div>
          </div>
        </div>
        <!-- <body onload="printMoji()">
<div id="text"></div> -->
      </v-img>
    </div>
    <div class="index-imagelink">
      <div class="imdex-clo1">
        <v-img class="index-images1" v-bind:src="indeximage2"
          ></v-img
        ><v-img class="index-images-side" v-bind:src="indeximage6"></v-img>
      </div>
      <div class="imdex-clo">
        <v-img class="index-images2" v-bind:src="indeximage3"
          ></v-img
        ><v-img class="index-images-side1" v-bind:src="indeximage7"></v-img>
      </div>
      <div class="imdex-clo1">
        <v-img class="index-images1" v-bind:src="indeximage4"
          ></v-img
        >
      </div>
      <div class="imdex-clo">
        <v-img class="index-images2" v-bind:src="indeximage5"
          ></v-img
        ><v-img class="index-images-side3" v-bind:src="indeximage9"></v-img>
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
      indeximage9: require("@/assets/brlogo2.jpg"),

      getval: this.getTargetMsg(),
      currentMsgArray: [],
    };
  },

  methods: {
    run() {
      //一度テキスト表示エリアを空にする
      document.getElementById("text-area").innerHTML = "";
      //表示するメッセージを取得する
      const currentArray = this.getval();
      //メッセージを一文字ずつ分解して配列に入れる。
      this.currentMsgArray = Array.from(currentArray);
      //メッセージを一文字ずつ表示する
      this.printChar();
    },

    printChar() {
      console.log("called!");
      //全部取り出したら何もしない。
      if (this.currentMsgArray.length === 0) return;
      //表示する文字を取得する
      let currentChar = this.currentMsgArray.slice(0, 1);
      //表示エリアに取得した文字を追加する
      document.getElementById("text-area").innerHTML += currentChar;
      //配列の先頭を削除する。(もう表示したので)
      this.currentMsgArray = this.currentMsgArray.slice(1);
      //50後にもう一度このメソッドを呼び出す。
      setTimeout(this.printChar, 100);
    },

    getTargetMsg() {
      //表示予定の文字列を配列で準備しておく。
      let frontMsg = ["Don't think feel ", "　　　-Wildman-"];

      //クロージャを使って値を設定する
      return function () {
        //準備した文字がなくなったら何もしない
        if (frontMsg.length === 0) return false;

        //一つ取得
        let current = frontMsg.slice(0, 1);
        //一つ削除
        frontMsg = frontMsg.slice(1);
        //配列を文字列で返す
        return current[0];
      };
    },
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
  margin: 100px 0px 0px 300px;
  opacity: .3;
}
.index-images-side1 {
  position: absolute;
  margin: 550px 190px 0px 10px;
  opacity: .3;

}

.index-images-side2 {
  margin: 900px 0px 0px 300px;
  position: absolute;
  opacity: .3;
}
.index-images-side3{
  position: absolute;
  margin: 1300px 190px 0px 0px;
  opacity: .3;

}
button, input, select, textarea {
    background-color: transparent;
     border-style:outset;
}
</style>