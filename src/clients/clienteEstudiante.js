import axios from "axios";

// Metodos de consumo del API
const obtenerPorCedula = async (cedula) => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula}`).then(r => r.json());
    console.log(data);
    return data;
}

const obtenerPorCedulaAxios = async (cedula) => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.data);
    console.log(data);
    return data;
}

const guardar = async (estudianteBody) => {
    console.log(data);
    return data;
}

const actualizar = async (cedula, estudianteBody) => {
    const data = axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`, estudianteBody).then(r => r.data);
    console.log(data);
    return data;
}

const actualizarParcial = async (cedula, estudianteBody) => {
    axios.patch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`, estudianteBody).then(r => r.data);
    console.log(data);
    return data;
}

const eliminar = async (cedula) => {
    axios.delete(`http://localhost:8080/API/v1.0/Matricula/${cedula}`).then(r => r.data);
    console.log(data);
    return data;
}



// Metodos de fachada
export const obtenerPorCedulaFachada = async (cedula) => {
    return await obtenerPorCedula(cedula);
}

export const obtenerPorCedulaAxiosFachada = async (cedula) => {
    return await obtenerPorCedulaAxios(cedula);
}

export const guardarFachada = async (estudianteBody) => {
    return await guardar(estudianteBody);
}

export const actualizarFachada = async (cedula, estudianteBody) => {
    return await actualizar(cedula, estudianteBody);
}

export const actualizarParcialFachada = async (cedula, estudianteBody) => {
    return await actualizarParcial(cedula, estudianteBody);
}

export const eliminarFachada = async (cedula) => {
    return await eliminar(cedula)
}


























