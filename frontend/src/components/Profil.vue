<template>
    <div class="globalcontainer" style="flex-direction: row">
      <div class="container">
        <div class="profile-box">
            <div class="edit-profil">
              <li @click="goToEdit()">Edit</li>
            </div>
            <div class="back-button">
            <li  @click="goToHome()">Go Back</li>
          </div>
          <div class="reset-pass">
            <li  @click="goToReset()">Reset</li>
          </div>
          <img src="\src\assets\img_wallpaper\anonymous.jpg" class="profile-pic">
          <h3>NAME</h3>
          <p>Description</p>
          <div class="social-media">
            <img src="\src\assets\img_wallpaper\twitter.png">
            <img src="\src\assets\img_wallpaper\instagram.png">
            <img src="\src\assets\img_wallpaper\tiktok.png">
          </div>
          <button type="list">Mes favoris</button>
          <div class="profile-bottom">
            <p>Mes favoris</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
export default {
  name: "Profil",
  props: {},
  methods: {
    goToEdit() {
      this.$router.push("/profil/edit");
    },
    goToHome() {
      this.$router.push("/home");
    },
    goToReset() {
      this.$router.push("/profil/reset");
    },
  },
};
</script>

}
  
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

  label[for="profile-box"] {
  display: block;
  top: 5px;
  left: 5px;
  z-index: 999;
  width: 60px;
  height: 60px;
  background-color: #5c0000;
  border-radius: 15px;
  border: 2px solid rgb(0, 0, 0);
  cursor: pointer;
}

  .profile-box {
    background: black;
    height: 90%;
    text-align: center;
    padding: 150px 150px;
    color: white;
    border: 2px solid #790e06;
    position: relative;
  }

  .edit-profil {
    display: flex;
  align-items: flex-start;
  flex-flow: column;
  justify-content: start;
  position: absolute;
  left: 10px;
  top: 30px;
  margin-top: -20px;
  padding: 30px;
  height: 5%;
}

.edit-profil > li {
  font-size: 2rem;
  color: white;
  background-color: black;
  padding: 5px;
  padding-left: 7px;
  padding-right: 7px;
  border-color: white;
  transition: all 0.5s ease;
}

.edit-profil > li:hover{
  transform: scale(0.75);
    cursor: pointer;
    background-color: white;
    border-color: grey;
    color: black;
    font-weight: bold;
    box-shadow: -3px -3px 7px grey, 3px 3px 5px white;
}




.profile-box .back-button   {
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  justify-content: start;
  position: absolute;
  left: 10px;
  top: 70px;
  margin-top: -20px;
  padding: 30px;
  height: 5%;
  }

  .profile-box .back-button > li {
  font-size: 2rem;
  color: red;
  background-color: black;
  padding: 5px;
  padding-left: 7px;
  padding-right: 7px;
  border-color: white;
  transition: all 0.5s ease;
}

.profile-box .back-button > li:hover{
    transform: scale(0.75);
    cursor: pointer;
    background-color:red;
    border-color: #790e06;
    color: black;
    font-weight: bold;
    box-shadow: -3px -3px 7px #790e06, 3px 3px 5px red;
  }

  .profile-box .reset-pass   {
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  justify-content: start;
  position: absolute;
  left: 10px;
  top: 115px;
  margin-top: -20px;
  padding: 30px;
  height: 5%;
  }

  .profile-box .reset-pass > li {
  font-size: 2rem;
  color: blue;
  background-color: black;
  padding: 5px;
  padding-left: 7px;
  padding-right: 7px;
  border-color: white;
  transition: all 0.5s ease;
}

.profile-box .reset-pass > li:hover{
    transform: scale(0.75);
    cursor: pointer;
    background-color: blue;
    border-color: darkblue;
    color: black;
    font-weight: bold;
    box-shadow: -3px -3px 7px darkblue, 3px 3px 5px blue;
  }
  .menu-icon{
    width: 70px;
    height: 70px;
    position: absolute;
    left: 40px;
    top: 40px;
  }

  .menu-icon img{
    width: 50px;
    margin: 30px 5px;
    cursor: pointer;
    background-color: grey;
    border-radius: 5px;
  }

  .menu-icon:hover{
    cursor: pointer;
    transform: translateY(4px);
    color: red;
  }

  .setting-icon{
    width: 70px;
    height: 70px;
    position: absolute;
    left: 40px;
    top: 90px;
  }

  .setting-icon:hover{
    cursor: pointer;
    background: none;
    transform: translateY(4px);
    color: red;
  }

  

  .profile-pic{
    width: 125px;
    height: 125px;
    border-radius: 50%;
    margin-top: -70px;
    background: black;
    padding: 5px;
  }
  
  .profile-bottom{
    background: red;
    color: white;
    padding: 60px 0;
    height: 100px;
    margin-right: -150px;
    margin-left: -150px;
  }

  .profile-box button{
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

  .profile-box button:hover{
    cursor: pointer;
    background-color: black;
    transform: translateY(4px);
  }


  .profile-box h3{
    font-size: 22px;
    margin-top: 20px;
    font-weight: 500;
  }

  .social-media img{
    width: 50px;
    margin: 30px 5px;
    cursor: pointer;
    background-color: grey;
    border-radius: 5px;
  }

  .social-media img:hover{
    cursor: pointer;
    background-color: red;
    border: 2px;
    border-color: red;
    transform: translateY(4px);

  }
  
  </style>
  
