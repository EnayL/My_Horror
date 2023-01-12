<template>
    <div class="globalcontainer2" style="flex-direction: row">
      <div class="forgetcontainer">
        <div class="forget">
            <div class="forget_content">
            <img class="image" src="../assets/icon/logo.webp" />
            <h1 class="forget_text">Rentrez votre adresse mail, pour reçevoir un nouveau mot de passe</h1>
  
          <form class="forget_login">
            <div class="forget_label">
              <label for="email">Adresse email</label>
              <div class="forget_input">
                <input class="input" type="text" id="email" required />
              </div>
            </div>
  
            
          </form>
  
          <div class="forget_yes">
        <button type="submit" @click="goToLogin()">Receive</button>
      </div>
        </div>
        </div>
      </div>
      </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "ForgetPassword",
    data() {
      return {
        User: { email: "", password: "" },
      };
    },
    methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
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
  
  .globalcontainer2 {
    display: flex;
    flex-direction: row;
  }
  
  .forgetcontainer {
    width: 100%;
    height: 100vh;
    background-image: url(../src/assets/img_wallpaper/login.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
  }
  
  
  
  .tease2 {
    position: absolute;
    width: 70%;
    top: 20%;
    font-family: "Titillium Web", sans-serif;
    text-align: center;
  }
  .tease2 h1 {
    color: #979394;
  }
  
  .forget {
    background-color: black;
    width: 30%;
    height: 70%;
  }
  
  .forget img {
    position: relative;
    margin-top: 10%;
    border-radius: 50%;
    width: 25%;
    margin-left: auto;
    margin-right: auto;
    background-color: hsla(0, 0%, 0%, 0.87);
  }
  
  .forget_content {
    display: flex;
    flex-direction: column;
    margin: 3%;
    padding-bottom: 5%;
  }
  .forget_text{
    max-width: 70%;
    margin-top: 5%;
    font-size: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  h1 {
    font-family: "Titillium Web", sans-serif;
    color: #790e06;
  }
  
  .forget_login {
    font-family: "Titillium Web", sans-serif;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    color: black;
  }
  
  .forget_label {
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    font-size: 108%;
    color : #790e06;
  }
  
  .forget_input {
    font-family: "Titillium Web", sans-serif;
    border: none;
    background: none;
    width: 100%;
    height: 3vh;
    color: rgb(0, 0, 0);
    font-size: 1em;
    outline: none;
    box-shadow: #000000 -1px 1px 0px 0px;
  }
  
  
  .click {
    border-radius: 3px;
    padding: 5px 2em;
    box-shadow: 0px 0px 0px 2px black;
    text-decoration: none;
    color: black;
    outline: none;
    background: none;
    border: none;
  }
  .click:hover {
    color: #979394;
    box-shadow: 0px 0px 0px 2px #979394;
  }
  
  .forget_yes button  {
    background-color: #790e06;
    padding: 15px;
    padding-left: 50px;
    padding-right: 50px;
    border-color: red;
    margin-top: 10%;
    border-radius: 10em;
    margin-left: 25%;
  }

  .forget_yes button:hover{
    transform: scale(1.1);
    cursor: pointer;
    background-color:black;
    border-color: white;
    color: grey;
    font-weight: bold;
    border-radius: 15em;
    box-shadow: -3px -3px 7px grey, 3px 3px 5px white;
  }
  </style>
  