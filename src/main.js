import Vue from "vue";
import App from "./App.vue";
import Typewriter from "typewriter-effect/dist/core";
import GraphemeSplitter from "grapheme-splitter";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

const innerdemo = document.getElementById("inner-demo-2");
const innerdemo2 = document.getElementById("inner-demo-3");
const stringSplitter = string => {
  const splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(string);
};


const typewriter = new Typewriter(innerdemo, {
  loop: true,
  delay: 45,
  stringSplitter
});
const typewriter2 = new Typewriter(innerdemo2, {
  loop: true,
  delay: 45,
  stringSplitter
});

typewriter
  .pauseFor(5000)
  .typeString("👋你好,我是苏世天")
  .pauseFor(3500)
  .deleteAll(19)
  .pauseFor(1000)
  .typeString("携手共建人类命运共同体🕊️")
  .pauseFor(5700)
  .deleteAll(66)
  .pauseFor(1000)
  .typeString("🍀正在阅读的人永远开心")
  .pauseFor(4850)
  .deleteAll(47)
  .start();
  typewriter2
  .pauseFor(5000)
  .typeString("👋Hi,this is stermso")
  .pauseFor(3000)
  .deleteAll(9)
  .pauseFor(1000)
  .typeString("Join hands to build a community with a shared future for mankind🕊️")
  .pauseFor(3000)
  .deleteAll(13)
  .pauseFor(1000)
  .typeString("🍀The person who is reading will always be happy")
  .pauseFor(3000)
  .deleteAll(11)
  .start();