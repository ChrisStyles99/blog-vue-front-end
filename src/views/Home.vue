<template>
  <div class="home">
    <div class="text-btn">
      <h1 v-if="!isLoggedIn">Welcome to the blog</h1>
      <h1 v-if="isLoggedIn">Welcome Back, {{user.name}}</h1>
      <router-link class="blogs-btn" to="/all-blogs">
        See all blogs
      </router-link>
      <router-link class="blogs-btn" to="/login" v-if="!isLoggedIn">Log in here</router-link>
      <router-link class="blogs-btn" to="/profile" v-if="isLoggedIn">View Profile</router-link>
    </div>
    <img
      src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg"
    />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapGetters(['isLoggedIn', 'user']),
  },
  methods: {
    ...mapActions(['getProfile'])
  },
  created() {
    this.getProfile();
  },
};
</script>

<style lang="scss">
.home {
  margin: auto;
  height: 100vh;
  position: relative;

  &::after {
    content: '';
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
  }

  .text-btn {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;

    h1 {
      font-size: 5rem;
    }

    .blogs-btn {
      color: #00adb5;
      font-size: 1.2rem;
      text-decoration: none;
      background-color: #000;
      border: none;
      padding: 10px 15px;
      border-radius: 12px;
      margin: 0 10px;

      &:last-child {
        color: #000;
        background-color: #00adb5;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
