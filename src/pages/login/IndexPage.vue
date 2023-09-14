<template>
  <q-page class="bg-light-white window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Company & Co</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <div class="q-gutter-md">
              <q-input square filled clearable v-model="login.email" type="email" label="email" />
              <q-input square filled clearable v-model="login.password" type="password" label="password" />
            </div>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="light-green-7" size="lg" class="full-width" label="Login"
              @click.prevent="loginUser()" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
  
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'LoginIndex',
  data() {
    return {
      login: {
        email: null,
        password: null
      }
    }
  },
  created() {
    // if (localStorage.getItem('token')) {
    //   this.$router.push("/")
    // }
  },
  methods: {
    ...mapActions("auth", ["ActionLoginUser", "ActionGetProfile"]),
    loginUser() {
      this.ActionLoginUser(this.login);
    }
  }
}
</script>
  
<style>
.q-card {
  width: 360px;
}
</style>