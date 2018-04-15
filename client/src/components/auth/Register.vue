<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <v-flex xs4 offset-xs4>
          <v-form class="px-5">
            <v-text-field
              label="Email"
              v-model="email"
              required
            ></v-text-field>

            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              required
            ></v-text-field>
            <br>
            <div class="error" v-html="error"></div>
            <v-btn class="cyan" color="info" @click="register">Register</v-btn>
          </v-form>
        </v-flex>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthService from '@/services/AuthService'
import Panel from '@/components/global/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      email: undefined,
      password: undefined,
      error: ''
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.error = ''
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>
