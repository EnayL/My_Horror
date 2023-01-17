<template>
    <LayoutHeader></LayoutHeader>

  <div class="bodyhome">
    <main class="main">
      <post></post>
      <div class="main-line2"></div>
      <div class="main-form">
        <create-post></create-post>
      </div>
    </main>
  </div>
</template>

<script>
import CreatePost from "../components/LayoutCreatePost.vue";
import Post from "../components/LayoutPost.vue";
import LayoutHeader from "./LayoutHeader.vue";

export default {
  name: "PostIdPage",
  components: { CreatePost, Post,LayoutHeader },
  props: {},
  method: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style scoped>
.bodyhome {
  background-color: #111111;
  height: 100vh;
}
.main {
  max-width: 1000px;
  width: 100%;
  border: 1px solid rgb(0, 0, 0);
  margin-left: auto;
  margin-right: auto;
  background-color: #350619;
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
.main-line2 {
  height: 5px;
  background-color: rgb(0, 0, 0);
  width: 100%;
}
</style>
