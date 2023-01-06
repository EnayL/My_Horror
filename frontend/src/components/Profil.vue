<template>
  <div class="globalcontainer" style="flex-direction: row">
    <div class="container">
      <div class="profile-box">
        <img src="\src\assets\img_wallpaper\menuIC.png" class="menu-icon" />
        <img src="\src\assets\img_wallpaper\setting.png" class="setting-icon" />
        <img src="\src\assets\img_wallpaper\plusIcon.png" class="plus-icon" />
        <img
          src="\src\assets\img_wallpaper\anonymous.jpg"
          class="profile-pic"
        />
        <h3>NAME</h3>
        <p>Description</p>
        <div class="social-media">
          <img src="\src\assets\img_wallpaper\twitter.png" />
          <img src="\src\assets\img_wallpaper\instagram.png" />
          <img src="\src\assets\img_wallpaper\tiktok.png" />
        </div>
        <button type="button">Mes livres</button>
        <div class="profile-bottom">
          <p>Description</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "ProfilPage" };
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

.globalcontainer {
  display: flex;
  flex-direction: row;
}

.container {
  width: 100%;
  height: 100vh;
  background-image: url(../src/assets/img_wallpaper/login2.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-box {
  background: #64110b;
  height: 90%;
  text-align: center;
  padding: 150px 150px;
  color: white;
  position: relative;
  border-radius: 50px;
}

.menu-icon {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 40px;
  top: 40px;
}

.menu-icon img {
  width: 50px;
  margin: 30px 5px;
  cursor: pointer;
  background-color: grey;
  border-radius: 5px;
}

.menu-icon:hover {
  cursor: pointer;
  transform: translateY(4px);
  color: red;
}

.setting-icon {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 40px;
  top: 90px;
}

.setting-icon:hover {
  cursor: pointer;
  background: none;
  transform: translateY(4px);
  color: red;
}

.plus-icon {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 40px;
  top: 160px;
}

.plus-icon:hover {
  cursor: pointer;
  background: none;
  transform: translateY(4px);
  color: red;
}

.profile-pic {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin-top: -70px;
  background: black;
  padding: 5px;
}

.profile-bottom {
  background: red;
  color: white;
  padding: 60px 0;
  height: 100px;
  margin-right: -150px;
  margin-left: -150px;
  border-radius: 20px;
  margin-top: -20px;
}

.profile-box button {
  background: red;
  color: white;
  width: 200px;
  height: 50px;
  border-color: black;
  box-shadow: 0 10px 15px #64110b;
  padding: 10px 30 px 10px;
  cursor: pointer;
  border-radius: 30px;
  font-weight: bold;
  font-size: 16px;
}

.profile-box button:hover {
  cursor: pointer;
  background-color: black;
  transform: translateY(4px);
}
.profile-box h3 {
  font-size: 22px;
  margin-top: 20px;
  font-weight: 500;
}

.social-media img {
  width: 50px;
  margin: 30px 5px;
  cursor: pointer;
  background-color: grey;
  border-radius: 5px;
}

.social-media img:hover {
  cursor: pointer;
  background-color: red;
  border: 2px;
  border-color: red;
  transform: translateY(4px);
}
</style>
