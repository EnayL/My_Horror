<template>
  <layout-header></layout-header>
  <div v-for="(post, index) in posts">
    <button id="select">Change selection</button>
  <div id="containerpost" >
    <div id="post">
      <div id="interact">
        <button id="supprimer">X</button>
        <a href="" type="submit" @click="modif()" id="modif" >---</a>
      </div>
      <p id="title">{{ post.titre }}</p>
      <p id="content">{{ post.contenu }}</p>
      <div id="ownerInfos">
        <img src="" alt="">
        <p id="owner">{{ post.owner }}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import LayoutHeader from "./LayoutHeader.vue";

export default {
  data(){
        return {
            posts: [],
            user:{}
        };
    },
  methods: {
    async modif(titre, owner) {
      let resUser = await axios.get(`http://localhost:3000/user/?username=${owner}`)

      if (owner == resUser.username) {
        modif.setAttribute("href", "/updatePost");
        window.localStorage.setItem("titre", titre);

      } else {
        alert(
          "Vous n'avez pas le droit de modifier une publication qui n'est pas à vous."
        );
      }
    },
    async suppr(titre, owner) {
      let resUser = await axios.get(`http://localhost:3000/user/?username=${owner}`)

      if (owner != resUser.username) {
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
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    async getPosts() {
      //récupération des données
      const token = localStorage.getItem("token");
      let res = await axios.get("http://localhost:3000/posts/", {

        headers: {
          "Authorization": `Bearer ${token}`
        }
      });


      for (let i = 0; i < res.data.length; i++){        

        res.data[i].contenu = res.data[i].contenu.replace(/\n/g, "<br>");
        if (res.data[i].photo === undefined){
            res.data[i].photo = "/src/assets/icon/no_pic.webp"
          }
      }
      

      this.posts = res.data;        
      const user = localStorage.getItem("user");

      let resUser = await axios.get(`http://localhost:3000/user/?username=${user}`)
      const select = document.getElementById("select"); 
      select.addEventListener("click", function handleClick() {
        window.location="http://localhost:3001/Selection";
      });
      const role = resUser.data.role;
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

#interact{
  display: flex; 
  flex-direction: row;
}
#select{
  color: white;
  background-color: rgba(0, 0, 0, 0.5); 
  font-size: large;
  padding: 10px;
  margin-left: 42%;
  border: none;

}

#ownerInfos img{
  height:40px;
  width:40px;
  border-radius:50%; 
  margin-left:10px;
}

#ownerInfos{
  display: flex; 
  flex-direction: row;
}
#post{
  background-color: rgba(9,9,9, 0.5); 
  min-height: 150px; 
  margin: 20px; 
  display:flex; 
  flex-direction: column;
}
#supprimer{
  color: white; width:5%; 
  margin-left:auto; 
  padding: 1px; 
  text-align: center; 
  background-color: rgba(0,0,0,0); 
  border: none; 
  font-size: x-large; 
  cursor:pointer; 
}

#title{
  font-size: x-large; 
  margin: 5px; 
  text-decoration: underline dotted ;
  margin-right:auto; 
  margin-left:auto;
}

#modif{
  color: white;  
  font-size: x-large; 
  cursor:pointer;
}

#content{
  margin: 50px; 
  font-size: 20px;
}

#owner{
  margin: 25px; 
  font-size: small; 
}
</style>
