<template>
  <v-container>
    <v-row justify="center"  class="mt-10">
      <v-col md="6" >
        <v-img :src="require('../assets/register.png')" class="mx-3" contain />
      </v-col>
      <v-col>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Correo"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :counter="6"
            :rules="passwordRules"
            label="Contraseña"
            required
            type="password"
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="teal accent-3"
            class="mr-4"
            @click="login"
          >
            Login
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Borrar</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "component-name",
  // props: {},
  data: function () {
    return {
      valid: true,
      password: "",
      passwordRules: [
        (v) => !!v || "Debe ingresar si Contraseña",
        (v) => (v && v.length <= 6) || "La contraseña debe tener 6 caracteres",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "Debe ingresar su Correo electronico",
        (v) => /.+@.+\..+/.test(v) || "El correo debe ser Valido",
      ],
    };
  },
  // computed: {},
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    login() {
      this.validate();
      if(this.valid==false) return
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          this.$router.push('/')
          // ...
        })
        .catch((error) => {
        //   const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
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