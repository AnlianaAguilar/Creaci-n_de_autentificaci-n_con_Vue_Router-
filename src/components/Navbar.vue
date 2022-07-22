<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <h2>Autenticación</h2>
    </div>

    <v-spacer></v-spacer>

    <v-btn @click="logout"
    color="blue accent-3">
    <span class="mr-2">Logout</span>
      <v-icon>mdi-logout</v-icon>
      </v-btn>

    <!-- <v-btn
        to="/newUser"
        text
      >
        <span class="mr-2">Nuevo Usuario</span>
        <v-icon>mdi-account-multiple-plus</v-icon>
      </v-btn> -->
  </v-app-bar>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  name: "Navbar-component",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.push('/login')

        })
        .catch((error) => {
          // An error happened.
          console.log(error)
        });
    },
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>