<template>
  <div class="globalcontainer" style="flex-direction: row">
    <div class="leftcontainere">
      <div class="image2">
        <img src="../assets/img_wallpaper/login3.jpg" />
        <div class="tease1">
          <h1>Hello,</h1>
          <h1>Welcome to our nightmare..</h1>
        </div>
      </div>
    </div>

    <div class="rightcontainere">
      <div class="rightcontent">
        <img class="image" src="../assets/icon/logo.webp" />
        <h1 class="welcom1">Bienvenue dans H-Realm !</h1>

        <form class="formlogin">
          <div class="formlabel">
            <label for="email">Username</label>
            <p class="forminput">
              <input
                class="input"
                type="text"
                id="email"
                v-model="User.username"
              />
            </p>
          </div>

          <div class="formlabel">
            <label for="email">Mot de passe</label>
            <p class="forminput">
              <input
                class="input"
                type="text"
                id="email"
                v-model="User.password"
              />
            </p>
            <a href="" class="forgot1">Mot de passe oublié?</a>
          </div>
        </form>
        <div class="btn2">
          <button id="button" class="click2" type="submit" @click="login">
            Login
          </button>
        </div>
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
      User: { username: "", password: "" },
    };
  },
  methods: {
    login() {
      let connect = {
        username: this.User.username,
        password: this.User.password,
      };

      let jsonData = JSON.stringify(connect);

      console.log(jsonData);
      axios
        .post("http://localhost:3000/user/login", connect)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", response.data.username);
          this.$router.push("/home");
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

/* .globalcontainer {
  display: flex;
  flex-direction: row;
} */

.leftcontainere {
  width: 100%;
  height: 100vh;
  background-color: #111111;
}

.image2 img {
  transform: scaleX(-1);
  margin-left: 81%;
  width: 20%;
  height: 100vh;
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.tease1 {
  position: absolute;
  width: 55%;
  top: 30%;
  font-family: "Titillium Web", sans-serif;
  text-align: center;
}
.tease1 h1 {
  color: #fff2f3;
}

.rightcontainere {
  position: absolute;
  background-color: #350619;
  width: 30%;
  height: 100vh;
  margin-left: 56%;
}

.rightcontainere img {
  position: relative;
  margin-top: 30%;
  border-radius: 50%;
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  background-color: hsla(0, 0%, 100%, 0.332);
}

.rightcontent {
  display: flex;
  flex-direction: column;
  margin: 3%;
  padding-bottom: 5%;
}
.welcom1 {
  max-width: 70%;
  margin-top: 5%;
  font-size: 200%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #fff2f3;
}
.welcom1 h1 {
  font-family: "Titillium Web", sans-serif;
  color: #fff2f3;
}

.formlogin {
  font-family: "Titillium Web", sans-serif;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  color: #d8d8d8;
}

.formlabel {
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  font-size: 108%;
  color: #fff2f3;
}

.input {
  font-family: "Titillium Web", sans-serif;
  border: none;
  background: none;
  width: 100%;
  height: 3vh;
  color: #D8D8D8(0, 0, 0);
  font-size: 1em;
  outline: none;
  box-shadow: #d8d8d8;
}

.forgot1 {
  color: #fff2f3;
  margin-top: 2%;
  float: right;
  text-decoration: underline;
}

.forgot1:hover {
  color: #fff2f3af;
}

.btn2 {
  margin-top: 5%;
  margin-left: 10%;
}

.click2 {
  height: 30px;
  border-radius: 3px;
  padding: 5px 2em;
  box-shadow: 0px 0px 0px 2px #fff2f3;
  text-decoration: none;
  color: #fff2f3;
  outline: none;
  background: none;
  border: none;
}
.click2:hover {
  color: #fff2f3;
  box-shadow: 0px 0px 0px 2px #fff2f3;
  cursor: pointer;
}

@media (max-width: 850px) {
  .image2 img {
    display: none;
  }
  .rightcontainere {
    position: absolute;
    background-color: #350619;
    width: 45%;
    height: 100vh;
    margin-left: 56%;
  }
}
</style>
