import { partida } from "./model";

import {
  mostrarMensaje,
  dameCarta,
  mePlanto,
  habilitarBotonComprobarCarta,
  habilitarBotonMePlanto,
  ocultaBotonNuevaPartida,
  ocultaBotonQueHabriaPasado,
  handlerQueHabriaPasado,
  botonComprobarCarta,
  botonMePlanto,
  botonNuevaPartida,
  botonQueHabriaPasado,
} from "./ui";

const handlerNuevaPartida = () => {
  partida.reinicioImagen();
  partida.puntuacionACero();
  habilitarBotonComprobarCarta(true);
  habilitarBotonMePlanto(true);
  let mensaje: string = `Tu puntuación es ${partida.puntuacion}`;
  mostrarMensaje(mensaje);
  ocultaBotonNuevaPartida();
  ocultaBotonQueHabriaPasado();
};

document.addEventListener("DOMContentLoaded", handlerNuevaPartida);

if (botonComprobarCarta && botonComprobarCarta instanceof HTMLButtonElement) {
  botonComprobarCarta.addEventListener("click", dameCarta);
}

if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener("click", mePlanto);
}

if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", handlerNuevaPartida);
}

if (botonQueHabriaPasado && botonQueHabriaPasado instanceof HTMLButtonElement) {
  botonQueHabriaPasado.addEventListener("click", handlerQueHabriaPasado);
}
