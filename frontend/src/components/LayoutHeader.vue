<template>
  <div class="nav">
    <input type="checkbox" id="ham-menu" />
    <label for="ham-menu">
      <img style="cursor: pointer" src="../assets/icon/house-solid copie.svg" />
    </label>
    <div class="full-page-green"></div>
    <div class="ham-menu">
      <ul class="centre-text bold-text">
        <li @click="goToHome()">Home</li>
        <li @click="goToPoste()">Poste</li>
        <li @click="goToProfil()">Profile</li>
        <li @click="goToLike()">Like</li>
      </ul>
    </div>
    <search></search>
  </div>
</template>

<script>
import Search from "./Search.vue";

export default {
  name: "HeaderPage",
  components: { Search },
  props: {},
  methods: {
    goToLike() {
      this.$router.push("/like");
    },
    goToProfil() {
      this.$router.push("/profil");
    },
    goToHome() {
      this.$router.push("/home");
    },
    goToPoste() {
      this.$router.push("/post");
    },
  },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
body,
html {
  width: 100%;
  font-size: 10px;
  color: white;
  font-weight: normal;
  font-family: sans-serif;
  background-color: #000;
}

.hide-des {
  margin-left: 3%;
}
.nav {
  width: 100%;
  background-color: #350619;
  height: 80px;
}

#ham-menu {
  display: none;
}
label[for="ham-menu"] {
  margin-left: 0.5%;
  display: block;
  position: fixed;
  top: 5px;
  left: 5px;
  z-index: 999;
  width: 60px;
  height: 60px;
  background-color: #350619;
  border-radius: 15px;

  cursor: pointer;
}

.ham-menu {
  width: 17vw;
  height: 100%;
  position: fixed;
  top: 0;
  visibility: hidden;
  transform: translate(-110%);
  z-index: 998;
  background-color: #350619;
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ham-menu > ul {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding: 20px;
  height: 50%;
}
.ham-menu > ul > li {
  font-size: 5rem;
  white-space: nowrap;
  letter-spacing: 0.15em;
  cursor: pointer;
  color: #fff2f3;
}

#ham-menu:checked + label {
  background-color: transparent;
  border-color: rgb(0, 0, 0);
}
#ham-menu:checked ~ div.ham-menu {
  transform: translate(0px);
  visibility: visible;
}
.full-page-green {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #35061992;
  z-index: 997;
  opacity: 0;
  visibility: hidden;
  display: none;
  transition: 500ms;
  position: fixed;
  top: 0;
  left: 0;
}
#ham-menu:checked ~ div.full-page-green {
  display: block;
  opacity: 1;
  visibility: visible;
}
[for="ham-menu"] > div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  align-items: center;
}
.menu-line {
  display: block;
  width: 17px;
  height: 2px;
  margin: 10px 0 5px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  background-color: rgb(0, 0, 0);
  transition: 500ms;
  transform-origin: right center;
}
[for="ham-menu"] > div > span:nth-child(4),
[for="ham-menu"] > div > span:nth-child(5),
[for="ham-menu"] > div > span:nth-child(6) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  transform-origin: left center;
}
#ham-menu:checked + label span {
  background-color: rgb(0, 0, 0);
}
#ham-menu:checked + label span:nth-child(2),
#ham-menu:checked + label span:nth-child(5) {
  transform: scale(0);
}
#ham-menu:checked + label span:nth-child(1) {
  transform: translateY(17px) rotate(45deg);
}
#ham-menu:checked + label span:nth-child(4) {
  transform: translateY(17px) rotate(-45deg);
}
#ham-menu:checked + label span:nth-child(3) {
  transform: translateY(-17px) rotate(-45deg);
}
#ham-menu:checked + label span:nth-child(6) {
  transform: translateY(-17px) rotate(45deg);
}
p {
  display: inline;
  font-size: 1.8rem;
  line-height: 1.5em;
  word-spacing: 0.5em;
  letter-spacing: 0.1em;
  font-family: "OpenSansCondensed-Light";
}
a {
  font-size: 1.6rem;
  line-height: 1.5em;
  word-spacing: 0.5em;
  letter-spacing: 0.1em;
  font-family: "OpenSansCondensed-Light";
  display: inline;
  font-weight: bold;
  padding: 7px;
  color: rgb(0, 0, 0);
}
a::after {
  content: "\e806";
  display: inline-block;
  font-family: fontello;
  padding: 5px;
  font-size: 1.6rem;
  transform: rotate(-90deg);
}
.text {
  font-size: 2.5rem;
  line-height: 1.5em;
  word-spacing: 0.5em;
  letter-spacing: 0.1em;
  font-family: "OpenSansCondensed-Bold", sans-serif;
}

.title {
  font-size: 3rem;
  line-height: 1.5em;
  word-spacing: 0.5em;
  letter-spacing: 0.1em;
  font-family: "OpenSansCondensed-Bold", sans-serif;
  color: rgb(0, 0, 0);
  padding: 10px;
}

li:hover {
  transform: translateY(-20px);
}
.heading {
  font-size: 6rem;
  line-height: 1.5em;
  word-spacing: 0.5em;
  letter-spacing: 0.1em;
  font-family: "Patua One";
}
.centre-text {
  text-align: center;
}
.bold-text {
  font-weight: bold;
}
</style>
