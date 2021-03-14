<template>
  <div class="out">
    <img src="1.jpg" />
    <input type="radio" name="slide" id="slide1" />
    <input type="radio" name="slide" id="slide2" />
    <input type="radio" name="slide" id="slide3" />
    <input type="radio" name="slide" id="slide4" />
    <div class="in">
      <label for="slide1"
        ><span></span><a href="#1"><img src="1.jpg" /></a
      ></label>
      <label for="slide2"
        ><span></span><a href="#2"><img src="2.jpg" /></a
      ></label>
      <label for="slide3"
        ><span></span><a href="#3"><img src="3.jpg" /></a
      ></label>
      <label for="slide4"
        ><span></span><a href="#4"><img src="4.jpg" /></a
      ></label>
    </div>
  </div>
</template>
<style>
.out {
  position: relative;
}
.in img {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 0.5s;
  z-index: 0;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
input {
  display: none;
}
.in {
  display: flex;
  justify-content: center;
}
label span {
  display: block;
  width: 15px;
  height: 15px;
  padding: 7px;
  margin: -40px 0 0;
  border-radius: 100%;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
label span::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #4287f5;
  opacity: 0.5;
  border-radius: 100%;
}
input:nth-of-type(1):checked ~ .in label:nth-of-type(1) span::before,
input:nth-of-type(2):checked ~ .in label:nth-of-type(2) span::before,
input:nth-of-type(3):checked ~ .in label:nth-of-type(3) span::before,
input:nth-of-type(4):checked ~ .in label:nth-of-type(4) span::before {
  background: #000;
  opacity: 1;
}
label span::before {
  animation: slidebutton 14s infinite;
}
@keyframes slidebutton {
  0% {
    opacity: 0.5;
    background: #4287f5;
  }
  3.5% {
    opacity: 1;
    background: #000;
  } /* b÷x×100=y */
  25% {
    opacity: 1;
    background: #000;
  } /* 100÷c=z */
  28.5% {
    opacity: 0.5;
    background: #4287f5;
  } /* y+z */
}
label:nth-of-type(2) span::before,
label:nth-of-type(2) img {
  animation-delay: 3.5s;
}
label:nth-of-type(3) span::before,
label:nth-of-type(3) img {
  animation-delay: 7s;
}
label:nth-of-type(4) span::before,
label:nth-of-type(4) img {
  animation-delay: 10.5s;
}
input:nth-of-type(1):checked ~ .in label:nth-of-type(1) img,
input:nth-of-type(2):checked ~ .in label:nth-of-type(2) img,
input:nth-of-type(3):checked ~ .in label:nth-of-type(3) img,
input:nth-of-type(4):checked ~ .in label:nth-of-type(4) img {
  opacity: 1;
  z-index: 1;
}
.in img {
  animation: slide 14s infinite; /* (a+b)×c=x */
  opacity: 0;
}
@keyframes slide {
  0% {
    opacity: 0;
  }
  3.5% {
    opacity: 1;
    z-index: 1;
  } /* b÷x×100=y */
  25% {
    opacity: 1;
  } /* 100÷c=z */
  28.5% {
    opacity: 0;
    z-index: 0;
  } /* y+z */
}
input:checked ~ .in img,
input:checked ~ .in span::before {
  animation: none;
}
.in:hover img,
.in:hover span::before {
  animation-play-state: paused; /* マウスを載せると一時停止 */
}
</style>