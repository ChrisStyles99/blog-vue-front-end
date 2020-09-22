<template>
  <div class="template">
    <div class="blog-card" v-for="(blog, index) in blogs" :key="index">
      <div class="card-header">
        <h1>{{ blog.title }}</h1>
        <p>Author: {{blog.userName}}</p>
      </div>
      <div class="card-text">
        <p>{{ blog.body | truncate(50, '...') }}</p>
      </div>
      <div class="card-footer">
        <router-link class="post-link" :to="'/post/'+blog._id">See Post</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'BlogComp',
  props: ['blogs'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['getProfile']),
  },
  created() {
    this.getProfile();
  },
};
</script>

<style lang="scss">
.template {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin: 0 20px;
}
.blog-card {
  display: grid;
  grid-template-rows: 1fr 1fr 50px;
  box-shadow: 7px 7px 16px rgba($color: #000000, $alpha: 0.20),
                  -7px -7px 16px rgba($color: #fff, $alpha: 0.7);
  border-radius: 12px;
  transition: 0.3s ease all;

  &:hover {
    transform: scale(1.01);
    box-shadow: 13px 13px 20px rgba($color: #000000, $alpha: 0.20),
                  -13px -13px 20px rgba($color: #fff, $alpha: 0.7);
  }

  .card-header {
    color: #00adb5;
    border-radius: 12px 12px 0 0;
    border-bottom: 1px solid #00adb5;

    h1 {
      text-align: center;
    }

    p {
      text-align: center;
    }
  }

  .card-text {
    margin: auto;
  }

  .card-footer {
    margin: auto;

    .post-link {
      padding: 10px 15px;
      color: #00adb5;
      text-decoration: none;
      border: 1px solid #00adb5;
      border-radius: 12px;
      transition: 0.3s ease-in all;
      font-size: 1rem;

      &:hover {
        background-color: #00adb5;
        color: #fff;
      }
    }

    .delete-btn {
      margin-left: 5px;
      padding: 10px 15px;
      color: #c54141;
      text-decoration: none;
      border: 1px solid #c54141;
      border-radius: 12px;
      transition: 0.3s ease-in all;
      background: none;
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        background-color: #c54141;
        color: #fff;
      }
    }
  }
}

@media (max-width: 600px) {
  .template {
    grid-template-columns: 1fr;
  }

  .blog-card:last-child {
    margin-bottom: 20px;
  }
}
</style>
