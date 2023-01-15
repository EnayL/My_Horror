<template>
  <LayoutHeader></LayoutHeader>
  <div class="bodyhome">
    <main class="main" id="main">
      <div class="main-form">
        <p>Notre selection du mois:</p>
        <br /><br />
        <p>Pour le moment Aucune publication n'a retenu notre attention</p>
        <div class="container_selec"></div>
      </div>
      <div class="main-line"></div>

    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import LayoutHeader from "./LayoutHeader.vue";

export default {
  methods: {},
  name: "Home",
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
  max-width: 1095px;
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
  height: 5px;
  background-color: rgb(254, 254, 254);
}
</style>
