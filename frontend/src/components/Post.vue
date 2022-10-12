<template>
  <div class="body">
    <!-- contenair qui contient tout -->
    <div class="globalcontainer">
      <!-- contenair pour ajouter un post -->
      <div class="containeradd">
        <div class="addcontent">
          <div class="pdp">
            <img src="../assets/icon/logo.png" />
          </div>
          <!-- ajout du contenue-->
          <div class="content">
            <div class="post">
              <input
                class="text"
                type="text"
                required
                placeholder="Quoi de neuf ?"
              />
              <div class="footeradd">
                <!-- pour ajouter une image-->
                <div class="image-upload">
                  <label for="file-input">
                    <img src="../assets/icon/image-solid.svg" />
                  </label>
                  <input id="file-input" type="file" />
                </div>
                <!-- Pour poster le poste-->
                <div class="btnpost">
                  <button type="submit" class="click">POST</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- affichage du poste en gloabal-->
      <div class="containerpost">
        <div class="containercontent">
          <div class="pdp">
            <!-- photo de profile-->
            <img src="../assets/icon/logo.png" />
          </div>
          <div class="content">
            <!--Pseudo -->
            <div class="name">
              <h1>EnayL</h1>
              <!-- parametre -->
              <Button>
                <img class="option" src="../assets/icon/ellipsis-solid.svg" />
              </Button>
            </div>
            <!-- contenue écris du poste -->
            <div class="post">
              Bonjour voici le premier poste de la page POSTE des différents
              élèments que l'on peux retrouver ici. Merci de limiter les postes
              d'articles etc.. à environ 900 caratères
            </div>
            <!-- mettre ici une img pour afficher l'image -->
          </div>
        </div>
        <!-- footer du contenue -->
        <div class="containerview">
          <!-- photo de profile-->
          <img class="pdp2" src="../assets/icon/logo.png" />
          <!-- redirige vers la page post/id-->
          <a href="">Voir le thread</a>
          <!-- action que l'utilisateur peux faire -->
          <div class="useraction">
            <!-- ajouter un like-->
            <Button>
              <img class="btne" src="../assets/icon/comment-regular.svg" />
            </Button>
            <!-- redirige vers la page post/id-->
            <Button onclick="Toggle1()" id="btnh1">
              <img class="btn" src="../assets/icon/heart-regular.svg" />
            </Button>
          </div>
        </div>
      </div>
      <div class="containerpost">
        <div class="containercontent">
          <div class="pdp">
            <!-- photo de profile-->
            <img src="../assets/icon/logo.png" />
          </div>
          <div class="content">
            <!--Pseudo -->
            <div class="name">
              <h1>EnayL</h1>
              <!-- parametre -->
              <Button>
                <img class="option" src="../assets/icon/ellipsis-solid.svg" />
              </Button>
            </div>
            <!-- contenue écris du poste -->
            <div class="post">
              Bonjour voici le premier poste de la page POSTE des différents
              élèments que l'on peux retrouver ici. Merci de limiter les postes
              d'articles etc.. à environ 900 caratères
            </div>
            <!-- mettre ici une img pour afficher l'image -->
          </div>
        </div>
        <!-- footer du contenue -->
        <div class="containerview">
          <!-- photo de profile-->
          <img class="pdp2" src="../assets/icon/logo.png" />
          <!-- redirige vers la page post/id-->
          <a href="">Voir le thread</a>
          <!-- action que l'utilisateur peux faire -->
          <div class="useraction">
            <!-- ajouter un like-->
            <Button>
              <img class="btne" src="../assets/icon/comment-regular.svg" />
            </Button>
            <!-- redirige vers la page post/id-->
            <Button onclick="Toggle1()" id="btnh1">
              <img class="btn" src="../assets/icon/heart-regular.svg" />
            </Button>
          </div>
        </div>
      </div>
      <div class="containerpost">
        <div class="containercontent">
          <div class="pdp">
            <!-- photo de profile-->
            <img src="../assets/icon/logo.png" />
          </div>
          <div class="content">
            <!--Pseudo -->
            <div class="name">
              <h1>EnayL</h1>
              <!-- parametre -->
              <Button>
                <img class="option" src="../assets/icon/ellipsis-solid.svg" />
              </Button>
            </div>
            <!-- contenue écris du poste -->
            <div class="post">
              Bonjour voici le premier poste de la page POSTE des différents
              élèments que l'on peux retrouver ici. Merci de limiter les postes
              d'articles etc.. à environ 900 caratères
            </div>
            <!-- mettre ici une img pour afficher l'image -->
            <img class="pdp" src="../assets/img_wallpaper/login2.jpg" />
          </div>
        </div>
        <!-- footer du contenue -->
        <div class="containerview">
          <!-- photo de profile-->
          <img class="pdp2" src="../assets/icon/logo.png" />
          <!-- redirige vers la page post/id-->
          <a href="">Voir le thread</a>
          <!-- action que l'utilisateur peux faire -->
          <div class="useraction">
            <!-- ajouter un like-->
            <Button>
              <img class="btne" src="../assets/icon/comment-regular.svg" />
            </Button>
            <!-- redirige vers la page post/id-->
            <Button onclick="Toggle1()" id="btnh1">
              <img class="btn" src="../assets/icon/heart-regular.svg" />
            </Button>
          </div>
        </div>
      </div>
      <div class="containerpost">
        <div class="containercontent">
          <div class="pdp">
            <!-- photo de profile-->
            <img src="../assets/icon/logo.png" />
          </div>
          <div class="content">
            <!--Pseudo -->
            <div class="name">
              <h1>EnayL</h1>
              <!-- parametre -->
              <Button>
                <img class="option" src="../assets/icon/ellipsis-solid.svg" />
              </Button>
            </div>
            <!-- contenue écris du poste -->
            <div class="post">
              Bonjour voici le premier poste de la page POSTE des différents
              élèments que l'on peux retrouver ici. Merci de limiter les postes
              d'articles etc.. à environ 900 caratères
            </div>
            <!-- mettre ici une img pour afficher l'image -->
            <img class="pdp" src="../assets/img_wallpaper/login2.jpg" />
          </div>
        </div>
        <!-- footer du contenue -->
        <div class="containerview">
          <!-- photo de profile-->
          <img class="pdp2" src="../assets/icon/logo.png" />
          <!-- redirige vers la page post/id-->
          <a href="">Voir le thread</a>
          <!-- action que l'utilisateur peux faire -->
          <div class="useraction">
            <!-- ajouter un like-->
            <Button>
              <img class="btne" src="../assets/icon/comment-regular.svg" />
            </Button>
            <!-- redirige vers la page post/id-->
            <Button onclick="Toggle1()" id="btnh1">
              <img class="btn" src="../assets/icon/heart-regular.svg" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPage",
  props: {},
};
</script>
<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300&display=swap");
.body {
  font-family: "Raleway", sans-serif;
  padding: 0% 10%;
  margin: 0%;
  height: auto;
  background-color: #64110b;
  background-image: url("../assets/img_wallpaper/2.jpg");
  background-position: 84% 10%;
}
.globalcontainer {
  background-color: #838383da;
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.containerpost {
  margin-top: 0.2%;
  width: 100%;
  background-color: hsla(0, 0%, 0%, 0.664);
  padding: 2% 2%;
}

.containerview {
  display: flex;
  width: 100%;
}

.pdp2 {
  margin-left: 2%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
}
.containerview a {
  font-family: "Titillium Web", sans-serif;
  color: #979394;
  font-size: 100%;
  margin-top: 0.6%;
  margin-left: 1%;
  cursor: pointer;
  text-decoration: underline;
}

.containerview a:hover {
  color: #979394d3;
  cursor: pointer;
  text-decoration: none;
}

.containercontent {
  display: inline-flex;
  background-color: #dabdbb00;
  width: 100%;
  padding-bottom: 1%;
}

.pdp img {
  width: 80px;
  height: 80px;
  cursor: pointer;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
}

.content {
  display: flex;
  flex-direction: column;
  min-height: 20vh;
  margin-left: 2%;
  width: 100%;
}
.name {
  display: flex;
  width: 100%;
}

.name h1 {
  font-family: "Titillium Web", sans-serif;
  color: white;
  font-size: 250%;
}

.post {
  margin-top: 1%;
  width: 100%;
  font-family: "Titillium Web", sans-serif;
  color: white;
  max-width: 98%;
}

.wall img {
  margin-top: 1%;
  background-repeat: no-repeat;
  max-width: 95%;
  min-width: 99%;
  min-height: 40vh;
  max-height: 60vh;
  background-size: cover;
  border: solid 1px white;
}

.useraction {
  margin-top: -1%;
  margin-left: auto;
}

.containerview button {
  border: none;
  background: transparent;
  outline: none;
  bottom: -10%;
}

.btn {
  width: 55px;
  height: 55px;
  outline: none;
  border: none;
}

.btne {
  width: 30px;
  height: 30px;
  outline: none;
  border: none;
  margin-left: 20%;
}

.btn i:hover {
  cursor: pointer;
  transform: translateY(4px);
}
.btne i:hover {
  cursor: pointer;
  transform: translateY(4px);
}

.option:hover {
  cursor: pointer;
  transform: translateY(4px);
}
.option:active {
  transform: translateY(4px);
}

.btn:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.btne:active {
  transform: translateY(4px);
}

.option {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.name button {
  border: none;
  background: transparent;
  outline: none;
  margin-left: auto;

  /* ADD CONTAINER*/
}

.containeradd {
  margin-top: 0.2%;
  width: 100%;
  background-color: hsla(0, 0%, 0%, 0.664);
  padding: 2% 2%;
}
.addcontent {
  width: 100%;
  height: 22vh;
  display: flex;
}

.text {
  color: white;
  caret-color: #666;
  margin-top: 3%;
  width: 100%;
  height: 10vh;
  border: none;
  background: transparent;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 30px 20px -20px;
}

::placeholder {
  font-size: 1.5em;
  font-family: "Titillium Web", sans-serif;
}

.image-upload > input {
  display: none;
}
.image-upload {
  margin-top: 2%;
}
.image-upload img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.image-upload img:hover {
  transform: translateY(4px);
}

.footeradd {
  display: flex;
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

.btnpost {
  margin-top: 2%;
  margin-left: auto;
}
.btnpost button:hover {
  transform: translateY(4px);
}
@media only screen and (max-width: 860px) {
  .content {
    display: flex;
    flex-direction: column;
    min-height: 20vh;
    margin-left: 2%;
    width: 100%;
    max-width: 80%;
  }
}
</style>
