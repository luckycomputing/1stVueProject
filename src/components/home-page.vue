<template>
  <common-header />
  <h1 class="m-8 p-4 text-center text-4xl">
    Hello {{ userName }}, Welcome to Home Page.
  </h1>
</template>

<script>
import commonHeader from "@/components/common-header";

export default {
  name: "home-page",
  data() {
    return {
      userName: "",
    };
  },
  components: {
    commonHeader,
  },
  mounted() {
    // Checking whether user is Signed In or Not
    // If not, sending user to Log In Page
    let user = localStorage.getItem("user-info");
    this.userName = JSON.parse(user).name;
    if (!user) {
      this.$router["push"]({ name: "signUp" });
    }
  },
};
</script>
