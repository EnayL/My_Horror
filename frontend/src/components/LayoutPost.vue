<template>
  <div class="bodypost">
    <div class="post" style="cursor: pointer">
      <div class="">
      </div>
    
        <div id="containerpost"></div>

        <div class="post-main__bottom">
          <img class="post-main__like" src="../assets/icon/heart-regular.svg" />
        </div>
      </div>
    </div>
  
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async getData() {
      const res = await fetch("http://localhost:3000/posts");
      const finalRes = await res.json("titre");
      console.log(finalRes);
    },

    

    async getPosts() {
      //récupération des données
      const token = localStorage.getItem("token")
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

        var pp = document.createElement("img"); // pp
        pp.src = "../assets/icon/heart-regular.svg";
        pp.class = "post-avatar__img"

        var div = document.createElement("div"); // div de la pp
        div.class = "post__avatar"

        div.appendChild(pp);


        var h1 = document.createElement("h1"); // creation element titre
        h1.class = "titre";
        h1.innerHTML = titre;
        var div2 = document.createElement("p"); // creation element contenu
        div2.class = "contenu";
        div2.innerHTML = contenu;
        var div3 = document.createElement("h3"); //creation element owner
        div3.class = "owner";
        div3.innerHTML = owner;

        mainContainer.appendChild(div);
        mainContainer.appendChild(div3);
        mainContainer.appendChild(h1);
        mainContainer.appendChild(div2);

        var supp = document.createElement("button"); // creation boutton supprimer
        supp.id = "supprimer";
        supp.innerHTML = "X";
        const token = localStorage.getItem("token")
        const user = localStorage.getItem("user")
        supp.addEventListener('click', function handleClick() {
          if (owner != user){
            alert("Vous n'avez pas le droit de supprimer une publication qui n'est pas à vous.")
          }
          else {
            alert("vous avez supprimé une publication")
          axios.delete(`http://localhost:3000/posts/delete/?titre=${titre}`, {
            headers:{
              "Authorization":`Bearer ${token}`
            }
          })
          .then(res => {
            console.log(titre);
          })
          .catch(err => {
              console.log(err);
          });
          }

          
        });
        mainContainer.appendChild(supp);
      }
    },
  },
  mounted() {
    this.getPosts();
  },
  name: "PostPage",
  props: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300&display=swap");
.bodypost {
  font-family: "Titillium Web", sans-serif;
  padding: 0% 10%;
  margin: 0%;
  height: auto;
  background-position: 84% 10%;
  width: 100%;
}
.post {
  display: flex;
  padding: 15px;
  border-top: 1px solid #000000;
}
.post__avatar {
  margin-right: 15px;
}

.post-avatar__img {
  height: 50px;
  width: 50px;
  border-radius: 9999px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 2px inset;
}

.post-main {
  display: flex;
  flex-direction: column;
}
.post-main__user {
  position: relative;
}
.post-main__username {
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3125;
  overflow-wrap: break-word;
}
.post-main__nickname {
  margin-left: 1%;
  color: rgb(85, 85, 85);
}
.post-main__date {
  font-size: 15px;
  font-weight: 400;
  color: rgb(74, 74, 74);
  line-height: 1.3125;
  overflow-wrap: break-word;
  margin-left: 1%;
}
.post-delete {
  position: absolute;
  right: 0;
  font-size: 30px;
  cursor: pointer;
  border-radius: 9999px;
  transition: 0.2s ease-in-out;
  width: 2%;
}
.post-delete:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.post-main__text {
  margin-top: 2%;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3125;
  overflow-wrap: break-word;
}
.post-main__img {
  width: 100%;

  border: 1px solid rgb(255, 255, 255);
  border-radius: 16px;
  margin-top: 1%;
}
.post-main__bottom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.post-main__like {
  transform: scale(1);
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-top: 2%;
  width: 5%;
}
.post-main__like-count {
  margin-left: 1%;
}
.post-main__like:hover {
  transform: scale(1.2);
}

.post:hover {
  background-color: #4c0000;
}
</style>
