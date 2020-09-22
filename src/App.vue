<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <Errors v-if="error" :msg="error" />
    <router-view/>
  </div>
</template>

<script>
import HeaderComp from './components/Header.vue';
import Errors from './components/Errors.vue';
import {mapGetters} from 'vuex';

export default {
  components: {
    HeaderComp,
    Errors
  },
  computed: {
    ...mapGetters(['error'])
  },
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #e3fdfd;
}
#app {
  padding: 0;
  margin: 0; 
}
</style>
