<template>
  <div class="bodyhome">
    <div class="background" >
      <main class="main">
        <div class="main-form">
          <create-post></create-post>
        </div>
        <div class="main-line"></div>
        <post></post>
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import CreatePost from "../components/LayoutCreatePost.vue";
import Post from "../components/LayoutPost.vue";
import "./styles/Home.css"

export default {
  name: "Home",
  components: {
    CreatePost,
    Post,
  },
};
</script>

