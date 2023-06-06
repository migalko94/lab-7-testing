export type EstadoPartida =
  | "POR_DEBAJO_MAXIMO"
  | "JUSTO_MAXIMA"
  | "TE_HAS_PASADO";

export let puntuacion: number = 0;
export let cartaGenerada = 0;

export const comprobarEstadoPartida = (puntuacion: number): EstadoPartida => {
  if (puntuacion > 7.5) {
    return "TE_HAS_PASADO";
  }
  if (puntuacion === 7.5) {
    return "JUSTO_MAXIMA";
  }

  return "POR_DEBAJO_MAXIMO";
};

export const puntuacionACero = () => {
  partida.puntuacion = 0;
};

export const reinicioImagen = () => {
  const cartaBocaAbajo = "contenido/back.jpg";
  let cartaMostrada = document.getElementById("carta-mostrada");
  if (cartaMostrada && cartaMostrada instanceof HTMLImageElement) {
    cartaMostrada.src = cartaBocaAbajo;
  }
};

export const setPuntos = (nuevoPunto: number): void => {
  partida.puntuacion = nuevoPunto;
};

export const partida = {
  puntuacion: 0,
  cartaGenerada: 0,
  puntuacionACero,
  reinicioImagen,
  setPuntos,
};
