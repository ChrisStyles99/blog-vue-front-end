<template>
  <div class="login-form">
    <form @submit.prevent="loginUser">
      <h1>Login</h1>
      <img src="https://images.pexels.com/photos/992763/pexels-photo-992763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
      <input autocomplete="off" required type="email" id="email" name="email" placeholder="Enter your email" v-model="email">
      <input autocomplete="off" required type="password" id="password" name="password" placeholder="Enter your password" v-model="password">
      <input type="submit" value="Login">
      <p>Not registered? <router-link class="register-btn" to="/register">Register here</router-link></p>
    </form>
    <img src="https://images.pexels.com/photos/1823734/pexels-photo-1823734.jpeg" alt="">
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    loginUser() {
      const user = {
        email: this.email,
        password: this.password
      };
      this.login(user)
      .then(res => {
        if(res.data.success) {
          this.$router.push('/profile');
        }
      }).catch(err => {
        console.log(err);
      });
    }
  },
}
</script>

<style lang="scss" scoped>
  .login-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    background-color: #e3fdfd;

    form {
      margin: auto;
      display: flex;
      flex-direction: column;
      width: 50%;
      padding: 20px;
      box-shadow: 13px 13px 20px rgba($color: #000000, $alpha: 0.20),
                  -13px -13px 20px rgba($color: #fff, $alpha: 0.7);
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
      }

      input[type="submit"] {
        padding: 10px 15px;
        font-size: 1.3rem;
        border-radius: 24px;
        border: none;
        background-color: #00adb5;
        cursor: pointer;

        &:hover {
          background-color: #3cbabe;
        }
      }

      p {
        text-align: center;
      }

      .register-btn {
        color: #222831;
        text-decoration: none;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 600px) {
    .login-form {
      grid-template-columns: 1fr;
      grid-template-rows: auto 50vh;

      form {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
</style>