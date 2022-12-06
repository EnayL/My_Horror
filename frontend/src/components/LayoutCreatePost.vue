<template>
<form id="demo">
  <!-- text -->
  <p>
    <input type="string" v-model="Post.titre" placeholder="Saisissez le titre de votre Publication">
  </p>

  <p>
    <input type="string" v-model="Post.contenu" placeholder="Racontez nous votre histoire">
  </p>
  <!-- multiple select -->
  <p>
    <input type="string" v-model="Post.genre" placeholder="Genre du post">
  </p>
</form>
<button type="submit" @click="addToAPI">Add</button>
</template>

<script>
import axios from 'axios';
export default {
  name: "CreatePostPage",
  data() {
    return{
      Post : { titre:"", contenu:"", genre:"" }
    }
  }, methods: {
    addToAPI(){
      let newPost = {
        titre: this.Post.titre,
        contenu: this.Post.contenu,
        genre: this.Post.genre
      }
      let jsonData = JSON.stringify(newPost);

      console.log(jsonData);
      axios.post('http://localhost:3000/posts/add', newPost)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.create-post {
  background-color: #6d0000;
}

.create-post__main {
  display: flex;
  align-items: flex-start;
}
.create-post__avatar-img {
  height: 50px;
  width: 50px;
  border-radius: 9999px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 2px inset;
}
.create-post__text {
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  font-size: 19px;
  font-weight: 400;
  color: rgb(15, 20, 25);
  line-height: 1.3125;
  width: 100%;
  margin-left: 2%;
}
.create-post__action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.create-post__add {
  border-radius: 9999px;
  cursor: pointer;
  width: 39px;
  height: 39px;
  transition: 0.2s ease-in-out;
  margin-left: 50px;
  margin-top: 20px;
}
.create-post__add:hover {
  background-color: rgba(29, 161, 242, 0.1);
}
.create-post__add-img {
  width: 100%;
  padding: 10px;
}
.create-post__create {
  background-color: rgb(141, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 28px;
  outline-style: none;
  min-height: 39px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 9999px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 15px;
  border-color: rgba(0, 0, 0, 0);
  transition: 0.2s ease-in-out;
  cursor: pointer;
  margin-right: 1%;
}
.create-post__create:hover {
  background-color: rgb(82, 0, 0);
}
</style>
