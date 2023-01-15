<template>
    <a href="./home" style="color: white;"> GO BACK HOME</a>
    <div id="containerpost"></div>
</template>
<script>
import axios from "axios";
import LayoutHeader from "./LayoutHeader.vue";

export default {
  methods: {

    async getPosts() {
      //récupération des données
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      const resUser = await axios.get(`http://localhost:3000/user/?username=${user}`)
      
          

      const res = await axios.get("http://localhost:3000/posts/", {

        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const json = JSON.stringify(res);
      const jsonData = JSON.parse(json);
      var mainContainer = document.getElementById("containerpost");

      for (let i = 0; i < jsonData.data.length; i++) {
        const publi = jsonData.data[i];
        const titre = publi.titre;
        let contenu = publi.contenu;
        const owner = publi.owner;

        contenu = contenu.replace(/\n/g, "<br>");

        const container = document.createElement("div");

        const pp = document.createElement("img"); // pp
        pp.src = "../assets/img_wallpaper/heart.png";

        const divtest = document.createElement("div"); // div de la pp

        const h1 = document.createElement("p"); // creation element titre
        h1.innerHTML = titre + ":";
        const div2 = document.createElement("p"); // creation element contenu

        div2.innerHTML = contenu;
        const div3 = document.createElement("p"); //creation element owner
        div3.class = "owner";
        div3.innerHTML = "Par " + owner;
        mainContainer.appendChild(container);

        div2.setAttribute("style", "margin: 10px;");
        div3.setAttribute("style", "margin: 10px; font-size: x-small;");
        divtest.setAttribute("style", "display: flex; flex-direction: row;");

        const supp = document.createElement("button"); // creation boutton supprimer
        supp.id = "supprimer";
        supp.innerHTML = "X";


        const modif = document.createElement("a"); // creation boutton supprimer
        modif.id = "modif";
        modif.innerHTML = "Modifier";

        divtest.setAttribute("type", "submit");

        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        supp.addEventListener("click", function handleClick() {
          
            alert("vous avez supprimé une publication");
            axios
              .delete(`http://localhost:3000/posts/delete/?titre=${titre}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              .then(() => {
                window.location.reload(true);

                console.log(titre);
              })
              .catch((err) => {
                console.log(err);
              });
        });

        modif.addEventListener("click", function handleClick() {
            modif.setAttribute("href", "/updatePost");
            window.localStorage.setItem("titre", titre);
        });

        container.setAttribute(
          "style",
          "background-color: rgba(9,9,9, 0.5); min-height: 150px; margin: 15px; display:flex; flex-direction: column;"
        );

        h1.setAttribute(
          "style",
          "font-size: x-large; margin: 10px; text-decoration: underline dotted ;margin-right:auto; margin-left:auto;"
        );

        supp.setAttribute(
          "style",
          "width:5%; margin-left:95%; padding: 5px; text-align: center; background-color: rgba(0,0,0,0); border: none; font-size: x-large;"
        );

        div2.setAttribute("style", "margin: 10px;");

        div3.setAttribute("style", "margin: 10px; font-size: x-small;");

        divtest.setAttribute("style", "display: flex; flex-direction: row;");

        container.appendChild(divtest);
        container.appendChild(h1);
        divtest.appendChild(pp);
        divtest.appendChild(supp);
        divtest.appendChild(modif);

        container.appendChild(div2);
        container.appendChild(div3);
      }
   
    }
  },

  mounted() {
    this.getPosts();
  },
  name: "PostPage",
  components: {
    LayoutHeader,
  },
};</script>
<style></style>