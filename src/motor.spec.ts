import { vi } from "vitest";

import {
  generarNumeroAleatorio,
  generarPuntuacion,
  transformaNumeroAleatorio,
} from "./motor";

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
});

describe("transformarNumeroAleatorio", () => {
  it("Si superior a 7, debe devolver un número aleatorio entre 1-7 y 10-12, excluidos los valores 8 y 9. Caso arista 1", () => {
    // Arrange
    const numeroAleatorio: number = 8;
    const numeroEsperado: number = 10;

    // Act
    const resultado = transformaNumeroAleatorio(numeroAleatorio);

    // Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Si superior a 7, debe devolver un número aleatorio entre 1-7 y 10-12, excluidos los valores 8 y 9. Caso arista 2", () => {
    // Arrange
    const numeroAleatorio: number = 9;
    const numeroEsperado: number = 11;

    // Act
    const resultado = transformaNumeroAleatorio(numeroAleatorio);

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
});
