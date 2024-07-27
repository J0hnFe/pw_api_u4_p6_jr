<template>
    <div class="navbar">
        <router-link to="/"> Bienvenida </router-link>
        <router-link to="/buscar/vacio"> Estudiante buscar </router-link>
        <router-link :to="{path: '/guardar', query: {cedula: '1111'}}"> Estudiante crear </router-link>
        <router-link to="/eliminar"> Estudiante eliminar </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    /* padding: 10px 20px; */
    display: flex;
    margin: 52px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar a {
    color: #211C6A;
    background: rgb(189, 189, 189);
    border-radius: 30px;
    padding: 15px 25px;
    box-shadow: 0 0 10px 5px #000;
    margin: 0 10px;
    text-decoration: none;
}

.navbar a:hover {
    background: rgb(170, 170, 170);
}
</style>