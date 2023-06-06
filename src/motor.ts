import { partida } from "./model";

export const generarNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10 + 1);
};

export const transformaNumeroAleatorio = (cartaGenerada: number): number => {
  return cartaGenerada > 7 ? cartaGenerada + 2 : cartaGenerada;
};

export const generarPuntuacion = (cartaGenerada: number): number => {
  const puntosSumados = cartaGenerada < 10 ? cartaGenerada : 0.5;
  return partida.puntuacion + puntosSumados;
};

export const puntuacionTrasSuma = generarPuntuacion(partida.cartaGenerada);
partida.setPuntos(puntuacionTrasSuma);
