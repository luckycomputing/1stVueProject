<template>
  <h1>Hello, Welcome to Home Page.</h1>
</template>

<script>
export default {
  name: "home-page",
  mounted() {
    // Checking whether user is Signed In or Not
    // If not, sending user to Log In Page
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router["push"]({ name: "signUp" });
    }
  },
};
</script>
