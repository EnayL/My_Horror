<template>
    <LayoutHeader></LayoutHeader>
    <div v-for="(post, index) in posts">
      <div id="containerpost" >
      <div id="post">
        <div id="interact">
          <button id="supprimer" @click="suppr(post.titre, post.owner)">X</button>
          <a href="" type="submit" @click="modif(post.titre, post.owner)" id="modif" >---</a>
        </div>
          <p id="title">{{ post.titre }}</p>
          <p id="content">{{ post.wcontenu }}</p>
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
    async getPosts() {
      const titre = localStorage.getItem("title")
      const res = await axios.get(`http://localhost:3000/posts/?titre=${titre}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      this.posts = res.data;
    },
    mounted() {
      this.getPosts();
    },
    name: "PostDetailPage",
    components: {
      LayoutHeader,
    },
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