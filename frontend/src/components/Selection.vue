<template>
  <h1></h1>
  <a href="./home" style="color: white"> Home</a>
  <br /><br /><br /><br /><br />
  <p style="font-size: 20px">
    Page Admin: Appuyez sur "X" pour supprimer définitivement une publication et
    sur Add pour l'ajouter à la selection et sur Remove pour l'enlever
  </p>
  <div
    id="containerpost"
    style="display: flex; flex-direction: row; flex-wrap: wrap"
  ></div>
</template>
<script>
import axios from "axios";
import LayoutHeader from "./LayoutHeader.vue";

export default {
  data() {
    return {
      Post: { select: "" },
    };
  },
  methods: {
    async getPosts() {
      //récupération des données
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      const resUser = await axios.get(
        `http://localhost:3000/user/?username=${user}`
      );

      if (resUser.data.role != "admin") {
        alert(
          "Vous n'avez pas le rôle d'admin, vous n'etes donc pas autorisé à être sur cette page"
        );
        window.location = "http://localhost:3001/home";
      }

      const res = await axios.get("http://localhost:3000/posts/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = JSON.stringify(res);
      const jsonData = JSON.parse(json);
      var mainContainer = document.getElementById("containerpost");

      for (let i = 0; i < jsonData.data.length; i++) {
        const publi = jsonData.data[i];
        const titre = publi.titre;
        let contenu = publi.contenu;
        let select = publi.select;

        contenu = contenu.replace(/\n/g, "<br>");

        const container = document.createElement("div");
        const divtest = document.createElement("div"); // div de la pp

        const h1 = document.createElement("p"); // creation element titre
        h1.innerHTML = titre + ":";
        const div2 = document.createElement("p"); // creation element contenu

        div2.innerHTML = contenu;
        mainContainer.appendChild(container);

        div2.setAttribute("style", "margin: 10px;");
        divtest.setAttribute("style", "display: flex; flex-direction: row;");

        const supp = document.createElement("button"); // creation boutton supprimer
        supp.id = "supprimer";
        supp.setAttribute("style", "cursor :pointer;");
        supp.innerHTML = "X";

        const add = document.createElement("button"); // creation boutton supprimer
        add.id = "select";
        add.setAttribute("style", "cursor :pointer;");
        console.log(select);
        add.innerHTML = "Add";

        if (select != "non") {
          add.innerHTML = "Remove";
        }

        divtest.setAttribute("type", "submit");

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
        let link = "";

        add.addEventListener("click", function handleClick() {
          let value = "oui";
          link = `http://localhost:3000/posts/select/?titre=${titre}`;
          // console.log(select);

          if (select != "non") {
            // console.log("pouet");
            value = "non";
            link = `http://localhost:3000/posts/remove/?titre=${titre}`;
          }

          // console.log("value : " + value);
          let newPost = {
            select: value,
          };
          //alert("vous avez ajouté une publication à la sélection");
          axios
            .put(link, newPost)
            .then((res) => {
              console.log(res);
              // this.$router.push("/Selection");
            })
            .catch((error) => {
              console.log(error);
            });
        });

        container.setAttribute(
          "style",
          "background-color: rgba(9,9,9, 0.5); min-height: 150px;max-height: 250px; overflow-x: hidden; margin: 15px; display:flex; flex-direction: column; width: 20%;"
        );

        h1.setAttribute(
          "style",
          "font-size: x-large; margin: 10px; text-decoration: underline dotted ;margin-right:auto; margin-left:auto;"
        );

        supp.setAttribute(
          "style",
          "width:5%; margin-left:65%;margin-right:15px; padding: 5px; text-align: center; background-color: rgba(0,0,0,0); border: none; font-size: x-large; color: white;"
        );
        add.setAttribute(
          "style",
          "width:5%; padding: 5px; text-align: center; background-color: rgba(0,0,0,0); border: none; font-size: x-large; color: white;"
        );

        div2.setAttribute("style", "margin: 10px; font-size: 15px;");

        divtest.setAttribute("style", "display: flex; flex-direction: row;");

        container.appendChild(divtest);
        container.appendChild(h1);
        divtest.appendChild(supp);
        divtest.appendChild(add);
        container.appendChild(div2);
      }
    },
  },

  mounted() {
    this.getPosts();
  },
  name: "Selection",

  components: {
    LayoutHeader,
  },
};
</script>
<style></style>
