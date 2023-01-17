<template>
  <!-- <a href="./home" style="color: white;"> GO BACK HOME</a> -->
  <div id="containerpost"></div>
</template>

<script>
import axios from "axios";
import LayoutHeader from "./LayoutHeader.vue";

export default {
  methods: {
    GotoDetail() {
      this.$router.push("/post/:id");
    },
    async getData() {
      const res = await fetch("http://localhost:3000/posts");
      const finalRes = await res.json("titre");
      console.log(finalRes);
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

.post-avatar__img {
  height: 50px;
  width: 50px;
  border-radius: 9999px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 2px inset;
}
</style>
