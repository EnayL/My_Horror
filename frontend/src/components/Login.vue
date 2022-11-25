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
          <div class="btn">
            <button type="submit" class="click">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import "./styles/Login.css";

export default {
  name: "LoginPage",
  props: {},
  method: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

