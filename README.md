# Módulo 7 - Testing - Laboratorio

> Partimos del ejercicio con las correcciones que tenemos hasta ahora, sin perjuicio de trasladar aquellas otras más que puedan hacerse.

## Enunciado

En laboratorios anteriores creamos el juego de la siete y media, luego refactorizamos el código y en este laboratorio vamos a realizar pruebas unitarias para comprobar que el juego funciona correctamente.

Usamos el sandbox de Typescript.

## Apartados obligatorios

Vamos a realizar pruebas unitarias para comprobar si un jugador ha ganado el juego o no.

Para ello,

1. Identifica las funciones y componentes que determinan si un jugador ha ganado la partida o no.

Las funciones y componentes que determinan si un jugador ha ganado la partida o no son la función _comprobarEstadoPartida_ en conexión con el tipo _EstadoPartida_.

2. Crea una serie de tests utilizando la librería de testing vitest para comprobar que el juego funciona correctamente.

Creamos un archivo _model.spec.ts_. Implementamos los tres supuestos de `"POR_DEBAJO_MAXIMO" | "JUSTO_MAXIMA" | "TE_HAS_PASADO"` y vemos cómo superan los test. Lo implementamos con las convenciones de TS.

3. Importa los módulos que fuesen necesarios para poder realizar las pruebas unitarias.

Hemos tenido que importar _comprobarEstadoPartida_ desde _model_.

## Apartados opcionales

Para seguir practicando vamos a añadir dos casos más:

1. Habrás tenido que generar una función que genere un número aleatorio entre 0 y 10 y en el caso de que este número sea mayor que 7, sume 2 al resultado final. Para asegurarnos de que la función se comporta como se espera, se van a realizar sus pruebas unitarias correspondientes.

Esto es, se trataría de nuestras funciones _generarNumeroAleatorio_ y _transformarNumeroAleatorio_. Creamos un archivo _motor.spec.ts_.

Nuestra función _generarNumeroAleatorio_ produce un número aleatorio entre el 1 y el 10, en la combinación de _Math.random_ y _Math.floor_.
Para testear la función, utilizamos _spyOn_ y _mocking_.

Probamos los casos arista de 0 que tendrá que devolver 1, que nombramos caso arista 1, y de 0.99 que tendrá que devolver 10, que llamamos caso arista 2. Pasan los tests.

Ahora, vamos con la función _transformarNumeroAleatorio_ y empleamos el mismo método. Probamos los casos arista de los valores que queremos transformar, esto es, 8 y 9. Vemos que pasan los tests y se transforman respectivamente en 10 y 11. También probamos el caso de que el valor no sea superior a 7, en el que no se le añadirá 2. Por ejemplo, lo hacemos con 7, en el límite, y pasa el test.

2. En el caso de que el jugador haya obtenido una carta, debemos de haber creado una función que devuelva el valor de esa carta. Al igual que en el caso anterior, se van a realizar pruebas unitarias para comprobar que la función se comporta como se espera en diferentes situaciones.

Se trata de nuestra función _generarPuntuacion_, pero en su primera parte. _generarPuntuacion_ no sólo asigna un valor a la carta en función de cuál ha sido sino que además la suma. Nos interesa aquí solamente la atribución de valor.
Si la carta es superior a 10, debe devolver como valor 0.5. Caso contrario, vale su valor nominal.

Al testearla, si utilizamos directamente la función nos dará error porque la misma no sólo hace una cosa. Para ello, traemos a prueba un simulacro de lo que es puntosSumados. No estamos probando directamente la función sino una simulación de la parte de su contenido que nos interesa.

Probamos los casos arista de 10, que debe retornar 0.5, y 9, que debe retornar 9. Ambos pasan el test.

> Fin del laboratorio
