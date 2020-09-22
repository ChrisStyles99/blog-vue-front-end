<template>
  <div class="new-blog">
    <form @submit.prevent="addPost()" method="POST">
      <h1>Create a post</h1>
      <input required type="text" id="title" name="title" placeholder="Enter the title" v-model="title">
      <textarea required name="body" id="body" rows="40" placeholder="Enter the body of the post" v-model="body">
      </textarea>
      <input type="submit" value="Create post">
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      title: '',
      body: '',
      data: ''
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['addBlog', 'getProfile']),
    addPost: function() {
      this.data = {
        title: this.title,
        body: this.body,
        userId: this.user._id,
        userName: this.user.name
      };
      this.addBlog(this.data);
      this.$router.push('/all-blogs');
    }
  },
  created() {
    this.getProfile();
  },
}
</script>

<style lang="scss" scoped> 
  .new-blog {
    height: 100vh;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        width: 50%;
        margin-bottom: 10px;
        padding: 10px 15px;
        font-size: 1rem;
        border-radius: 12px;
        border: 1px solid #00adb5;
        transition: 0.3s ease-out all;

        &:focus {
          transform: scale(1.05);
        }
      }

      textarea {
        max-width: 80%;
        min-width: 80%;
        min-height: 50vh;
        padding: 10px;
        border-radius: 12px;
        border: 1px solid #00adb5;
        transition: 0.3s ease-out all;

        &:focus {
          transform: scale(1.02);
        }
      }

      input[type="submit"] {
        margin-top: 10px;
        padding: 10px 15px;
        border-radius: 12px;
        border: 1px solid #00adb5;
        color: #00adb5;
        background: none;
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.3s ease-in all;

        &:hover {
          color: #fff;
          background: #00adb5;
        }
      }
    }
  }
</style>