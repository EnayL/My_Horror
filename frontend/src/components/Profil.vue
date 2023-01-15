<template>
    <div class="globalcontainer" style="flex-direction: row">
      <div class="container">
        <div class="profile-box">
            <ul class="centre-text bold-text">
              <li @click="goToEdit()">Edit</li>
            </ul>
            
          <img id="photo" class="profile-pic">
          <h3 id="name"></h3>
          <p id="bio"></p>
          <div class="social-media">
            <img src="\src\assets\img_wallpaper\twitter.png">
            <img src="\src\assets\img_wallpaper\instagram.png">
            <img src="\src\assets\img_wallpaper\tiktok.png">
          </div>
          <!-- <button type="button">Mes favoris</button>
          <div class="profile-bottom">
            <p>Mes favoris</p>
          </div> -->
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import axios from "axios";

export default {
  
  name: "Profil",
  props: {},
  methods: {
    async getUser() {
      const user = localStorage.getItem("user");

      axios
        .get(`http://localhost:3000/user/?username=${user}`)
        .then((res) => {
          var name = document.getElementById("name");
          var bio = document.getElementById("bio");
          var photo = document.getElementById("photo");


          const data = res.data
          if (name !== null){
            name.innerHTML =data.username;
          }
          if (name !== null){
            if( data.bio === undefined){
              data.bio = `${user} n'a pas encore mis à jour sa bio`
            }
            bio.innerHTML =  data.bio;
          }

          if (photo !== null){
            photo.setAttribute("src", data.photo);
          }

        })
        .catch((error) => {
          console.log(error);
        });
      
        

    },
    goToEdit() {
      this.$router.push("/profil/edit");
    },
  },
  mounted() {
    this.getUser();
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
    background: #64110b;
    height: 90%;
    text-align: center;
    padding: 150px 150px;
    color: white;
    position: relative;
    border-radius: 50px;
  }

  .profile-box > ul {
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  justify-content: start;
  margin-top: -20px;
  padding: 20px;
  height: 5%;
}

.profile-box > ul > li {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  position: absolute;
  left: 40px;
  top: 40px;
  letter-spacing: 0.05em;
  cursor: pointer;
  color: black;
}

#profile-.profile-box + label {
  background-color: transparent;
  border-color: rgb(0, 0, 0);
}
#profile-box:checked ~ div.profile-box {
  transform: translate(0px);
  visibility: visible;
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
    border-radius: 20px;
    margin-top: -20px;
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
  
