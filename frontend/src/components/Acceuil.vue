<template>
  <div src="../assets/img_wallpaper/Acceuil.gif">
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
export default {
  name: "AcceuilPage",
  props: {},
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400&display=swap");

*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #333;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  background-image: url("../assets/img_wallpaper/Acceuil.gif");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow-x: hidden;
}

.container-first {
  position: absolute;
  top: 30%;
  left: 5%;
}

h1 {
  text-transform: uppercase;
  font-size: 50px;
  color: #f1f1f1;
  font-family: "Titillium Web", sans-serif;
}
h1 span {
  position: relative;
}

h2 {
  text-transform: uppercase;
  font-size: 25px;
  color: #f1f1f1;
  font-family: "Titillium Web", sans-serif;
}
h2 span {
  position: relative;
}

.container-btns {
  position: relative;
  top: 50px;
}
.btn-first {
  border: 2px solid #f1f1f1;
  outline: none;
  background: transparent;
  font-size: 30px;
  padding: 20px;
  width: 300px;
  color: #f1f1f1;
  cursor: pointer;
  font-family: "Titillium Web", sans-serif;
}
.btn-first:nth-child(1) {
  margin-right: 30px;
}
.btn-first:hover {
  transition: all 0.3s ease-in-out;
  background: #f1f1f1;
  color: #333;
}
.lignes {
  position: absolute;
  top: 6%;
  left: 5%;
}
.l1 {
  width: 250px;
  height: 3px;
  background: #f1f1f1;
  border-radius: 5px;
}
.l2 {
  width: 140px;
  height: 3px;
  background: #f1f1f1;
  border-radius: 5px;
  position: relative;
  top: 20px;
}

.logo {
  position: absolute;
  right: 2.9%;
  top: 4%;
  width: 80px;
  height: 80px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
}
.medias {
  list-style-type: none;
  position: absolute;
  right: 3.3%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.bulle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  background: #f1f1f1;
  cursor: pointer;
  position: relative;
}

.logo-medias {
  width: 40px;
  height: 40px;
}
</style>
