<template>
  <div class="maincontainer">
    <div class="edit-box">
      <div class="box1">
        <img
          src="\src\assets\img_wallpaper\anonymous.jpg"
          class="profile-pic"
        />
        <input type="file" name="anonymous" id="file" accept="image/*" />
        <label for="file">Edit pic</label>
        <form class="formEdit">
          <div class="formlabel1">
            <label for="username">Pseudo</label>
            <p class="forminput1">
              <input
                class="input"
                v-model="User.username"
                type="string"
                id="username"
                placeholder="new username"
              />
            </p>
          </div>

          <div class="formlabel1">
            <label for="bio">biography</label>
            <p class="forminput1">
              <input
                class="input"
                v-model="User.bio"
                type="string"
                id="bio"
                placeholder="write your bio"
              />
            </p>
          </div>

          <div class="formlabel1">
            <label for="password">Mot de passe</label>
            <p class="forminput1">
              <input
                class="input"
                v-model="User.password"
                type="string"
                id="password"
                placeholder="new password"
              />
            </p>
          </div>
          <div class="formlabel1">
            <label for="password">Confirmer le Mot de passe</label>
            <p class="forminput1">
              <input
                class="input"
                type="string"
                v-model="User.confirm"
                id="password"
                placeholder="confirm"
              />
            </p>
          </div>
          <p id="error"></p>
        </form>
        <div class="btn1">
          <button id="button" type="submit" @click="addToDb">Save</button>
        </div>
        <div class="cancel">
          <button
            type="submit"
            @click="goToProfil()"
            style="float: left; margin: 10px 0 0"
          >
            CANCEL
          </button>
        </div>
        <div class="done">
          <button
            type="submit"
            @click="goToLogin()"
            style="float: right; margin: 10px 0 0"
          >
            DONE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Edit",
  data() {
    return {
      User: { username: "", bio: "", password: "" },
    };
  },
  props: {},
  methods: {
    addToDb() {
      let newUser = {
        username: this.User.username,
        bio: this.User.bio,
        password: this.User.password,
      };
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("user");

      let jsonData = JSON.stringify(newUser);

      console.log(jsonData);
      axios
        .put(
          `http://localhost:3000/user/update/?username=${username}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
          newUser
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goToProfil() {
      this.$router.push("/profil");
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400&display=swap");

*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:focus {
  outline: none;
}

.maincontainer {
  display: flex;
  flex-direction: column;
}

.edit-box {
  width: 100%;
  height: 100vh;
  background-image: url(../src/assets/img_wallpaper/login2.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box1 {
  box-sizing: border-box;
  width: 460px;
  height: 95%;
  border: 2px solid black;
  box-shadow: -3px -3px 7px red, 3px 3px 5px white;
  border-radius: 5px;
  background-color: #64110b;
  margin-top: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.box1 img {
  box-sizing: border-box;
  width: 130px;
  height: 130px;
  margin-top: 10px;
  border-radius: 50%;
  border: 3px solid black;
  padding: 3px;
  background-color: black;
}

.formlabel1 {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  font-size: 100%;
  letter-spacing: 0.1em;
  font-style: italic;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: white;
}

.forminput1 .input {
  display: block;
  box-sizing: border-box;
  background-color: black;
  color: white;
  margin-bottom: 5px;
  padding: 4px;
  width: 220px;
  height: 20px;
  border: none;
  border-bottom: 1px solid black;
  font-weight: 400;
  font-size: 15px;
  transition: 0.2s ease;
}

.forminput1 .input:focus {
  border-bottom: 1px solid red;
  border-bottom-right-radius: 20px;
  background-color: #64110b;
  color: red;
  transition: 0.2 ease;
}

.btn1 button {
  border: 1px solid white;
  background-color: blue;
  color: white;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  margin: 0px;
  margin-top: 10px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn1 button:hover {
  transform: scale(1.1);
  cursor: pointer;
  background-color: blue;
  color: cyan;
  font-weight: bold;
  box-shadow: -3px -3px 7px blue, 3px 3px 5px cyan;
}

.cancel button {
  border: 1px solid white;
  background-color: black;
  color: white;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  margin: 0px;
  margin-bottom: 10px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.done button {
  border: 1px solid white;
  background-color: black;
  color: white;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  margin: 0px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cancel button:hover {
  transform: scale(1.1);
  cursor: pointer;
  background-color: red;
  color: black;
  font-weight: bold;
  box-shadow: -3px -3px 7px red, 3px 3px 5px black;
}

.done button:hover {
  transform: scale(1.1);
  cursor: pointer;
  background-color: green;
  color: white;
  font-weight: bold;
  box-shadow: -3px -3px 7px green, 3px 3px 5px darkgreen;
}
</style>
