import axios from 'axios';
import router from '../router'

const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: '',
  error: null,
  blogs: [],
  ownBlogs: [],
  singleBlog: ''
};

const getters = {
  isLoggedIn: state => !!state.token,
  authState: state => state.status,
  user: state => state.user,
  error: state => state.error,
  blogs: state => state.blogs,
  ownBlogs: state => state.ownBlogs,
  singleBlog: state => state.singleBlog
};

const actions = {
  async login({commit}, user) {
    try {
      commit('auth_request');
      const response = await axios.post('/users/login', user);
      if(response.data.success) {
        const token = response.data.token;
        const user = response.data.user;

        localStorage.setItem('token', token);

        axios.defaults.headers.common['Authorization'] = token;
        commit('auth_success', token, user);
      }
      return response;
    } catch (error) {
      commit('auth_error', error);
    }
  },
  async register({
    commit
  }, userData){
    try {
      commit('register_request');
      const res = await axios.post('/users/register', userData);
      if(res.data.success !== undefined) {
        commit('register_success');
      } 
      return res;
    } catch (error) {
      commit('register_error', error);
    }
  },
  async getProfile({commit}) {
    commit('profile_request');
    const res = await axios.get('/users/profile');
    commit('user_profile', res.data.user);
    return res;
  }
  ,
  async logout({commit}) {
    await localStorage.removeItem('token');
    commit('logout');
    delete axios.defaults.headers.common['Authorization'];
    router.push('/');
    return 
  },
  async getBlogs({commit}) {
    const res = await axios.get('/blogs/all-blogs');
    commit('all_blogs', res.data)
  },
  async addBlog({commit}, blogData) {
    const res = await axios.post('/blogs/add-blog', blogData);
    commit('create_blog', res.data);
  },
  async getOwnBlogs({commit}, id) {
    const res = await axios.get(`/blogs/profile-blogs/${id}`);
    commit('profile_blogs', res.data);
  },
  async deleteOwnBlog({commit}, id) {
    const res = await axios.delete(`/blogs/delete-blog/${id}`);
    console.log(res);
    commit('delete_blog');
  },
  async getPost({commit}, id) {
    const res = await axios.get(`/blogs/post/${id}`);
    commit('single_blog', res.data);
  },
  async updateBlog({commit}, {id, updBlog}) {
    const res = await axios.put(`/blogs/edit-blog/${id}`, updBlog);
    commit('update_blog', res.data);
  }
};

const mutations = {
  auth_request(state) {
    state.error = null
    state.status = 'loading'
  },
  auth_success(state, token, user) {
    state.error = null
    state.token = token;
    state.user = user;
    state.status = 'success';
  },
  auth_error(state, error) {
    state.error = error.response.data.msg
  },
  register_request(state) {
    state.error = null
    state.status = 'loading';
  },
  register_success(state) {
    state.error = null
    state.status = 'success';
  },
  register_error(state, error) {
    state.error = error.response.data.msg
  },
  logout(state) {
    state.error = null
    state.status = '';
    state.token = '';
    state.user = '';
  },
  profile_request(state) {
    state.status = 'loading'
  },
  user_profile(state, user) {
    state.user = user
  },
  all_blogs(state, blogs) {
    state.blogs = blogs
  },
  create_blog(state, blog) {
    state.blogs.push(blog)
  },
  profile_blogs(state, ownBlogs) {
    state.ownBlogs = ownBlogs;
  },
  delete_blog(state) {
    state.ownBlogs;
  },
  single_blog(state, blog) {
    state.singleBlog = blog
  },
  update_blog(state, blog) {
    state.singleBlog = blog;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}