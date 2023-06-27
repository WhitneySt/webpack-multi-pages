// alert("Estoy enlazado");
import { DateTime, Duration} from "luxon";
import "./styles/index.scss";

const usuarioLogueado = {
    id: 5
}

const conversaciones = [
  {
    id: 1,
    sentBy: 1,
    // date: "11/05/23",
    hour: "09:27 am",
    message: "Hola, como estas?",
    flag: true,
  },
  {
    id: 2,
    sentBy: 2,
    // date: "12/05/23",
    hour: "09:37 am",
    message: "Hola, bien y tu?",
    flag: true,
  },
  {
    id: 3,
    sentBy: 1,
    // date: "12/05/23",
    hour: "3:12 pm",
    message: "Me puedes mandar el documento porfa?",
    flag: true,
  },
  {
    id: 4,
    sentBy: 2,
    // date: "12/05/23",
    hour: "3:22 pm",
    message: "Claro que si, un momento",
    flag: true,
  },
];

const contenedorMensajes = document.getElementById("app");

//------funciones----------

const imprimirMensajes = (listaMensajes, contenedor) => {
  contenedor.innerHTML = "";
  listaMensajes.forEach((mensaje) => {
    contenedor.innerHTML += `
        <section class="mensajes">
            <article>${mensaje.message}</article>
            <span>${mensaje.date? mensaje.date.toRelative():""}</span>
            <div class="contenedor__acciones" id="acciones${mensaje.id}">
                <span class="mensaje__button">...</span>
                <ul class="acciones hidden">
                    <li>Editar</li>
                    <li>Eliminar</li>
                </ul>
            </div>
            
        </section>
        
        `;
  });
};

const mostrarAcciones = (listaMensajeDOM) => {
  const sectionsMensajes = Array.from(listaMensajeDOM);
  sectionsMensajes.forEach((sectionMensaje) => {
    const buttonAcciones = sectionMensaje.querySelector(".mensaje__button");
    buttonAcciones.addEventListener("click", () => {
      const listaAcciones = sectionMensaje.querySelector(".acciones");
      console.log(listaAcciones);
      listaAcciones.classList.toggle("hidden");
    });
  });
};


const enviarMensaje = (mensaje, listaMensajes, usuario) => {

    //Calcular id
    const id = listaMensajes.length + 1;

    const nuevoMensaje = {
      id: id,
      sentBy: usuario.id,
      date: DateTime.now(),
      message: mensaje,
      fueVisto: false,
    };

    listaMensajes.push(nuevoMensaje);
    console.log(listaMensajes);
    
}


document.addEventListener("DOMContentLoaded", () => {
  imprimirMensajes(conversaciones, contenedorMensajes);
  const mensajesDom = document.querySelectorAll(".contenedor__acciones");
  mostrarAcciones(mensajesDom);
});


//---Luxon---
// const fecha = "2023-05-27T14:19:48.121-05:00";

const ahora = new Date();
console.log(ahora);

const fechaAhora = DateTime.now();
console.log(fechaAhora);

const ahoraRelativo = fechaAhora.toRelative();
console.log(ahoraRelativo);


//-----Para enviarMensajes
const formMensaje = document.getElementById("form");

formMensaje.addEventListener("submit", (e) => {
    e.preventDefault();
    const textarea = document.getElementById("enviarMensaje");
    const mensaje = textarea.value;
    enviarMensaje(mensaje, conversaciones, usuarioLogueado);
    imprimirMensajes(conversaciones, contenedorMensajes);
    formMensaje.reset();
})
