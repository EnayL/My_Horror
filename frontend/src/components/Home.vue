<template>
  <LayoutHeader></LayoutHeader>
  <div class="bodyhome">
    <main class="main" id="main">
      <div class="main-form">
        <p>Notre selection du mois:</p>
        <br /><br />
        <p id="selection"></p>
        <div class="container_selec"></div>
      </div>
      <div class="main-line"></div>

    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import LayoutHeader from "./LayoutHeader.vue";
import axios from "axios";


export default {
  methods: {
    async getSelection() {
      const res = await axios.get("http://localhost:3000/posts/selection/");
      const json = JSON.stringify(res);
      const jsonData = JSON.parse(json);
      var mainContainer = document.getElementById("selection");

      if(jsonData.data.length == 0){
        mainContainer.innerHTML = "Pour le moment, aucune publications n'a retenu notre attention"
      }else{
        for (let i = 0; i < jsonData.data.length; i++) {
          const publi = jsonData.data[i];
          const titre = publi.titre;
          let contenu = publi.contenu;
          let select = publi.select;
          const owner = publi.owner;
          
          let resUser = await axios.get(`http://localhost:3000/user/?username=${owner}`)

          let photo = resUser.data.photo;
          const pp = document.createElement("img"); // pp
          pp.src = photo;

          if (photo === undefined){
            pp.src = "/src/assets/icon/no_pic.webp"
          }
          const div3 = document.createElement("p"); //creation element owner
          div3.class = "owner";
          div3.innerHTML = "Par " + owner; 
          contenu = contenu.replace(/\n/g, "<br>");

          const divtest = document.createElement("div"); // div de la pp

          const h1 = document.createElement("p"); // creation element titre
          h1.innerHTML = titre + ":";
          const div2 = document.createElement("p"); // creation element contenu
          const div4 = document.createElement("div");

          div2.innerHTML = contenu;

          div2.setAttribute("style", "margin: 10px;");
          pp.setAttribute(
            "style",
            "height:40px;width:40px;border-radius:50%; margin-left:10px;"
          );
          div3.setAttribute("style", "margin: 25px; font-size: small;");
          div4.setAttribute("style", "display: flex; flex-direction: row;");

          divtest.setAttribute("style", "display: flex; flex-direction: row;");
          divtest.setAttribute("type", "submit");


          div4.appendChild(pp);

          div4.appendChild(div3);
                    

          mainContainer.setAttribute(
            "style",
            "background-color: rgba(9,9,9, 0.5); min-height: 350px;max-height: 350px; overflow-x: hidden; margin: 15px; display:flex; flex-direction: column; width: 80%;"
          );

          h1.setAttribute(
            "style",
            "font-size: x-large; margin: 10px; text-decoration: underline dotted ;margin-right:auto; margin-left:auto;"
          );

          div2.setAttribute("style", "margin: 10px; font-size: 15px;");


          divtest.setAttribute("style", "display: flex; flex-direction: row;");

          

          mainContainer.appendChild(divtest);
          mainContainer.appendChild(h1);
          mainContainer.appendChild(div2);
          mainContainer.appendChild(div4);

        }
    
      }
    },
  },
  name: "Home",
  mounted() {
    this.getSelection();
  },
  components: {
    LayoutHeader,
  },
};
</script>

<style scoped>
.bodyhome {
  background-color: #111111;
}
p{
  font-size:20px;
}

.main {
  
  width: 80vw;
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
  height: 5px;
  background-color: rgb(254, 254, 254);
}

/* .selection{
  display
} */


.main {
  max-width: 1095px;
  width: 100%;
  border: 1px solid rgb(0, 0, 0);
  margin-left: auto;
  margin-right: auto;
  background-color: #350619;
}

.interact{
  display: flex; 
  flex-direction: row;
}

.ownerInfos img{
  height:40px;
  width:40px;
  border-radius:50%; 
  margin-left:10px;
}

.ownerInfos{
  display: flex; 
  flex-direction: row;
}
.post{
  background-color: rgba(9,9,9, 0.5); 
  min-height: 150px; 
  margin: 20px; 
  display:flex; 
  flex-direction: column;
}
.supprimer{
  color: white; width:5%; 
  margin-left:auto; 
  padding: 1px; 
  text-align: center; 
  background-color: rgba(0,0,0,0); 
  border: none; 
  font-size: x-large; 
  cursor:pointer; 
}

.title{
  font-size: x-large; 
  margin: 5px; 
  text-decoration: underline dotted ;
  margin-right:auto; 
  margin-left:auto;
}

.modif{
  color: white;  
  font-size: x-large; 
  cursor:pointer;
}

.content{
  margin: 10px; 
  /* font-size: 5px;
  margin: 50px; 
  font-size:20px; */
}

.owner{
  margin: 10px; 
  font-size: x-small; 
  /* margin: 25px; 
  font-size: small; */
}
</style>
