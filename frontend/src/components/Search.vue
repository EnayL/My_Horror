<template>
  <div id="app">
    <input
      type="text"
      v-model="text"
      placeholder="Text"
      @input="handleInput"
      v-on:keyup="handleInput"
    />
    <br />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    
    return {
      text: '',
    };
  },
  methods: {
    handleInput(event) {
      console.log(event.target.value);

      if(event.key == "Enter")
       {
        axios.get(`http://localhost:3000/user/?username=${event.target.value}`)
        .then((response) => {
          console.log(response.data[0].email);
        })
        .catch(() => {
          console.log("we didn't find this user");
        });
       }
    },
  },
 
};
</script>