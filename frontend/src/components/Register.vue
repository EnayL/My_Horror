<template>
  <div class="globalcontainer" style="flex-direction: row">
    <div class="rightcontainer">
      <div class="rightcontent">
        <img class="image" src="../assets/icon/logo.webp" />
        <h1 class="welcom">Rentrez dans notre Royaume !</h1>

        <form class="formlogin">
          <div class="formlabel">
            <label for="email">Nom</label>
            <div class="forminput">
              <input class="input" type="text" id="nom" required />
            </div>
          </div>

          <div class="formlabel">
            <label for="prenom">Prénom </label>
            <div class="forminput">
              <input class="input" type="text" id="email" required />
            </div>
          </div>

          <div class="formlabel">
            <label for="email">Adresse email</label>
            <div class="forminput">
              <input class="input" type="text" id="email" required />
            </div>
          </div>

          <div class="formlabel">
            <label for="password">Mot de passe</label>
            <div class="forminput">
              <input class="input" type="text" id="password" required />
            </div>
          </div>
          <div class="formlabel">
            <label for="password">Mot de passe</label>
            <div class="forminput">
              <input class="input" type="text" id="password" required />
            </div>
            <a href="" class="forgot">Déjà un compte?</a>
          </div>
          <div class="btn">
            <button type="submit" class="click">Register</button>
          </div>
        </form>
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

import "./styles/Register.css";

export default { name: "RegisterPage" };
</script>

