<template>
  <div class="globalcontainer" style="flex-direction: row">
    <div class="rightcontainer">
      <div class="rightcontent">
        <div class="back_register-button">
            <li  @click="goToAcceuil()">Go Back</li>
          </div>
        <img class="image" src="../assets/icon/logo.webp" />
        <h1 class="welcom">Rentrez dans notre Royaume !</h1>

        <form class="formlogin">
          <div class="formlabel">
            <label for="email">Nom</label>
            <p class="forminput">
              <input
                class="input"
                v-model="User.nom"
                type="string"
                id="nom"
                placeholder="."
              />
            </p>
          </div>

          <div class="formlabel">
            <label for="prenom">Prénom </label>
            <p class="forminput">
              <input
                class="input"
                type="string"
                id="email"
                v-model="User.prenom"
                placeholder="."
              />
            </p>
          </div>

          <div class="formlabel">
            <label for="username">Pseudo</label>
            <p class="forminput">
              <input
                class="input"
                v-model="User.username"
                type="string"
                id="email"
                placeholder="."
              />
            </p>
          </div>

          <div class="formlabel">
            <label for="email">Adresse email</label>
            <p class="forminput">
              <input
                class="input"
                v-model="User.email"
                type="string"
                id="email"
                placeholder="."
              />
            </p>
          </div>

          <div class="formlabel">
            <label for="password">Mot de passe</label>
            <p class="forminput">
              <input
                class="input"
                v-model="User.password"
                type="string"
                id="password"
                placeholder="."
              />
            </p>
          </div>
          <div class="formlabel">
            <label for="password">Mot de passe</label>
            <p class="forminput">
              <input
                class="input"
                type="string"
                id="password"
                placeholder="."
              />
            </p>
            <a href="" class="forgot">Déjà un compte?</a>
          </div>
          <p id="error"></p>
        </form>
        <button id="button" type="submit" @click="addToDb">Register</button>
      </div>
    </div>
    <div class="leftcontainer">
      <div class="image">
        <img src="../assets/img_wallpaper/register.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterPage",
  data() {
    return {
      User: { nom: "", prenom: "", username: "", email: "", password: "" },
    };
  },
  methods: {
    goToAcceuil() {
      this.$router.push("/");
    },
    addToDb() {
      let newUser = {
        nom: this.User.nom,
        prenom: this.User.prenom,
        username: this.User.username,
        email: this.User.email,
        password: this.User.password,
      };

      let jsonData = JSON.stringify(newUser);

      console.log(jsonData);
      axios
        .post("http://localhost:3000/user/signup", newUser)
        .then((response) => {
          console.log(response);
          return this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
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

.globalcontainer {
  display: flex;
  flex-direction: row;
}

.leftcontainer {
  width: 70%;
  background-color: #000000d2;
}

.back_register-button{
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  justify-content: start;
  position: absolute;
  left: 20px;
  top: 20px;
  margin-top: -20px;
  padding: 30px;
}

.back_register-button > li {
  font-size: 2rem;
  color: red;
  background-color: black;
  padding: 5px;
  padding-left: 7px;
  padding-right: 7px;
  border-color: white;
  transition: all 0.5s ease;
}

.back_register-button > li:hover{
    transform: scale(0.75);
    cursor: pointer;
    background-color:red;
    border-color: #790e06;
    color: black;
    font-weight: bold;
    box-shadow: -3px -3px 7px #790e06, 3px 3px 5px red;
  }
.image img {
  width: 100%;
  height: auto;
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100.5vh;
}

.tease {
  position: right;
  width: 70%;
  top: 40%;
  font-family: "Titillium Web", sans-serif;
  font-weight: bold;
  text-align: center;
}
.tease h1 {
  color: #a8a3a4;
}

.rightcontainer {
  background-color: #000000;
  width: 30%;
  height: 101vh;
}

.rightcontainer img {
  position: relative;
  margin-top: 10%;
  border-radius: 50%;
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  background-color: hsla(0, 0%, 0%, 0.87);
}

#button {
  background-color: #790e06;
  padding: 15px;
  padding-left: 50px;
  padding-right: 50px;
  border-color: #790e06;
  border-radius: 20em;
  margin-left: auto;
  margin-right: auto;
}

.rightcontent {
  display: flex;
  flex-direction: column;

  margin: 3%;
  padding-bottom: 5%;
}
.welcom {
  max-width: 70%;
  margin-top: 5%;
  font-size: 200%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
h1 {
  font-family: "Titillium Web", sans-serif;
  color: black;
}

.formlogin {
  font-family: "Titillium Web", sans-serif;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  color: black;
}

.formlabel {
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  font-size: 150%;
  color: #790e06;
}

.input {
  font-family: "Titillium Web", sans-serif;
  border: none;
  background: none;
  width: 100%;
  height: 3vh;
  color: #790e06;
  font-size: 1em;
  outline: none;
  box-shadow: #790e06 -1px 1px 0px 0px;
}

.forgot {
  color: #790e06;
  margin-top: 2%;
  float: right;
  text-decoration: underline;
}

.forgot:hover {
  color: #979394;
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
</style>
