import { partida } from "./model";

export const generarNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10 + 1);
};

export const transformaNumeroAleatorio = (cartaGenerada: number): number => {
  return cartaGenerada > 7 ? cartaGenerada + 2 : cartaGenerada;
};

export const generarPuntuacion = (cartaGenerada: number) => {
  const puntosSumados = cartaGenerada < 10 ? cartaGenerada : 0.5;
  const puntuacionTrasSuma = partida.puntuacion + puntosSumados;
  setPuntos(puntuacionTrasSuma);
};

const setPuntos = (nuevoPunto: number): void => {
  partida.puntuacion = nuevoPunto;
};
