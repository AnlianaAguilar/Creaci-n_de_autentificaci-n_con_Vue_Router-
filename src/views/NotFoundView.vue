<template>
  <v-cotainer>
    <v-row class="ma-8">
      <v-col md="5" class="pl-8">
        <v-img class="img" :src="require('../assets/sad.png')"></v-img>
      </v-col>
      <v-col md="6" justify="center" class="text-md-center mt-16 pt-16" >
        <h1>404</h1>
        <h2>Esta pagina no existe!!</h2>
        <router-link to="/login" class="text-decoration-none">
        <v-icon color="blue accent-3 ">mdi-arrow-left-circle-outline</v-icon>Ir a Login</router-link>
      </v-col>
    </v-row>
  </v-cotainer>
</template>

<script>
export default {
  name: "NotFound-view",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  //methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
h1{
    font-size: 60px;
}
h2{
    font-size: 40px;
}
</style>