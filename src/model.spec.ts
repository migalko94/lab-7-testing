import { EstadoPartida, comprobarEstadoPartida } from "./model";

describe("comprobarEstadoPartida", () => {
  it("Debe devolver TE_HAS_PASADO cuando la puntuación es superior a 7.5", () => {
    // Arrange
    const puntuacion: number = 8;
    const resultadoEsperado: EstadoPartida = "TE_HAS_PASADO";
    // Act
    const resultado = comprobarEstadoPartida(puntuacion);
    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Debe devolver JUSTO_MAXIMA cuando la puntuación es exactamente 7.5", () => {
    // Arrange
    const puntuacion: number = 7.5;
    const resultadoEsperado: EstadoPartida = "JUSTO_MAXIMA";
    // Act
    const resultado = comprobarEstadoPartida(puntuacion);
    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Debe devolver TE_HAS_PASADO cuando la puntuación es inferior a 7.5", () => {
    // Arrange
    const puntuacion: number = 7;
    const resultadoEsperado: EstadoPartida = "POR_DEBAJO_MAXIMO";
    // Act
    const resultado = comprobarEstadoPartida(puntuacion);
    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});
