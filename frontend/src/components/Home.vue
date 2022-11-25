<template>
  <div class="bodyhome">
    <main class="main">
      <div class="main-form">
        <create-post></create-post>
      </div>
      <div class="main-line"></div>
      <post></post>
      <post></post>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

import CreatePost from "../components/LayoutCreatePost.vue";
import Post from "../components/LayoutPost.vue";

export default {
  name: "Home",
  components: {
    CreatePost,
    Post,
  },
};
</script>

<style scoped>
.bodyhome {
  background-image: url("../assets/img_wallpaper/de905de2a7d6905f5572a193c1352aa2.jpg");
}
.main {
  max-width: 1000px;
  width: 100%;
  border: 1px solid rgb(0, 0, 0);
  margin-left: auto;
  margin-right: auto;
  background-color: #5c0000;
}
.main-form {
  margin-top: 60px;
  padding: 15px;
  border-bottom: 1px solid rgb(0, 0, 0);
}
.main-line {
  height: 10px;
  background-color: rgb(0, 0, 0);
}
</style>
