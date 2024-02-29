<script>
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";
import Header from "./components/Header.vue";
export default {
  components: {
    Footer,
    Header,
    Main,
  },
};


</script>


































<template>
  <img
    src="https://cdn.discordapp.com/attachments/1197231307919466678/1212391377867112478/image.png?ex=65f1aa75&is=65df3575&hm=0245a844468d3b870852b78bcddd636363948c0d1221bfa07f33b409bbd090ab&"
    class="background__image"
  />
  <img
    src="https://cdn.discordapp.com/attachments/1197231307919466678/1212392133302951987/image.png?ex=65f1ab29&is=65df3629&hm=7b62303caf826db44a4ad0230a099f44de83e2407c5458eef579118b79c38bfb&"
    class="background__image1"
  />
  <img
    src="https://cdn.discordapp.com/attachments/1197231307919466678/1212392388182671420/image.png?ex=65f1ab66&is=65df3666&hm=9c77d3133f421b1c67704cdb68cf06c40a88f646bf94b650a778c3da104ab39d&"
    class="background__image2"
  />
  <img
    src="https://cdn.discordapp.com/attachments/1197231307919466678/1212392503207141437/image.png?ex=65f1ab81&is=65df3681&hm=04ddd9b1a668011b738030f52ccc59ad9fffb9c4304bb6107f492bd9b622fdcb&"
    class="background__image3"
  />
  <img
    src="https://cdn.discordapp.com/attachments/1197231307919466678/1212394422503997450/image.png?ex=65f1ad4b&is=65df384b&hm=b9a65b6c1a48d4486243d9058ae4a143efb30337413ff489ea15546ee22a8ba5&"
    class="background__image4"
  />

  <img
    src="https://cdn.discordapp.com/attachments/1212431501795397712/1212450325139689593/image.png?ex=65f1e15b&is=65df6c5b&hm=42b28882ec3bfa5e01975dc96e412187fc01298f43bc7128afcc8b6a418f3bc4&"
    alt=""
    class="background-1"
  />
  <img
    src="https://cdn.discordapp.com/attachments/1212431501795397712/1212450474100527134/image.png?ex=65f1e17f&is=65df6c7f&hm=b97bea1f0888b2ddf6a7183e6c5d6537b968921ae7e0f7de990be5a8fb991433&"
    alt=""
    class="background-2"
  />
  <img
    src="https://cdn.discordapp.com/attachments/1212431501795397712/1212450997687943202/image.png?ex=65f1e1fc&is=65df6cfc&hm=ac641fe80a047c281651357612cd6c705ff219ddc1f21cee87817401b33867f6&"
    alt=""
    class="background-3"
  />
  <img
    src="https://cdn.discordapp.com/attachments/1212431501795397712/1212451076515823677/image.png?ex=65f1e20e&is=65df6d0e&hm=e496be8cccf47afc5f556e530a6248d89f25cfe1cf6c03c2823155861535fc08&"
    alt=""
    class="background-4"
  />
  <img
    src="https://cdn.discordapp.com/attachments/1212431501795397712/1212451156698206270/image.png?ex=65f1e222&is=65df6d22&hm=72406a7297eaf206bec0fce9c09d21c49c9b12748056d10142523fec74c1fdaf&"
    alt=""
    class="background-5"
  />

  <Header />
  <Main />
  <Footer />
</template>

<style>
body,
html {
  background: rgb(249, 248, 253);
  position: relative;
  width: 1920px;
  height: 3038px;
  font-family: main;
  z-index: -12;
}
.background__image,
.background__image1,
.background__image2,
.background__image3,
.background__image4,
.background-1,
.background-2,
.background-3,
.background-4,
.background-5 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  user-select: none; /* Добавлено свойство user-select */
}

.background__image {
  /* Group 132 */
  position: absolute;
  width: 1705px;
  height: 1705px;
  left: 213px;
  right: 0;
  top: -507px;
  z-index: -10;
}

.background__image1 {
  /* Ellipse 30 */
  position: absolute;
  width: 1236.18px;
  height: 1236.18px;
  left: 447.41px;
  top: -272.59px;
  z-index: -9;
}
.background__image2 {
  /* Ellipse 31 */
  position: absolute;
  width: 907.6px;
  height: 907.6px;
  left: 611.7px;
  top: -108.3px;
  z-index: -8;
}
.background__image3 {
  /* Ellipse 32 */
  position: absolute;
  width: 627.1px;
  height: 627.1px;
  left: 751.95px;
  top: 31.95px;
  z-index: -8;
}
.background__image4 {
  /* Ellipse 33 */
  position: absolute;
  width: 399.38px;
  height: 399.38px;
  left: 865.81px;
  top: 145.81px;
}

.background-1 {
  /* Ellipse 29 */
  position: absolute;
  width: 2739px;
  height: 2636px;
  left: -669px;
  right: 669px;
  top: 402px;
  bottom: -402px;
}

.background-2 {
  /* Ellipse 30 */
  position: absolute;
  width: 1985.86px;
  height: 1911.18px;
  left: -292.43px;
  top: 764.41px;
}

.background-3 {
  /* Ellipse 31 */
  position: absolute;
  width: 1458.01px;
  height: 1403.18px;
  left: -28.51px;
  top: 1018.41px;
}

.background-4 {
  position: absolute;
  width: 1007.41px;
  height: 969.53px;
  left: 196.79px;
  top: 1235.24px;
}

.background-5 {
  position: absolute;
  width: 641.59px;
  height: 617.46px;
  left: 379.7px;
  top: 1411.27px;
}

@font-face {
  font-family: "main";
  src: url(./public/Gilroy-Medium.ttf);
}
</style>
