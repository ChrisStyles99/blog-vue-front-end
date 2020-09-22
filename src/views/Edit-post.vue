<template>
  <div class="edit-blog">
    <form @submit.prevent>
      <h1>Edit post</h1>
      <input required type="text" id="title" name="title" placeholder="Enter the title" v-model="singleBlog.title" :disabled="user._id !== singleBlog.userId">
      <textarea required name="body" id="body" rows="40" placeholder="Enter the body of the post" v-model="singleBlog.body" :disabled="user._id !== singleBlog.userId">
      </textarea>
      <button :disabled="user._id !== singleBlog.userId" @click="updatePost()" v-if="user._id === singleBlog.userId">Update</button>
      <p v-if="user._id !== singleBlog.userId">You're not supposed to be here, return <router-link to="/all-blogs">All blogs</router-link></p>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  data() {
    return {
      id: '',
      data: ''
    }
  },
  computed: {
    ...mapGetters(['singleBlog', 'user'])
  },
  methods: {
    ...mapActions(['getPost', 'updateBlog', 'getProfile']),
    updatePost: function() {
      this.id = this.$route.params.id;
      if(this.user._id !== this.singleBlog.userId) {
        return this.$router.push('/profile');
      }
      this.data = {
        title: this.singleBlog.title,
        body: this.singleBlog.body
      }
      this.updateBlog({id: this.id, updBlog: this.data});
      this.$router.push(`/post/${this.id}`);
    }
  },
  created() {
    if(this.user._id !== this.singleBlog.userId) {
      this.$router.push('/profile');
    }
    this.id = this.$route.params.id;
    this.getPost(this.id);
    this.getProfile();
  },
}
</script>

<style lang="scss">
  .edit-blog {
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

      button {
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