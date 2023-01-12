<template>
    <a href="./home" style="color: white;"> GO BACK HOME</a>
    <div id="containerpost">
    </div>  
</template>

<script>
import axios from "axios";
import LayoutHeader from "./LayoutHeader.vue";

export default {
  methods: {
    async getData() {
      const res = await fetch("http://localhost:3000/posts");
      const finalRes = await res.json("titre");
      console.log(finalRes);
    },

    async getPosts() {
      //récupération des données
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:3000/posts/",{
        
        headers:{
           "Authorization":`Bearer ${token}`
        }
      });
      const json = JSON.stringify(res);
      const jsonData = JSON.parse(json);
      var mainContainer = document.getElementById("containerpost");

      for (let i = 0; i < jsonData.data.length; i++) {
        const publi = jsonData.data[i];
        const titre = publi.titre;
        const contenu = publi.contenu;
        const owner = publi.owner;

        var container = document.createElement("div");

        var pp = document.createElement("img"); // pp
        pp.src = "../assets/img_wallpaper/heart.png";

        var div = document.createElement("div"); // div de la pp

        var h1 = document.createElement("p"); // creation element titre
        h1.innerHTML = titre + ":";
        var div2 = document.createElement("p"); // creation element contenu

        div2.innerHTML = contenu;
        var div3 = document.createElement("p"); //creation element owner
        div3.class = "owner";
        div3.innerHTML = "Par " + owner;
        mainContainer.appendChild(container);

        div2.setAttribute("style", "margin: 10px;");
        div3.setAttribute("style", "margin: 10px; font-size: x-small;");
        div.setAttribute("style", "display: flex; flex-direction: row;");

        var supp = document.createElement("button"); // creation boutton supprimer
        supp.id = "supprimer";
        supp.innerHTML = "X";

        var modif = document.createElement("button"); // creation boutton supprimer
        modif.id = "supprimer";
        modif.innerHTML = "Modifier";

        // container.setAttribute(
        //   "style",
        //   "background-color: rgba(9,9,9, 0.5); min-height: 150px; margin: 15px; display:flex; flex-direction: column;"
        // );
        // h1.setAttribute(
        //   "style",
        //   "font-size: x-large; margin: 10px; text-decoration: underline dotted ;margin-right:auto; margin-left:auto;"
        // );
        // supp.setAttribute(
        //   "style",
        //   "width:5%; margin-left:95%; padding: 5px; text-align: center; background-color: rgba(0,0,0,0); border: none; font-size: x-large;"
        // );

        // modif.setAttribute(
        //   "style",
        //   "width:5%; margin-left:95%; padding: 5px; text-align: center; background-color: rgba(0,0,0,0); border: none; font-size: x-large;"
        // );
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        supp.addEventListener("click", function handleClick() {
          if (owner != user) {
            alert(
              "Vous n'avez pas le droit de supprimer une publication qui n'est pas à vous."
            );
          } else {
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
          }
        });

        modif.addEventListener("click", function handleClick() {
          if (owner != user) {
            alert(
              "Vous n'avez pas le droit de modifier une publication qui n'est pas à vous."
            );
          } else {
            this.$router.push("/updatePost");

          }
        
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

        modif.setAttribute(
          "style",
          "width:5%; margin-left:95%; padding: 5px; text-align: center; background-color: rgba(0,0,0,0); border: none; font-size: x-large;"
        );

        div2.setAttribute("style", "margin: 10px;");

        div3.setAttribute("style", "margin: 10px; font-size: x-small;");

        div.setAttribute("style", "display: flex; flex-direction: row;");

        container.appendChild(div);
        container.appendChild(h1);
        div.appendChild(pp);
        div.appendChild(supp);
        div.appendChild(modif);

        container.appendChild(div2);
        container.appendChild(div3);
      }
    },
  },
  mounted() {
    this.getPosts();
  },
  name: "PostPage",
  components: {
    LayoutHeader,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300&display=swap");
/* style="cursor: pointer" */

.post__avatar {
  margin-right: 20%;
}

.post-avatar__img {
  height: 50px;
  width: 50px;
  border-radius: 9999px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 2px inset;
}
</style>
