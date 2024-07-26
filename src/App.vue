<template>
  <NavBar />
  <!-- <BienvenidaaPage /> -->
  <router-view />
  <!-- <EstudiantePage /> -->
  <!-- <EstudianteEliminar /> -->
  <!-- <EstudianteGuardar /> -->
</template>
<script>


import NavBar from "../src/components/NavBar.vue";
export default {

  name: "App",
  components: {
    NavBar,
  }

};

</script>

<style>
#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>