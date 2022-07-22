<template>
  <v-app>
    <!-- <Navbar></Navbar> -->
     <Navbar v-if="private_route"></Navbar>   
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  computed:{
    private_route() {
      if (this.$route.meta.private) return true;
      return false;
    }
  },
  components: {
    Navbar,
  },
};
</script>
