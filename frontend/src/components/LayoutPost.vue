<template>
  <layout-header></layout-header>
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

        let resUser = await axios.get(`http://localhost:3000/user/?username=${owner}`)

        let photo = resUser.data.photo;

        contenu = contenu.replace(/\n/g, "<br>");

        const container = document.createElement("div");

        const pp = document.createElement("img"); // pp
        pp.src = photo;

        if (photo === undefined){
          pp.src = "/src/assets/icon/no_pic.webp"
        }

        const divtest = document.createElement("div"); 
        
        const h1 = document.createElement("p"); // creation element titre
        h1.innerHTML = titre + ":";
        const div2 = document.createElement("p"); // creation element contenu

        div2.innerHTML = contenu;
        const div3 = document.createElement("p"); //creation element owner
        div3.class = "owner";
        div3.innerHTML = "Par " + owner;
        mainContainer.appendChild(container);
        const div4 = document.createElement("div");


        div2.setAttribute("style", "margin: 10px; font-size: 5px;");
        div3.setAttribute("style", "margin: 10px; font-size: x-small;");
        div4.setAttribute("style", "display: flex; flex-direction: row;");

        divtest.setAttribute("style", "display: flex; flex-direction: row;");

        const supp = document.createElement("button"); // creation boutton supprimer
        supp.id = "supprimer";
        supp.innerHTML = "X";


        const modif = document.createElement("a"); // creation boutton modifier
        modif.id = "modif";
        (modif.innerHTML = "---"), modif.setAttribute("type", "submit");

        divtest.setAttribute("type", "submit");
        divtest.setAttribute("id", "divtest");


        const token = localStorage.getItem("token");
        
        supp.addEventListener("click", function handleClick() {
          if (owner != user) {
            alert(
              "Vous n'avez pas le droit de supprimer une publication qui n'est pas à vous."
            );
          } else {
            if (popup == true) {
            alert("vous avez supprimé une publication");
            window.location="http://localhost:3001/Selection";
             //For an example, but you could change the URL of the website to another on, or do whatever you want here...
          } else {
                  return false; //or open another popup, etc, you choose what you need over the function...
            }
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
          if (owner == user) {
            modif.setAttribute("href", "/updatePost");
            window.localStorage.setItem("titre", titre);

          } else {
            alert(
              "Vous n'avez pas le droit de modifier une publication qui n'est pas à vous."
            );
          }

        });


        pp.setAttribute(
          "style",
          "height:40px;width:40px;border-radius:50%; margin-left:10px;"
        );
        container.setAttribute(
          "style",
          "background-color: rgba(9,9,9, 0.5); min-height: 150px; margin: 20px; display:flex; flex-direction: column;"
        );

        h1.setAttribute(
          "style",
          "font-size: x-large; margin: 5px; text-decoration: underline dotted ;margin-right:auto; margin-left:auto;"
        );

        supp.setAttribute(
          "style",
          "color: white; width:5%; margin-left:auto; padding: 1px; text-align: center; background-color: rgba(0,0,0,0); border: none; font-size: x-large; cursor:pointer; "
        );

       modif.setAttribute(
          "style",
          "color: white;  font-size: x-large; cursor:pointer; "
        );

        div2.setAttribute("style", "margin: 50px; font-size:20px;");

        div3.setAttribute("style", "margin: 25px; font-size: small;");

        divtest.setAttribute("style", "display: flex; flex-direction: row;");

        container.appendChild(divtest);
        container.appendChild(h1);
        divtest.appendChild(supp);
        divtest.appendChild(modif);
        




        container.appendChild(div2);
        div4.appendChild(pp);

        div4.appendChild(div3);
        container.appendChild(div4);

      }

      const select = document.createElement("button"); 
    select.id = "select";
    select.innerHTML = "Add to selection";
    select.addEventListener("click", function handleClick() {
      window.location="http://localhost:3001/Selection";
    });

    select.setAttribute(
      "style",
      "color: white; font-size: x-large;"
    );
    let user = localStorage.getItem("user");

    let resUser = await axios.get(`http://localhost:3000/user/?username=${user}`)

    const role = resUser.data.role;
    console.log(role);
    var divtest = document.getElementById("divtest");

    divtest.appendChild(select);

    if (role != "admin") {
      console.log("pouet");
      select.style.display = "none";
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

.main {
  max-width: 1095px;
  width: 100%;
  border: 1px solid rgb(0, 0, 0);
  margin-left: auto;
  margin-right: auto;
  background-color: #350619;
}
</style>
