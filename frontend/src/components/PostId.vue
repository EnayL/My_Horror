<template class="body">
  <div>
    </div>
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

<style >
.bodyhome{
  background-image: url("../assets/back.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
 background-attachment: fixed;

}

.main {
  
 padding: 5%;
 background-color: rgba(0,0,0, 0.5);
 width: 60%;
 min-height: 100%;
 max-height: fit-content;
 margin-left: auto;
 margin-right: auto;
 overflow: hidden;
 overflow: auto;
}


.main-form {
  margin-top: 10px;
  padding: 10px;
} 

.main-line2 {
  height: 5px;
  background-color: rgb(139, 139, 139);
  width: 100%;
} 
</style>
