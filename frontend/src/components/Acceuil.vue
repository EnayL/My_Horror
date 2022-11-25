<template>
  <div class="bodyacceuil">
    <div class="my-div">
      <div class="lignes">
        <div class="l1"></div>
        <div class="l2"></div>
      </div>

      <div class="container-first">
        <h1>
          <span>N'oubliez </span><span>pas </span><span>d'éteindre </span
          ><span>les lumières..</span>
        </h1>
        <h2><span>Rejoignez </span><span>nous !</span></h2>
        <div class="container-btns">
          <button class="btn-first b1">Register</button>
          <button class="btn-first b2">Login</button>
        </div>
      </div>

      <a><img src="../assets/icon/logo.webp" class="logo" /></a>

      <ul class="medias">
        <li class="bulle">
          <a href="https://www.youtube.com/c/Feldup" target="blank_"
            ><img src="../assets/icon/insta.svg" class="logo-medias"
          /></a>
        </li>
        <li class="bulle">
          <a href="https://www.youtube.com/c/Feldup" target="blank_">
            <img src="../assets/icon/yt.svg" class="logo-medias"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import "./styles/Acceuil.css";

export default {
  name: "AcceuilPage",
  props: {},
};
</script>

