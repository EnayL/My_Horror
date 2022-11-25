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

import "./styles/LayoutPost.css";

export default {
  name: "PostPage",
  props: {},
};
</script>

