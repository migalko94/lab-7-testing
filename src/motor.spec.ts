import { vi } from "vitest";

import {
  generarNumeroAleatorio,
  generarPuntuacion,
  transformaNumeroAleatorio,
} from "./motor";

import { cartaGenerada, partida } from "./model";
import * as model from "./model";

describe("generarNumeroAleatorio", () => {
  it("Debe devolver un número aleatorio entre 1 y 10. Caso arista 1", () => {
    // Arrange
    const numeroEsperado: number = 1;

    vi.spyOn(global.Math, "random").mockReturnValue(0);

    // Act
    const resultado = generarNumeroAleatorio();

    // Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Debe devolver un número aleatorio entre 1 y 10. Caso arista 2", () => {
    // Arrange
    const numeroEsperado: number = 10;

    vi.spyOn(global.Math, "random").mockReturnValue(0.99);

    // Act
    const resultado = generarNumeroAleatorio();

    // Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Debe devolver un número aleatorio entre 1 y 10. Caso arista 3", () => {
    // Arrange
    const numeroEsperado: number = 6;

    vi.spyOn(global.Math, "random").mockReturnValue(0.59);

    // Act
    const resultado = generarNumeroAleatorio();

    // Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Debe devolver un número aleatorio entre 1 y 10. Caso arista 4", () => {
    // Arrange
    const numeroEsperado: number = 5;

    vi.spyOn(global.Math, "random").mockReturnValue(0.41);

    // Act
    const resultado = generarNumeroAleatorio();

    // Assert
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("generarPuntuacion", () => {
  it("Si superior a 10, debe devolver como valor de la carta 0.5. Caso contrario, su valor nominal. Caso arista 1", () => {
    // Arrange
    const cartaGenerada: number = 10;
    const numeroEsperado: number = 0.5;

    // Act
    const resultado = generarPuntuacion(cartaGenerada);
    // Assert
    expect(numeroEsperado).toBe(resultado);
  });

  it("Si superior a 10, debe devolver como valor de la carta 0.5. Caso contrario, su valor nominal. Caso arista 2", () => {
    // Arrange
    const cartaGenerada: number = 9;
    const numeroEsperado: number = 9;

    // Act
    const resultado = generarPuntuacion(cartaGenerada);

    // Assert
    expect(numeroEsperado).toBe(resultado);
  });

  it("A puntuación tiene que sumarse puntosSumados. Se suma valor transformado a 0.5. Caso arista 1", () => {
    // Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(5);
    const cartaGenerada: number = 10;
    const numeroEsperado = 5.5;

    // Act
    const resultado = generarPuntuacion(cartaGenerada);
    // Assert
    expect(numeroEsperado).toBe(resultado);
  });

  it("A puntuación tiene que sumarse puntosSumados. Se suma valor no transformado, esto es, nominal. Caso arista 2", () => {
    // Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(4);
    const cartaGenerada: number = 3;
    const numeroEsperado = 7;

    // Act
    const resultado = generarPuntuacion(cartaGenerada);
    // Assert
    expect(numeroEsperado).toBe(resultado);
  });
});
describe("transformarNumeroAleatorio", () => {
  it("Si superior a 7, debe devolver un número aleatorio entre 1-7 y 10-12, excluidos los valores 8 y 9. Caso arista 1", () => {
    // Arrange

    vi.spyOn(model, "cartaGenerada", "get").mockReturnValue(8);
    const numeroEsperado: number = 10;

    // Act
    const resultado = transformaNumeroAleatorio(cartaGenerada);

    // Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Si superior a 7, debe devolver un número aleatorio entre 1-7 y 10-12, excluidos los valores 8 y 9. Caso arista 2", () => {
    // Arrange
    vi.spyOn(model, "cartaGenerada", "get").mockReturnValue(9);
    const numeroEsperado: number = 11;

    // Act
    const resultado = transformaNumeroAleatorio(cartaGenerada);

    // Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Si superior a 7, debe devolver un número aleatorio entre 1-7 y 10-12, excluidos los valores 8 y 9. Caso arista 3", () => {
    // Arrange
    const numeroAleatorio: number = 7;
    const numeroEsperado: number = 7;

    // Act
    const resultado = transformaNumeroAleatorio(numeroAleatorio);

    // Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Si superior a 7, debe devolver un número aleatorio entre 1-7 y 10-12, excluidos los valores 8 y 9. Caso arista 4", () => {
    // Arrange
    const numeroAleatorio: number = 3;
    const numeroEsperado: number = 3;

    // Act
    const resultado = transformaNumeroAleatorio(numeroAleatorio);

    // Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Si superior a 7, debe devolver un número aleatorio entre 1-7 y 10-12, excluidos los valores 8 y 9. Caso arista 5", () => {
    // Arrange
    const numeroAleatorio: number = 5;
    const numeroEsperado: number = 5;

    // Act
    const resultado = transformaNumeroAleatorio(numeroAleatorio);

    // Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Si superior a 7, debe devolver un número aleatorio entre 1-7 y 10-12, excluidos los valores 8 y 9. Caso arista 6", () => {
    // Arrange
    const numeroAleatorio: number = 1;
    const numeroEsperado: number = 1;

    // Act
    const resultado = transformaNumeroAleatorio(numeroAleatorio);

    // Assert
    expect(resultado).toBe(numeroEsperado);
  });
});
