<template>
    <div class="container">
        <div class="formulario">
            <header>
                <!-- <h1>Estudiante</h1> -->
            </header>
            <nav></nav>
            <section>
                <form class="form" action="http://www.google.com.ec">
                    <h2>Nuevo estudiante</h2>
                    <p type="Nombre:"><input type="text"></p>
                    <p type="Apellido:"><input type="text"></p>
                    <p type="Fecha nacimiento:"><input type="date"></p>
                    <p type="Cedula:"><input type="text"></p>
                    <p type="Genero:"><input type="text"></p>
                    <div class="boton">
                        <button>Guardar</button>
                    </div>
                </form>
            </section>
            <footer></footer>
        </div>
    </div>
</template>

<script>
</script>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

body {
    background: #59B4C3;
}

/* Atributo de tipo pseudoclase */
p:before {
    content: attr(type);
    display: block;
    margin: 3px 2px;
    font-size: 15px;
    color: #211C6A;
}

/* Selector de tipo elemento*/
input {
    width: 249px;
    border: none;
    border-bottom: 2px solid #211C6A;
    background: none;
}

input:focus {
    outline: none;
    /* Para quitar marco al hacer clic */
    border-bottom: 2px solid #59B4C3;
}

h2 {
    margin: 10px 2px;
    width: 180px;
    color: #211C6A;
    border-bottom: 2px solid #6f7239;
}

.form {
    width: 350px;
    height: 400px;
    background: rgb(189, 189, 189);
    border-radius: 30px;
    padding: 25px 35px;
    box-shadow: 0 0 40px 5px #000;
}

.boton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
}

button {
    padding: 10px 20px;
    background: #78788c;
    margin-right: 18px;
    margin-left: 18px;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    border: none;
}
</style>