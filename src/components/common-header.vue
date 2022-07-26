<template>
  <div class="cssClass py-4 bg-zinc-400 font-semibold text-lg text-white">
    <router-link to="/">Home</router-link>
    <router-link to="/add-restaurant">Add Restaurant</router-link>
    <router-link to="/update-restaurant">Update Restaurant</router-link>
    <a v-on:click="logOut">LogOut</a>
  </div>
</template>

<script>
export default {
  name: "common-header",
  data() {
    return {};
  },
  methods: {
    logOut() {
      localStorage.clear();
      this.$router["push"]({ name: "logIn" });
    },
  },
};
</script>

<style scoped>
.cssClass * {
  margin: 1rem;
}

.cssClass *:hover {
  background: darkslategray;
  color: white;
  padding: 0.5rem 1rem;
}
</style>
