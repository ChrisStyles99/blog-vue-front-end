<template>
  <div class="single-post">
    <div class="single-post-text">
      <div class="title-div">
        <h1>{{ singleBlog.title }}</h1>
        <p>
          Date:
          {{
            singleBlog.createdAt.substring(0, singleBlog.createdAt.indexOf('T'))
          }}
        </p>
      </div>
      <p>{{ singleBlog.body }}</p>
      <div class="user-btns">
        <router-link
          class="edit-post-btn"
          v-if="user._id === singleBlog.userId"
          :to="'/edit-post/' + singleBlog._id"
          >Edit Post</router-link
        >
        <button
          class="delete-post-btn"
          v-if="user._id === singleBlog.userId"
          @click="deleteBlog(singleBlog._id)"
        >
          Delete Post
        </button>
      </div>
      <router-link class="return-btn" to="/all-blogs">Return</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      id: '',
    };
  },
  computed: {
    ...mapGetters(['singleBlog', 'user']),
  },
  methods: {
    ...mapActions(['getPost', 'getProfile', 'deleteOwnBlog']),
    deleteBlog: function(id) {
      this.deleteOwnBlog(id);
      this.$router.push('/dashboard');
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.getPost(this.id);
    this.getProfile();
  },
  updated() {
    this.id = this.$route.params.id;
    this.getPost(this.id);
  },
};
</script>

<style lang="scss" scoped>
.single-post {
  .single-post-text {
    display: grid;
    grid-template-rows: 100px 75vh 60px;
    grid-template-columns: 1fr 20vw;
    .title-div {
      grid-column: span 2;

      h1 {
        text-align: center;
      }
    }

    p {
      margin-left: 20px;
    }

    .user-btns {
      display: flex;
      flex-direction: column;

      .edit-post-btn {
        padding: 10px 15px;
        color: #00adb5;
        border: 1px solid #00adb5;
        background: none;
        margin: 10px 5px;
        transition: 0.3s ease all;
        border-radius: 12px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        font-size: 1.2rem;

        &:hover {
          color: #fff;
          background-color: #00adb5;
        }
      }

      .delete-post-btn {
        padding: 10px 15px;
        color: #a13030;
        border: 1px solid #a13030;
        background: none;
        margin: 0 5px;
        border-radius: 12px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.3s ease all;

        &:hover {
          color: #fff;
          background-color: #a13030;
        }
      }
    }

    .return-btn {
      grid-column: span 2;
      margin: auto;
      text-decoration: none;
      padding: 15px 20px;
      color: #00adb5;
      background: none;
      border: 1px solid #00adb5;
      border-radius: 12px;
      transition: 0.3s ease-in-out all;
      font-size: 1.5rem;

      &:hover {
        color: #fff;
        background-color: #00adb5;
      }
    }
  }

  .delete-btn {
    margin: auto 0;

    button {
      padding: 10px 15px;
      font-size: 1.2rem;
      color: #a13030;
      background: none;
      border: 1px solid #a13030;
      border-radius: 12px;
      cursor: pointer;
      transition: 0.3s ease-in-out all;

      &:hover {
        background-color: #a13030;
        color: #fff;
      }
    }
  }
}

@media (max-width: 600px) {
  .single-post {
    .single-post-text {
      grid-template-rows: 100px 75vh 100px 60px;
      grid-template-columns: 1fr;
    }
  }
}
</style>
