<template>
  <div class="navbar">
    <nav>
    <h1>
      <router-link class="logo-router" to="/">Home</router-link>
    </h1>
    <ul :class="{active: isActive}">
      <li>
        <router-link class="link-router" to="/about">
          About
        </router-link>
      </li>
      <li>
        <router-link class="link-router" to="/all-blogs">
          All Blogs
        </router-link>
      </li>
      <li>
        <router-link class="link-router" to="/login" v-if="!isLoggedIn">
          Login
        </router-link>
      </li>
      <li>
        <router-link class="link-router" to="/register" v-if="!isLoggedIn">
          Register
        </router-link>
      </li>
      <li>
        <router-link class="link-router" to="/profile" v-if="isLoggedIn">
          Profile
        </router-link>
      </li>
      <li>
        <router-link class="link-router" to="/create-post" v-if="isLoggedIn">
          Create post
        </router-link>
      </li>
      <li>
        <a class="link-router" to="/logout" v-if="isLoggedIn" @click.prevent="logoutUser()">
          Logout
        </a>
      </li>
    </ul>
    <div class="menu-btn" @click="toggleMenu()">
      <i class="fas fa-bars"></i>
    </div>
  </nav>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'HeaderComp',
  data() {
    return {
      isActive: false
    }
  },
  watch:{
    $route(to, from){
      console.log(to, from);
        this.isActive = false;
    }
  },  
  computed: {
    ...mapGetters(['isLoggedIn', 'user']),
  },
  methods: {
    ...mapActions(['logout', 'getProfile']),
    logoutUser() {
      this.logout();
    },
    toggleMenu() {
      this.isActive = !this.isActive
    }
  },
  created() {
    this.getProfile();
  },
};
</script>

<style lang="scss">
.navbar {
  margin: 0;
  background-color: #00adb5;
  box-shadow: 2px 4px 8px 2px #00000040;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-router {
    color: #222831;
    text-decoration: none;
    margin-left: 20px;
    padding: 10px 15px;
    border-radius: 12px;

    &.router-link-exact-active {
    color: #e3fdfd;
  }
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;

    li {
      margin: 0 10px;

      .link-router {
        color: #222831;
        text-decoration: none;
        padding: 10px 15px;
        border-radius: 12px;
        cursor: pointer;

        &:hover {
          background-color: #3cbabe;
        }

        &.router-link-exact-active {
        color: #e3fdfd;
      }
      }
    }
  }

  .menu-btn {
    position: relative;
    right: 20px;
    display: none;

    i {
      font-size: 1.5rem;
    }
  }
}

@media (max-width: 600px) {
  nav {
    ul {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      opacity: 0.9;
      height: 100%;
      background-color: #00adb5;
      transform: translate(-250px);
      transition: 0.3s ease all;

      li {
        margin: 40px 0;

        a {
          font-size: 2rem;
        }
      }
    }

    ul.active {
      transform: translate(0px);
    }

    .menu-btn {
      display: block;
    }
  }
}
</style>
