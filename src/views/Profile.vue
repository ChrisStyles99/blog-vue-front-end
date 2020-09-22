<template>
  <div class="profile">
    <div class="profile-div" v-if="user">
      <h1>Profile</h1>
      <p>Email: {{user.email}}</p>
      <p>Name: {{user.name}}</p>
      <div class="btn">
        <router-link to="/dashboard" class="router">My posts</router-link>
        <a to="/" @click.prevent="logoutUser()" class="router">Log out</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters(['user', 'isLoggedIn'])
  },
  methods: {
    ...mapActions(['getProfile', 'logout']),
    logoutUser() {
      this.logout();
    }
  },
  created() {
    this.getProfile();
  }
}
</script>

<style lang="scss" scoped>
  .profile {
    height: 100vh;

    .profile-div {
      h1 {
        text-align: center;
        font-size: 3rem;
      }

      p {
        text-align: center;
        font-size: 1.2rem;
      }

      .btn {
        display: flex;
        flex-direction: column;
        align-items: center;

        .router {
          padding: 10px 15px;
          width: 20%;
          margin: 10px 0;
          background: none;
          border: 1px solid #00adb5;
          color: #00adb5;
          text-decoration: none;
          text-align: center;
          font-size: 1.2rem;
          transition: 0.3s ease-out all;
          border-radius: 12px;
          cursor: pointer;

          &:hover {
            background-color: #00adb5;
            color: #fff;
          }

          &:last-child {
            border: 1px solid #df3232;
            color: #df3232;

            &:hover {
              background-color: #df3232;
              color: #fff;
            } 
          }
        }
      }
    }
  }
</style>