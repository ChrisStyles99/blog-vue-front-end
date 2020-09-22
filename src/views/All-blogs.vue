<template>
  <div class="all-blogs">
    <div class="all-blogs-header">
      <h1>All blogs</h1>
      <input type="text" v-model="searchFilter" placeholder="Search" />
    </div>
    <BlogComp v-bind:blogs="filteredBlogs"></BlogComp>
  </div>
</template>

<script>
import BlogComp from '../components/Blog-preview.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    BlogComp,
  },
  data() {
    return {
      searchFilter: ''
    };
  },
  computed: {
    ...mapGetters(['blogs']),
    filteredBlogs() {
      return this.blogs.filter(blog => {
        return blog.title.toLowerCase().match(this.searchFilter.toLowerCase());
      });
    }
  },
  methods: {
    ...mapActions(['getBlogs']),
  },
  created() {
    this.getBlogs();
    this.filteredBlogs;
  },
  updated() {
    this.getBlogs();
    this.filteredBlogs;
  },
  mounted() {
    this.getBlogs();
    this.filteredBlogs;
  },
};
</script>

<style lang="scss" scoped>
.all-blogs {
  height: 100vh;

  .all-blogs-header {
    text-align: center;
  }
}
</style>
