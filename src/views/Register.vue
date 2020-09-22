<template>
  <div class="register-form">
    <img src="https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg" alt="">
    <form @submit.prevent="registerUser">
      <h1>Register</h1>
      <img src="https://images.pexels.com/photos/992763/pexels-photo-992763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
      <input type="text" required autocomplete="off" id="name" name="name" placeholder="Enter your name" v-model="name">
      <input required autocomplete="off" type="email" id="email" name="email" placeholder="Enter your email" v-model="email">
      <input required autocomplete="off" type="password" id="password" name="password" placeholder="Enter your password" v-model="password">
      <input type="submit" value="Register">
      <p>Already registered? <router-link class="login-link" to="/login">Login here</router-link></p>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['register']),
    registerUser() {
      const user = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      this.register(user).then(res => {
        if(res.data.success) {
          this.$router.push('login');
        }
      });
    }
  },
}
</script>

<style lang="scss" scoped>
  .register-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    background-color: #e3fdfd;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    form {
      margin: auto;
      display: flex;
      flex-direction: column;
      width: 50%;
      padding: 20px;
      box-shadow: 13px 13px 20px rgba($color: #000000, $alpha: 0.15),
                  -13px -13px 20px rgba($color: #ffffff, $alpha: 0.7);
      border-radius: 12px;

      h1 {
        text-align: center;
        font-size: 3rem;
        color: #222831;
      }

      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: auto;
        object-fit: cover;
      }

      input {
        padding: 10px 15px;
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #00adb5;
        background-color: #e3fdfd;
        font-size: 1rem;
        transition: 0.3s ease-in transform;

        &:focus {
          transform: scale(1.05);
        }
      }

      input[type="submit"] {
        padding: 10px 15px;
        font-size: 1.3rem;
        border-radius: 24px;
        border: none;
        background-color: #00adb5;
        cursor: pointer;
        transition: 0.3s ease-in all;

        &:hover {
          background-color: #3cbabe;
          transform: scale(1.05);
        }
      }

      p {
        text-align: center;
      }

      .login-link {
        color: #222831;
        text-decoration: none;
      }
    }
  }

  @media (max-width: 600px) {
    .register-form {
      grid-template-columns: 1fr;
      grid-template-rows: auto 50vh;
      grid-template-areas: "register"
                 "image";

      form {
        margin-top: 20px;
        margin-bottom: 20px;
        grid-area: register;
      }

      img {
        grid-area: image;
      }
    }
  }
</style>