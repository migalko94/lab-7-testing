import {
  partida,
  EstadoPartida,
  comprobarEstadoPartida,
  setPuntos,
} from "./model";
import {
  generarNumeroAleatorio,
  transformaNumeroAleatorio,
  generarPuntuacion,
} from "./motor";

export const mostrarMensaje = (mensaje: string): void => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  elementoPuntuacion
    ? (elementoPuntuacion.innerHTML = mensaje)
    : console.error(
        "muestraMensajeComprobacion: No se ha encontrado el elemento con id puntuación"
      );
};

export const resultadoPartida = () => {
  const estado = comprobarEstadoPartida(partida.puntuacion);

  if (estado === "TE_HAS_PASADO") {
    gameOver();
  }
  if (estado === "JUSTO_MAXIMA") {
    partidaGanada();
  }
};

export const partidaGanada = () => {
  let mensaje: string = `${partida.puntuacion} ¡Lo has clavado! ¡Enhorabuena! 🎉🎉🎉`;
  mostrarMensaje(mensaje);

  gestionarResultado();
};

export const gameOver = () => {
  let mensaje: string = `${partida.puntuacion} Te has pasado 🪦 GAME OVER`;
  mostrarMensaje(mensaje);

  gestionarResultado();
};

export const cambiarDisplay = (idMiniatura: string): void => {
  let cartaMostrada = document.getElementById("carta-mostrada");
  const miniatura = document.getElementById(idMiniatura);
  if (
    cartaMostrada &&
    miniatura &&
    cartaMostrada instanceof HTMLImageElement &&
    miniatura instanceof HTMLImageElement
  ) {
    cartaMostrada.src = miniatura.src;
  }
};

export const mostrarCarta = (cartaGenerada: number): void => {
  switch (cartaGenerada) {
    case 1:
      cambiarDisplay("miniatura1");

      break;
    case 2:
      cambiarDisplay("miniatura2");

      break;
    case 3:
      cambiarDisplay("miniatura3");

      break;

    case 4:
      cambiarDisplay("miniatura4");

      break;
    case 5:
      cambiarDisplay("miniatura5");

      break;
    case 6:
      cambiarDisplay("miniatura6");

      break;

    case 7:
      cambiarDisplay("miniatura7");

      break;
    case 10:
      cambiarDisplay("miniatura10");

      break;
    case 11:
      cambiarDisplay("miniatura11");

      break;
    case 12:
      cambiarDisplay("miniatura12");

      break;

    default:
      console.log(cartaGenerada);
      console.log("No deberías estar aquí");

      break;
  }
};

export const dameCarta = (): void => {
  partida.cartaGenerada = generarNumeroAleatorio();
  partida.cartaGenerada = transformaNumeroAleatorio(partida.cartaGenerada);
  mostrarCarta(partida.cartaGenerada);
  const puntuacionTrasSuma = generarPuntuacion(partida.cartaGenerada);
  setPuntos(puntuacionTrasSuma);
  let mensaje = `Tu puntuación es ${partida.puntuacion}`;
  mostrarMensaje(mensaje);
  resultadoPartida();
};

export const gestionarResultado = () => {
  habilitarBotonComprobarCarta(false);
  habilitarBotonMePlanto(false);
  habilitarBotonNuevaPartida();
};

export const mensajeSegunPuntuacion = (mensaje: string): void => {
  if (partida.puntuacion < 4) {
    mensaje = `${partida.puntuacion} Has sido muy conservador 😐`;
    mostrarMensaje(mensaje);
  }
  if (partida.puntuacion >= 4 && partida.puntuacion < 6) {
    mensaje = `${partida.puntuacion} Te ha entrado el canguelo eh? 😉`;
    mostrarMensaje(mensaje);
  }
  if (partida.puntuacion >= 6 && partida.puntuacion <= 7) {
    mensaje = `${partida.puntuacion} Casi casi...🫣🫣`;
    mostrarMensaje(mensaje);
  }
};

export const mePlanto = () => {
  let mensaje: string = `Tu puntuación es ${partida.puntuacion}`;
  mensajeSegunPuntuacion(mensaje);

  resultadoPartida();
  habilitarBotonNuevaPartida();
  habilitarBotonQueHabriaPasado();
  habilitarBotonComprobarCarta(false);
  habilitarBotonMePlanto(false);
};

export const habilitarBotonComprobarCarta = (estaHabilitado: boolean) => {
  if (
    estaHabilitado &&
    botonComprobarCarta &&
    botonComprobarCarta instanceof HTMLButtonElement
  ) {
    botonComprobarCarta.disabled = false;
  }

  if (
    !estaHabilitado &&
    botonComprobarCarta &&
    botonComprobarCarta instanceof HTMLButtonElement
  ) {
    botonComprobarCarta.disabled = true;
  }
};

export const habilitarBotonMePlanto = (estaHabilitado: boolean) => {
  if (
    estaHabilitado &&
    botonMePlanto &&
    botonMePlanto instanceof HTMLButtonElement
  ) {
    botonMePlanto.disabled = false;
  }
  if (
    !estaHabilitado &&
    botonMePlanto &&
    botonMePlanto instanceof HTMLButtonElement
  ) {
    botonMePlanto.disabled = true;
  }
};

export const ocultaBotonNuevaPartida = () => {
  const botonNuevaPartida = document.getElementById("nueva-partida");
  if (botonNuevaPartida) {
    botonNuevaPartida.hidden = true;
  }
};

export const habilitarBotonNuevaPartida = () => {
  const botonNuevaPartida = document.getElementById("nueva-partida");
  if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.hidden = false;
  }
};

export const ocultaBotonQueHabriaPasado = () => {
  const botonQueHabriaPasado = document.getElementById("que-habria-pasado");
  if (
    botonQueHabriaPasado &&
    botonQueHabriaPasado instanceof HTMLButtonElement
  ) {
    botonQueHabriaPasado.hidden = true;
  }
};

export const handlerQueHabriaPasado = () => {
  mostrarQueHabriaPasado();

  ocultaBotonQueHabriaPasado();
};

export const habilitarBotonQueHabriaPasado = () => {
  const botonQueHabriaPasado = document.getElementById("que-habria-pasado");
  if (
    botonQueHabriaPasado &&
    botonQueHabriaPasado instanceof HTMLButtonElement
  ) {
    botonQueHabriaPasado.hidden = false;
  }
};

export const mostrarMensajeResultadoPosible = (estado: EstadoPartida) => {
  let mensaje: string = `Tu puntuación habría sido ${partida.puntuacion}`;

  if (estado === "POR_DEBAJO_MAXIMO") {
    mostrarMensaje(mensaje);
  }

  if (estado === "TE_HAS_PASADO") {
    mensaje = `${partida.puntuacion} Te habrías pasado 🪦 GAME OVER`;
    mostrarMensaje(mensaje);
  }
  if (estado === "JUSTO_MAXIMA") {
    mensaje = `${partida.puntuacion} Habrías ganado! 🫠`;
    mostrarMensaje(mensaje);
  }
};

export const mostrarQueHabriaPasado = () => {
  let cartaGenerada = generarNumeroAleatorio();
  cartaGenerada = transformaNumeroAleatorio(cartaGenerada);
  mostrarCarta(cartaGenerada);
  const puntuacionTrasSuma = generarPuntuacion(cartaGenerada);
  setPuntos(puntuacionTrasSuma);

  const estado = comprobarEstadoPartida(partida.puntuacion);
  mostrarMensajeResultadoPosible(estado);
};

export const botonComprobarCarta = document.getElementById("dame-carta");
export const botonMePlanto = document.getElementById("me-planto");
export const botonNuevaPartida = document.getElementById("nueva-partida");
export const botonQueHabriaPasado =
  document.getElementById("que-habria-pasado");
