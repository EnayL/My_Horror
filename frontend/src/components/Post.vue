<template>
  <div class="body">
    <!-- contenair qui contient tout -->
      <div class="containerpost">
        
      </div>
    </div>
  
</template>

<script>
import axios from 'axios';

export default {
    methods: {
      async getData() {
        const res = await fetch("http://localhost:3000/posts");
        const finalRes = await res.json("titre");
        console.log(finalRes);
      },

      async getPosts(){ //récupération des données
      const res = await axios.get('http://localhost:3000/posts');
      const json = JSON.stringify(res);
      const jsonData = JSON.parse(json);
      var mainContainer = document.getElementById("containerpost");

        for (let i = 0; i < jsonData.data.length; i++) {
            const publi = jsonData.data[i];
            const titre = publi.titre;
            const contenu = publi.contenu;
            const owner = publi.owner;
            var div = document.createElement("h1");
            div.class="titre";
            div.innerHTML =  titre ;
            var div2 = document.createElement("p");
            div.class="contenu";
            div2.innerHTML =  contenu ;
            mainContainer.appendChild(div);
            mainContainer.appendChild(div2);
        }
          
      }
    },
    mounted() {
      this.getPosts();
    },
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
