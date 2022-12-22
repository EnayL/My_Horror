<!-- <template>
    <input type="checkbox" id="slasher" value="slasher" v-model="GenreChoosed">
    <label for="slasher">slasher</label>
    <input type="checkbox" id="Histoire" value="Histoire" v-model="GenreChoosed">
    <label for="Histoire">Histoire</label>
    <input type="checkbox" id="Paranormal" value="Paranormal" v-model="GenreChoosed">
    <label for="Paranormal">Paranormal</label>
    <br>
    <div class="btn">
        <button id="button" type="submit" @click="handleInput">Search</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "FiltredSearch",

  data() {
    return{
        GenreChoosed: []
    }
  },
  methods: {
    handleInput() {
        let genre = this.GenreChoosed[0];
        console.log(genre);
        const token = localStorage.getItem("token")

        axios.get(`http://localhost:3000/posts/?genre=${genre}`,{
            headers:{
           "Authorization":`Bearer ${token}`
        }
        })
        .then((res) => {
            const json = JSON.stringify(res);
            const jsonData = JSON.parse(json);
            for (let i = 0; i < jsonData.data.length; i++) {
                console.log(jsonData.data[i]);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    },
  },
 
};
</script> -->

<template>
    <div id="containerpost">
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


        var h1 = document.createElement("p"); // creation element titre
        h1.class = "titre";
        h1.innerHTML = titre;
        var div2 = document.createElement("p"); // creation element contenu
        div2.class = "contenu";
        div2.innerHTML = contenu;
        var div3 = document.createElement("p"); //creation element owner
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
/* style="cursor: pointer" */

.titre{
  font-size: xx-large;
}
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
