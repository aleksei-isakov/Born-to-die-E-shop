<template>
  <div class="wrapper">
    <button class="md-button md-raised md-ripple md-primary md-theme-default">
      + ADD TO CART
    </button>
    <div class="username-icon" v-if="isUserLoggedIn">
      <p>{{ mockprofile.loggedIn }}</p>
      <img :src="mockprofile.img" class="profile-pic" />
    </div>
    <div v-else class="username-icon">
      <a class="login-link"
        ><span class="user-login-link">{{ mockprofile.signIn }}</span></a
      >
      <img :src="mockprofile.defaultAvatar" class="profile-pic" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddToCardBlock',

  props: {
    mockprofile: {
      type: Object,
      required: true
    },

    isUserLoggedIn: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 2px solid rgb(228, 228, 228);
  border-left: none;
}
.username-icon {
  display: flex;
  justify-content: space-around;
}
.profile-pic {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 5px;
}
.login-link {
  align-self: center;
}
.login-link:hover {
  cursor: pointer;
  text-decoration: none;
}
button {
  width: 125px;
}
.user-login-link {
  color: #04080e;
}

@media screen and (max-width: 767px) {
  .username-icon {
    margin-top: 15px;
  }
  .wrapper {
    border-top: none;
    border-left: 2px solid rgb(228, 228, 228);
  }
}
</style>
