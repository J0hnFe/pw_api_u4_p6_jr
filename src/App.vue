<template>
  <!-- <BienvenidaaPage /> -->
  <router-view />
  <!-- <EstudiantePage /> -->
  <!-- <EstudianteEliminar /> -->
  <!-- <EstudianteGuardar /> -->
</template>

<script>
import BienvenidaaPage from "./pages/BienvenidaPage.vue";
// import EstudiantePage from "./pages/EstudiantePage.vue";
// import EstudianteEliminar from "./pages/EstudianteEliminar.vue";
// import EstudianteGuardar from "./pages/EstudianteGuardar.vue";

export default {
  name: "App",
  components: {
    BienvenidaaPage,
    // EstudiantePage,
    // EstudianteEliminar,
    // EstudianteGuardar,
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