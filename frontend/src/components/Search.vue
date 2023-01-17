<template>
  <div id="app">
    <div class="searchBox">
      <input
        class="searchInput"
        type="text"
        v-model="text"
        placeholder="Search a User"
        @input="handleInput"
        v-on:keyup="handleInput"
      />
      <button class="searchButton" href="#">
        <img
          src="../assets/icon/magnifying-glass-solid.svg"
          class="logo-medias"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { trigger } from "@vue/reactivity";
import axios from "axios";
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleInput(event) {
      console.log(event.target.value);
      if (event.key == "Enter") {
        axios
          .get(`http://localhost:3000/user/?username=${event.target.value}`)
          .then((res) => {
            console.log(res.data.email);
          })
          .catch(() => {
            console.log("we didn't find this user");
          });
      }
    },
  },
};
</script>

<style scoped>
body {
  background-image: linear-gradient(to right, #cb2d3e, #ef473a);
  max-height: 100vh;
  max-width: 100vw;
}

.searchBox {
  position: absolute;
  transform: translate(-50%, 50%);
  background-color: #41071d;
  height: 40px;
  border-radius: 40px;
  margin-left: 90%;
}

.searchBox:hover > .searchInput {
  width: 240px;
  padding: 0 6px;
}

.searchBox:hover > .searchButton {
  background-color: #41071d;
  color: #2f3640;
}

.searchButton {
  color: rgb(0, 0, 0);
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #41071d;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
}

.searchInput {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0px;
}
.logo-medias {
  margin-top: -3%;
  width: 20px;
  height: 20px;
}

@media screen and (max-width: 620px) {
  .searchBox:hover > .searchInput {
    width: 150px;
    padding: 0 6px;
  }
}
</style>
