<template>
  <div class="error-page">
    <h1>Page not found :(</h1>
    <router-link class="home-btn" to="/">Return to home page</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.error-page {
  width: 100vw;
  height: 100vh;
  text-align: center;

  .home-btn {
    background-color:  #00adb5;
    padding: 10px 15px;
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
  }
}
</style>
