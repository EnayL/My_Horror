<template>
  <div class="globalcontainer">
    <div class="rightcontainer">
      <div class="rightcontent">
        <img class="image" src="../assets/icon/logo.png" style="" />
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
        <div class="tease">
          <h1>Éteignez vos lumières,</h1>
          <h1>Vous vous préparez à rentrer dans un autre monde !</h1>
        </div>
        <img src="../assets/img_wallpaper/login2.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "RegisterPage" };
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
  height: 100vh;
}

.tease {
  position: absolute;
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
  background-color: #64110b;
  width: 30%;
  height: 100vh;
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

.forgot:hover {
  color: #979394;
}

.btn {
  margin-top: 10%;
  margin-left: 6%;
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
