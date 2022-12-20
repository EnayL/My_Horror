<template>
    <input type="checkbox" id="slasher" value="slasher" v-model="GenreChoosed">
    <label for="slasher">slasher</label>
    <input type="checkbox" id="Histoire" value="Histoire" v-model="GenreChoosed">
    <label for="Histoire">Histoire</label>
    <input type="checkbox" id="Paranormal" value="Paranormal" v-model="GenreChoosed">
    <label for="Paranormal">Paranormal</label>
    <br>
    <div class="btn">
        <button id="button" type="submit" @click="handleInput">Search</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "FiltredSearch",

  data() {
    return{
        GenreChoosed: []
    }
  },
  methods: {
    handleInput() {
        let genre = this.GenreChoosed[0];
        console.log(genre);
        const token = localStorage.getItem("token")

        axios.get(`http://localhost:3000/posts/?genre=${genre}`,{
            headers:{
           "Authorization":`Bearer ${token}`
        }
        })
        .then((res) => {
            const json = JSON.stringify(res);
            const jsonData = JSON.parse(json);
            for (let i = 0; i < jsonData.data.length; i++) {
                console.log(jsonData.data[i]);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    },
  },
 
};
</script>