<template>
  <LayoutHeader></LayoutHeader>
  <div class="bodyhome">
    <main class="main" id="main">
      <div class="main-form">
        <p>Notre selection du mois:</p>
        <br /><br />
        <p id="selection"></p>
        <div class="container_selec" v-for="(post) in selection">
          <div class="post">
            <p class="titre">{{ post.titre }}</p>
            <p class="contenu">{{ post.contenu }}</p>
            <p class="owner">{{ post.owner }}</p>
          </div>          
        </div>
      </div>
      <div class="main-line"></div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import LayoutHeader from "./LayoutHeader.vue";
import axios from "axios";

export default {
  data(){
        return {
            selection: [],
        };
    },
  methods: {
    async getSelection() {
      const res = await axios.get("http://localhost:3000/posts/selection/");
      const json = JSON.stringify(res);
      const jsonData = JSON.parse(json);
      var mainContainer = document.getElementById("selection");
      this.selection = res.data;
      if (jsonData.data.length == 0) {
        mainContainer.innerHTML =
          "Pour le moment, aucune publications n'a retenu notre attention";
       } 
      //   for (let i = 0; i < jsonData.data.length; i++) {
      //     // const publi = jsonData.data[i];
          // const titre = publi.titre;
          // let contenu = publi.contenu;
          // let select = publi.select;
          // const owner = publi.owner;

          // const div3 = document.createElement("p"); //creation element owner
          // div3.class = "owner";
          // div3.innerHTML = "Par " + owner;
          // contenu = contenu.replace(/\n/g, "<br>");

          // const divtest = document.createElement("div"); // div de la pp

          // const h1 = document.createElement("p"); // creation element titre
          // h1.innerHTML = titre + ":";
          // const div2 = document.createElement("p"); // creation element contenu
          const div4 = document.createElement("div");

          // div2.innerHTML = contenu;

          div2.setAttribute("style", "margin: 10px;");
          pp.setAttribute(
            "style",
            "height:40px;width:40px;border-radius:50%; margin-left:10px;"
          );
          div3.setAttribute("style", "margin: 25px; font-size: small;");
          div4.setAttribute("style", "display: flex; flex-direction: row;");

          divtest.setAttribute("style", "display: flex; flex-direction: row;");
          divtest.setAttribute("type", "submit");


          div4.appendChild(div3);

          mainContainer.setAttribute(
            "style",
            "background-color: rgba(9,9,9, 0.5); min-height: 350px;max-height: 350px; overflow-x: hidden; margin: 15px; display:flex; flex-direction: column; width: 80%;"
          );

          h1.setAttribute(
            "style",
            "font-size: x-large; margin: 10px; text-decoration: underline dotted ;margin-right:auto; margin-left:auto;"
          );

          div2.setAttribute("style", "margin: 10px; font-size: 15px;");

          divtest.setAttribute("style", "display: flex; flex-direction: row;");

          mainContainer.appendChild(divtest);
          mainContainer.appendChild(h1);
          mainContainer.appendChild(div2);
          mainContainer.appendChild(div4);
    },
  },
  name: "Home",
  mounted() {
    this.getSelection();
  },
  components: {
    LayoutHeader,
  },
};
</script>

<style scoped>
.bodyhome {
  background-color: #111111;
}
p {
  font-size: 20px;
  white-space: pre-line;
}

.titre {
  font-size: x-large;
  margin: 5px;
  text-decoration: underline dotted;
  margin-right: auto;
  margin-left: auto;
}

.main {
  width: 80vw;
  border: 1px solid rgb(0, 0, 0);
  margin-left: auto;
  margin-right: auto;
  background-color: #350619;
}
.main-form {
  margin-top: 60px;
  padding: 15px;
  border-bottom: 1px solid rgb(0, 0, 0);
}
.main-line {
  height: 5px;
  background-color: rgb(254, 254, 254);
}

.post{
  background-color: rgba(9,9,9, 0.5); 
  min-height: 150px; 
  max-height: 500px;
  margin: 20px; 
  display:flex; 
  flex-direction: column;
  overflow:scroll;
  scrollbar-width: thin;
  scrollbar-color: rgba(0,0,0,0.9) rgba(0,0,0,0.3);
}

/* .selection{
  display
} */

</style>
