<template>
    <div class="globalcontainer2" style="flex-direction: row">
      <div class="resetcontainer">
        <div class="reset">
          <div class="back-button">
            <button type="submit" @click="goToProfil()">Back</button>
          </div>
            <div class="reset_content">
            <img class="image" src="../assets/icon/logo.webp" />
            <h1 class="reset_text">Veuillez renseignez les champs suivants pour changer le mot de passe. </h1>
  
          <form class="reset_pswd">
            <div class="reset_label">
                <div class="resetlabel">
            <label for="password">Ancien Mot de passe</label>
            <p class="reset_input">
              <input class="input" v-model="User.password" type="string" id="password" placeholder="." />
            </p>
          </div>
          <div class="resetlabel">
            <label for="password">Nouveau Mot de passe</label>
            <p class="reset_input">
              <input class="input" type="string" v-model="User.password" id="password" placeholder="." />
            </p>
          </div>
          <div class="resetlabel">
            <label for="password">Confirmer le Nouveau Mot de passe</label>
            <p class="reset_input">
              <input class="input" type="string" v-model="User.confirm" id="password" placeholder="." />
            </p>
          </div>
              
            </div>
  
            
          </form>
  
          <div class="reset_yes">
        <button type="submit" @click="goToProfil()">CONFIRMER</button>
      </div>
        </div>
        </div>
      </div>
      </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "ResetPassword",
    data() {
      return {
        User: { email: "", password: "" },
      };
    },
    methods: {
    goToProfil() {
      this.$router.push("/profil");
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
  
  .resetcontainer {
    width: 100%;
    height: 100vh;
    background-image: url(../src/assets/img_wallpaper/register.jpg);
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
  
  .reset {
    background-color: black;
    width: 30%;
    height: 75%;
  }


  .back-button button   {
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  justify-content: start;
  padding: 30px;
  height: 30px;
  }

  .back-button button {
  font-size: 2rem;
  color: white;
  background-color: black;
  padding: 5px;
  padding-left: 7px;
  padding-right: 7px;
  border-color: white;
  transition: all 0.5s ease;
}

.back-button button:hover{
    transform: scale(0.75);
    cursor: pointer;
    background-color:red;
    border-color: #790e06;
    color: black;
    font-weight: bold;
    box-shadow: -3px -3px 7px #790e06, 3px 3px 5px red;
  }
  
  .reset img {
    position: relative;
    margin-top: 10%;
    border-radius: 50%;
    width: 25%;
    margin-left: auto;
    margin-right: auto;
    background-color: hsla(0, 0%, 0%, 0.87);
  }
  
  .reset_content {
    display: flex;
    flex-direction: column;
    margin: 3%;
    padding-bottom: 5%;
  }
  .reset_text{
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
  
  .reset_pswd {
    font-family: "Titillium Web", sans-serif;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    color: black;
  }
  
  .reset_label {
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    font-size: 108%;
    color : #790e06;
  }

  .reset_label label{
    color: white;
  }
  
  .reset_input {
    font-family: "Titillium Web", sans-serif;
    border: none;
    background: none;
    width: 100%;
    height: 3vh;
    color: cyan;
    font-size: 1em;
    outline: none;
    box-shadow: #000000 -1px 1px 0px 0px;
  }

  .reset_input #email.input{
    color: white;
    font-style: italic;
    letter-spacing: 0.2em;
  }
  
  

  
  .reset_yes button  {
    background-color: #790e06;
    padding: 15px;
    padding-left: 50px;
    padding-right: 50px;
    border-color: red;
    margin-top: 10%;
    color: black;
    margin-left: 25%;
    transition: all 0.5s ease;
  }

  .reset_yes button:hover{
    transform: scale(1.1);
    cursor: pointer;
    background-color:black;
    border-color: white;
    color: grey;
    font-weight: bold;
    box-shadow: -3px -3px 7px grey, 3px 3px 5px white;
  }
  </style>
  