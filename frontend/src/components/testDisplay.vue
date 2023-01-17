<template>
    <div v-for="(post, index) in posts">
    <div >
        <p> {{ index }} </p>
        <p>Titre: {{ post.titre }}</p>
        <p id="owner"> Owner: {{ post.owner }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";


export default {
    data(){
        return {
            posts: [],
        };
    },
    methods: {
        async getSelection() {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:3000/posts/", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });      
        

        this.posts = res.data
        },
    },
    name: "testDisplay",
    mounted() {
        this.getSelection();
    },
    components: {
    },
};
</script>
<style>
p{
    margin: 10px; 
  font-size: x-large; 
}
</style>
  
  