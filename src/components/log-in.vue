<template>
  <div
    class="flex flex-col p-4 m-4 border max-w-fit mx-auto bg-blue-100 shadow-lg rounded"
  >
    <img class="w-12 mx-auto inline" src="../assets/logo.png" alt="logo" />
    <h3 class="text-3xl mx-auto inline">Log In</h3>
    <div class="flex flex-col p-2 inline">
      <input
        type="email"
        name=""
        id=""
        placeholder="Enter Email ID"
        class="p-2 m-2 w-72 border-b-2 border-b-indigo-500 shadow rounded focus:outline-indigo-400 focus:border-none"
        v-model="loginEmail"
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="Enter Password"
        class="p-2 m-2 w-72 border-b-2 border-b-indigo-500 mb-6 shadow rounded focus:outline-indigo-400 focus:border-none"
        v-model="loginPassword"
      />
      <button
        class="mx-auto block border-b-4 border-b-lime-500 p-2 w-40 shadow-lg bg-lime-200 hover:bg-lime-300 opacity-80 font-semibold rounded"
        @click="logIn"
      >
        Log In
      </button>
      <router-link
        class="mx-auto mt-4 p-2 font-semibold text-purple-900 bg-purple-300 rounded shadow-lg"
        to="sign-up"
        ><span class="font-bold underline">Not Registered,</span> Click to Sign
        Up
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "log-in",
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
    };
  },
  methods: {
    async logIn() {
      const result = await axios.get(
        `http://localhost:3000/users?email=${this.loginEmail}&password=${this.loginPassword}`
      );
      console.log(result);
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router["push"]({ name: "HomePage" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router["push"]({ name: "HomePage" });
    }
  },
};
</script>
