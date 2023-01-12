<template>
  <layout-header></layout-header>
  <div class="bodyhome">
    <main class="main" id="main">
      <div class="main-form">
        <p>Notre selection du mois:</p>
        <div class="container_selec"></div>
      </div>
      <div class="main-line"></div>
      <p>Publications:</p>

      <Post></Post>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import LayoutHeader from "./LayoutHeader.vue";
import Post from "./Post.vue";

export default {
  methods: {},
  name: "Home",
  components: {
    Post,
    LayoutHeader,
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
