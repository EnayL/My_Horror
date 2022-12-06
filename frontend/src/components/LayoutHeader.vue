<template>
  <header class="header" style="background-color: #5c0000">
    <nav class="header__nav nav">
      <ul class="nav__list">
        <li class="nav__item">
          <img class="nav__link-img" src="../assets/icon/house-solid.svg" />
          <span class="nav__link-title">Home</span>
        </li>
        <li class="nav__item">
          <img class="nav__link-img" src="../assets/icon/user-solid.svg" />
          <span class="nav__link-title">Mon Profil</span>
        </li>
        <li class="nav__item">
          <img class="nav__link-img" src="../assets/icon/heart-regular.svg" />
          <span class="nav__link-title">Like</span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
  props: {},
};
</script>

<style scoped>
.header {
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: fixed;
}
.nav__link-img {
  display: inline-block;
  width: 30px;
}
.nav__item {
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 50px;
  border-radius: 9999px;
  transition: 0.2s ease;
  cursor: pointer;
}

.nav__item:hover {
  background-color: rgba(29, 161, 242, 0.1);
}

.nav__item:hover .nav__link-title {
  color: #4c0000;
}
.nav__link-title {
  margin-right: 15px;
  margin-left: 20px;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.3125;
  overflow-wrap: break-word;
  cursor: pointer;
}
.nav__button {
  background-color: #4c0000;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 28px;
  outline-style: none;
  min-height: 49px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 9999px;
  width: 90%;
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 15px;
  border-color: rgba(0, 0, 0, 0);
  transition: 0.2s ease-in-out;
  margin-top: 15px;
  width: 100%;
  cursor: pointer;
}

.nav__button:hover {
  background-color: #4c0000;
}
.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  margin-bottom: 15px;
}
.user:hover {
  background-color: rgba(29, 161, 242, 0.1);
  padding: 10px;
  border-radius: 9999px;
  cursor: pointer;
}
.user__img {
  border-radius: 9999px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.04);
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 2px inset;
  cursor: pointer;
  width: 40px;
  height: 40px;
}
.user__username {
  overflow-wrap: break-word;
  color: rgb(15, 20, 25);
  font-weight: 700;
  font-size: 15px;
  line-height: 1.3125;
}
.user__nickname {
  color: rgb(91, 112, 131);
  font-weight: 400;
  font-size: 15px;
  line-height: 1.3125;
}

@media screen and (max-width: 1430px) {
  .header {
    width: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    position: fixed;
  }
  .nav__link-title {
    display: none;
  }
}

@media screen and (max-width: 1109px) {
  .profil {
    width: 100%;
    height: 10vh;
    background-color: #4c0000;
  }
  .header {
    display: none;
  }
  .nav__link-img {
    display: none;
  }
  .nav__link-title {
    display: none;
  }
}
</style>
