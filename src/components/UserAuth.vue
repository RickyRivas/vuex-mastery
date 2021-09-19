<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
  <p>{{ isTestAuth }}</p>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      this.$store.dispatch('loggedIn');
    },
    logout() {
      this.$store.dispatch('loggedOut');
    }
  },

  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
    isTestAuth() {
      return this.$store.getters.testAuth;
    }
  }
};
</script>
