<template>
  <div v-for="(post, index) in posts">
    <div>
      <p>{{ index }}</p>
      <p>Titre: {{ post.titre }}</p>
      <p>Owner: {{ post.owner }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async getSelection() {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:3000/posts/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      this.posts = res.data;
    },
  },
  name: "testDisplay",
  mounted() {
    this.getSelection();
  },
  components: {},
};
</script>
<style>
/* il faut faire des class et pas appelé direct avec la balise parce que ça comprend les autres pages quand tu le fais*/
p {
  margin: 10px;

  font-size: x-large;
}
</style>
