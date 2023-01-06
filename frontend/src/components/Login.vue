<template>
  <div class="globalcontainer" style="flex-direction: row">
    <div class="leftcontainer">
      <div class="image">
        <div class="tease">
          <h1>Hello,</h1>
          <h1>Welcome to our nightmare..</h1>
        </div>
        <img src="../assets/img_wallpaper/login.jpg" />
      </div>
    </div>
    <div class="rightcontainer">
      <div class="rightcontent">
        <img class="image" src="../assets/icon/logo.webp" />
        <h1 class="welcom">Bienvenue dans H-Realm !</h1>

        <form class="formlogin">
          <div class="formlabel">
            <label for="email">Adresse email</label>
            <div class="forminput">
              <input class="input" type="text" id="email" required />
            </div>
          </div>

          <div class="formlabel">
            <label for="email">Mot de passe</label>
            <div class="forminput">
              <input class="input" type="text" id="email" required />
            </div>
            <a href="" class="forgot">Mot de passe oublié?</a>
          </div>
        </form>

        <button style="" id="button" type="submit" @click="login" class="click">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      User: { email: "", password: "" },
    };
  },
  methods: {
    login() {
      let connect = {
        email: this.User.email,
        password: this.User.password,
      };

      let jsonData = JSON.stringify(connect);

      console.log(jsonData);
      axios
        .post("http://localhost:3000/user/login", connect)
        .then((response) => {
          console.log(response);
          return this.$router.push("/home");
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

.image img {
  width: 100%;
  height: auto;
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.tease {
  position: absolute;
  width: 70%;
  top: 30%;
  font-family: "Titillium Web", sans-serif;
  text-align: center;
}
.tease h1 {
  color: #979394;
}

.rightcontainer {
  background-color: #64110b;
  width: 30%;
}

.rightcontainer img {
  position: relative;
  margin-top: 30%;
  border-radius: 50%;
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  background-color: hsla(0, 0%, 0%, 0.87);
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
  font-size: 108%;
}

.input {
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

.forgot {
  color: black;
  margin-top: 2%;
  float: right;
  text-decoration: underline;
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
</style>
