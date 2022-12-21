<template>
  <!-- multiple select -->
  <form id="demo">
    <div class="create-post">
      <div class="create-post__main">
        <div class="create-post__avatar">
          <img
            src="../assets/icon/logo.webp"
            alt=""
            class="create-post__avatar-img"
          />
        </div>
        <div
          class="create-post__text ml-3"
          style="color: white; display: flex; flex-direction: column"
        >
          <!-- text -->
          <div style="display: flex">
            <p class="p1">
              <input
                type="string"
                v-model="Post.titre"
                placeholder="Saisissez le titre de votre Publication"
              />
            </p>
            <p class="p3">
              <input
                type="string"
                v-model="Post.genre"
                placeholder="Genre du post"
              />
            </p>
          </div>
          <p class="p2">
            <textarea
              type="string"
              v-model="Post.contenu"
              placeholder="Racontez nous votre histoire"
            ></textarea>
          </p>
        </div>
      </div>
      <div class="create-post__action">
        <div class="create-post__add">
          <label for="file-input">
            <img
              style="cursor: pointer"
              class="create-post__add-img"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231da1f2'%3E%3Cg%3E%3Cpath d='M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z'%3E%3C/path%3E%3Ccircle cx='8.868' cy='8.309' r='1.542'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E"
              alt=""
            />
          </label>
          <input style="display: none" id="file-input" type="file" />
        </div>
        <button
          class="create-post__create"
          style="cursor: pointer"
          type="submit"
          @click="addToAPI"
        >
          Poster !
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePostPage",
  data() {
    return {
      Post: { titre: "", contenu: "", genre: "" },
    };
  },
  methods: {
    addToAPI() {
      let newPost = {
        titre: this.Post.titre,
        contenu: this.Post.contenu,
        genre: this.Post.genre,
      };
      let jsonData = JSON.stringify(newPost);

      console.log(jsonData);
      axios
        .post("http://localhost:3000/posts/add", newPost)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
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
  margin-top: 10px;
}
.create-post__create:hover {
  background-color: rgb(82, 0, 0);
}

.p1 {
  margin-top: 1%;
  width: 60%;
  height: 50px;
  border: none;
}

.p1 input {
  border: none;
  background-color: rgba(82, 0, 0, 0.51);
  padding-left: 5px;
  width: 100%;
  height: 40px;
  color: white;
  font-family: "OpenSansCondensed-Bold", sans-serif;
}

.p2 {
  margin-top: 1%;
  width: 75%;
  height: 50px;
  border: none;
}

.p2 textarea {
  border: none;
  background-color: rgba(82, 0, 0, 0.51);
  width: 100%;
  color: white;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 4%;
  font-family: "OpenSansCondensed-Bold", sans-serif;
}

.p2 textarea::placeholder {
  top: 0;
  color: white;
  font-size: 15px;
}

.p1 input::placeholder {
  color: white;
  font-size: 15px;
}

.p3 {
  margin-top: 1%;
  width: 75%;
  height: 50px;
  border: none;
}

.p3 input {
  margin-left: 5%;
  padding-left: 7px;
  border: none;
  background-color: rgba(82, 0, 0, 0.51);
  width: 30%;
  height: 40px;
  color: white;
  font-family: "OpenSansCondensed-Bold", sans-serif;
}

.p3 input::placeholder {
  top: 0;
  color: white;
  font-size: 15px;
}
</style>
