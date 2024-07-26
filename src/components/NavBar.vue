<template>

    <div>
        <router-link to="/"> Bienvenida </router-link>
        <router-link to="/buscar/vacio"> Estudiante buscar </router-link>
        <router-link to="/guardar"> Estudiante crear </router-link>
        <router-link to="/eliminar"> Estudiante eliminar </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
    padding: 0px 30px;
}

div a {
    color: #211C6A;
    background: rgb(189, 189, 189);
    border-radius: 30px;
    padding: 15px 25px;
    box-shadow: 0 0 10px 5px #000;
}
</style>