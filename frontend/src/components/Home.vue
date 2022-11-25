<template>
  <div class="bodyhome">
    <main class="main" id="main">
      <div class="main-form">
        <create-post></create-post>
      </div>
      <div class="main-line"></div>
      <post></post>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

import CreatePost from "../components/LayoutCreatePost.vue";
import Post from "../components/LayoutPost.vue";
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
      var mainContainer = document.getElementById("main");

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
    
  name: "Home",
  components: {
    CreatePost,
    Post,
  },
};

</script>

<style scoped>
.bodyhome {
  background-image: url("../assets/img_wallpaper/de905de2a7d6905f5572a193c1352aa2.jpg");
}
.main {
  max-width: 1000px;
  width: 100%;
  border: 1px solid rgb(0, 0, 0);
  margin-left: auto;
  margin-right: auto;
  background-color: #5c0000;
}
.main-form {
  margin-top: 60px;
  padding: 15px;
  border-bottom: 1px solid rgb(0, 0, 0);
}
.main-line {
  height: 10px;
  background-color: rgb(0, 0, 0);
}
</style>
