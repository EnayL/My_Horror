<template>
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
import "./styles/PostId.css"

export default {
  name: "PostIdPage",
  components: { CreatePost, Post },
  props: {},
  method: {},
  data() {
    return {};
  },
  computed: {},
};
</script>
