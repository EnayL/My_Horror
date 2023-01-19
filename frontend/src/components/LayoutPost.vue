<template>
  <button id="select">Change selection</button>
  <div v-for="(post, index) in posts">
  <div id="containerpost" >
    <div id="post">
      <div id="interact">
        <button id="supprimer" @click="suppr(post.titre, post.owner)">X</button>
        <a href="" type="submit" @click="modif(post.titre, post.owner)" id="modif" >---</a>
      </div>
        <p id="title">{{ post.titre }}</p>
        <p id="content">{{ post.contenu }}</p>
        <a style="color:white;" @click="like(post.titre)"><img :id="'like'+post.titre" :src="post.linklike" alt="" style="  margin: 25px; width: 100px;height: 60px;"> {{ post.likes }}</a>
        <div id="ownerInfos">
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
        };
    },
  methods: {
    async like(titre){
      const like = document.getElementById("like"+titre);
      const token = localStorage.getItem("token");
      if(like.src == "http://localhost:3001/src/assets/icon/no_like.webp"){
        like.src = "http://localhost:3001/src/assets/icon/like.webp";
      }else if(like.src == "http://localhost:3001/src/assets/icon/like.webp"){
        like.src = "http://localhost:3001/src/assets/icon/no_like.webp"; 
      }

      axios
          .get(`http://localhost:3000/posts/?titre=${titre}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            let count = res.data[0].likes;
            let link ="";
            console.log(count);

            if(like.src == "http://localhost:3001/src/assets/icon/no_like.webp"){
              count += 1
              like.src = "http://localhost:3001/src/assets/icon/like.webp";
              link = "http://localhost:3001/src/assets/icon/like.webp";
            }else if(like.src == "http://localhost:3001/src/assets/icon/like.webp"){
              count -= 1
              like.src = "http://localhost:3001/src/assets/icon/no_like.webp"; 
              link = "http://localhost:3001/src/assets/icon/no_like.webp";
            }

            axios
            .put(`http://localhost:3000/posts/likesCount/?titre=${titre}`, {"likes": count, "linklike": link})
            .then((res) => {
              console.log(res);
              like.innerHTML = count;
              window.location.reload(true);
            })
            .catch((error) => {
              console.log(error);
            });
            console.log(count);

          })
          .catch((err) => {
            console.log(err);
          });
      // console.log(like.src);
      if(like.src == "http://localhost:3001/src/assets/icon/no_like.webp"){
        like.src = "http://localhost:3001/src/assets/icon/like.webp";
      }else if(like.src == "http://localhost:3001/src/assets/icon/like.webp"){
        like.src = "http://localhost:3001/src/assets/icon/no_like.webp";       
      }
    },
    async modif(titre, owner) {
      const user = localStorage.getItem("user");
      if (owner === user) {
        this.$router.push("/updatePost");
        window.localStorage.setItem("titre", titre);
        
      } else {
        alert(
          "Vous n'avez pas le droit de modifier une publication qui n'est pas à vous."
        );
      }
    },
    async suppr(titre, owner) {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      if (owner === user) {

        axios
          .delete(`http://localhost:3000/posts/delete/?titre=${titre}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(() => {
            console.log("deleted");
            alert("vous avez supprimé une publication");
            window.location.reload(true);
          })
          .catch((err) => {
            console.log(err);
          });

        
      } else {
        alert(
          "Vous n'avez pas le droit de supprimer une publication qui n'est pas à vous."
        );
      }
    },
    async getPosts() {
      
      //récupération des données
      const token = localStorage.getItem("token");
      let res = await axios.get("http://localhost:3000/posts/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });


      for (let i = 0; i < res.data.length; i++){        

        // res.data[i].contenu = res.data[i].contenu.replace(/\n/g, "<br>");
        if (res.data[i].photo === undefined || res.data[i].photo == ""){
          res.data[i].photo = "/src/assets/icon/no_pic.webp"
        }
      }
      console.log(res.data);

      this.posts = res.data;
      const user = localStorage.getItem("user");

      let resUser = await axios.get(
        `http://localhost:3000/user/?username=${user}`
      );
      const select = document.getElementById("select");
      select.addEventListener("click", function handleClick() {
        window.location = "http://localhost:3001/Selection";
      });
      
      const role = resUser.data.role;
      if (role != "admin") {
        console.log("pouet");
        select.style.display = "none";
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

p {
  white-space: pre-line;
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
  height: 100vh;
  border: 1px solid rgb(0, 0, 0);
  margin-left: auto;
  margin-right: auto;
  background-color: #350619;
}

#interact {
  display: flex;
  flex-direction: row;
}
#select {
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: large;
  padding: 10px;
  margin-left: 42%;
  border: none;
}

#ownerInfos img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 10px;
}

#ownerInfos {
  display: flex;
  flex-direction: row;
}
#post{
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
#supprimer {
  color: white;
  width: 5%;
  margin-left: auto;
  padding: 1px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: x-large;
  cursor: pointer;
}

#title {
  font-size: x-large;
  margin: 5px;
  text-decoration: underline dotted;
  margin-right: auto;
  margin-left: auto;
}

#modif {
  color: white;
  font-size: x-large;
  cursor: pointer;
}

#content {
  margin: 50px;
  font-size: 20px;
}

#owner {
  margin: 25px;
  font-size: small;
}
</style>
