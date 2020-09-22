<template>
  <div class="dashboard">
    <h1>My posts</h1>
    <BlogComp :blogs="ownBlogs">
    </BlogComp>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import BlogComp from '../components/Blog-preview.vue';

export default {
  components: {
    BlogComp
  },
  computed: {
    ...mapGetters(['user', 'ownBlogs'])
  },
  methods: {
    ...mapActions(['getProfile', 'getOwnBlogs', 'deleteOwnBlog']),
    deletePost: function(id) {
      this.deleteOwnBlog(id);
    }
  },
  created() {
    this.getProfile();
    this.getOwnBlogs(this.user._id);
  },
  updated() {
    this.getOwnBlogs(this.user._id);
  },
}
</script>

<style lang="scss">
  .dashboard {
    height: 100vh;

    h1 {
      text-align: center;
    }
  }
</style>