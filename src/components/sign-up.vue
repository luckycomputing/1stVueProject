<template>
  <div
    class="flex flex-col p-4 m-4 border max-w-fit mx-auto bg-green-100 shadow-lg rounded"
  >
    <img class="w-12 mx-auto inline" src="../assets/logo.png" alt="logo" />
    <h3 class="text-3xl mx-auto inline">Sign Up</h3>
    <div class="flex flex-col p-2 inline">
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Name"
        class="p-2 m-2 w-72 border-b-2 border-b-blue-500 shadow rounded focus:outline-blue-400 focus:border-none"
        v-model="name"
        required
      />
      <input
        type="email"
        name=""
        id=""
        placeholder="Enter Email ID"
        class="p-2 m-2 w-72 border-b-2 border-b-blue-500 shadow rounded focus:outline-blue-400 focus:border-none"
        v-model="email"
        required
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="Enter Password"
        class="p-2 m-2 w-72 border-b-2 border-b-blue-500 mb-6 shadow rounded focus:outline-blue-400 focus:border-none"
        v-model="password"
        required
      />
      <button
        class="mx-auto block border-b-4 border-b-purple-500 p-2 w-40 shadow-lg bg-purple-200 hover:bg-purple-300 opacity-80 font-semibold rounded"
        v-on:click="signUp"
      >
        Sign Up
      </button>
      <router-link
        class="mx-auto mt-4 p-2 font-semibold text-pink-900 bg-blue-300 rounded shadow-lg"
        to="log-in"
        ><span class="font-bold underline">Already Registered,</span> Click to
        Login
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "sign-up",
  components: {},

  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  mounted() {
    // Checking whether user is Signed In or Not
    // If Signed In, sending user to Home Page
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router["push"]({ name: "HomePage" });
    }
  },
  methods: {
    // Saving User details in Database through API
    async signUp() {
      if (this.name && this.email && this.password !== "") {
        const result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        // Redirecting user to Home Page after Signing Up
        if (result.status === 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router["push"]({ name: "HomePage" });
        }
      } else {
        alert("Please fill all details.");
      }
    },
  },
};
</script>
