<template>
  <v-layout>
    <v-toolbar fixed class="cyan" dark>
      <v-toolbar-side-icon to="/">H</v-toolbar-side-icon>
      <v-toolbar-title>TabTracker</v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat to="/songs">Browse</v-btn>
        <v-btn flat to="/songs/create" v-if="$store.state.isUserLoggedIn">Add</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/register" v-if="!$store.state.isUserLoggedIn">Register</v-btn>
        <v-btn flat to="/login" v-if="!$store.state.isUserLoggedIn">Login</v-btn>
        <v-btn flat @click="logout" v-if="$store.state.isUserLoggedIn">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-layout>
</template>

<script>
// import AuthService from '@/services/AuthService'

export default {
  data () {
    return {

    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style scoped>

</style>
