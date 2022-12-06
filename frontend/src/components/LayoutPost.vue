<template>
  <div class="bodypost">
    <div class="post" style="cursor: pointer">
      <div class="post__avatar">
        <img src="../assets/icon/logo.webp" alt="" class="post-avatar__img" />
      </div>
      <div class="post__main post-main">
        <div class="post-main__user mb-3">
          <span class="post-main__username mr-3">Username</span>
          <span class="post-main__nickname mr-3">@nickName</span>
          <span class="post-main__date mr-3">28.01.2021</span>
          <img class="post-delete" src="../assets/icon/x-solid.svg" />
        </div>
        <div class="post-main__text mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id placeat
          obcaecati nisi accusamus, vitae esse!
        </div>
        <div class="post-main__image mb-2">
          <img
            src="../assets/img_wallpaper/login.jpg"
            alt=""
            class="post-main__img"
          />
        </div>
        <div class="post-main__bottom">
          <img class="post-main__like" src="../assets/icon/heart-regular.svg" />
          <span class="post-main__like-count ml-2">0</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPage",
  props: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300&display=swap");
.bodypost {
  font-family: "Titillium Web", sans-serif;
  padding: 0% 10%;
  margin: 0%;
  height: auto;
  background-position: 84% 10%;
  width: 100%;
}
.post {
  display: flex;
  padding: 15px;
  border-top: 1px solid #000000;
}
.post__avatar {
  margin-right: 15px;
}

.post-avatar__img {
  height: 50px;
  width: 50px;
  border-radius: 9999px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 2px inset;
}

.post-main {
  display: flex;
  flex-direction: column;
}
.post-main__user {
  position: relative;
}
.post-main__username {
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3125;
  overflow-wrap: break-word;
}
.post-main__nickname {
  margin-left: 1%;
  color: rgb(85, 85, 85);
}
.post-main__date {
  font-size: 15px;
  font-weight: 400;
  color: rgb(74, 74, 74);
  line-height: 1.3125;
  overflow-wrap: break-word;
  margin-left: 1%;
}
.post-delete {
  position: absolute;
  right: 0;
  font-size: 30px;
  cursor: pointer;
  border-radius: 9999px;
  transition: 0.2s ease-in-out;
  width: 2%;
}
.post-delete:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.post-main__text {
  margin-top: 2%;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3125;
  overflow-wrap: break-word;
}
.post-main__img {
  width: 100%;

  border: 1px solid rgb(255, 255, 255);
  border-radius: 16px;
  margin-top: 1%;
}
.post-main__bottom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.post-main__like {
  transform: scale(1);
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-top: 2%;
  width: 5%;
}
.post-main__like-count {
  margin-left: 1%;
}
.post-main__like:hover {
  transform: scale(1.2);
}

.post:hover {
  background-color: #4c0000;
}
</style>
