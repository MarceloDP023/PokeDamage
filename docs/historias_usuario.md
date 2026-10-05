# Historias de usuario

Los datos de referencia necesarios para trabajar con los conceptos del dominio,
como Pokémon, estadísticas, tipos, movimientos, habilidades y naturalezas, se
obtendrán a partir de los ficheros CSV descargables de PokeAPI.

La procedencia y los datos necesarios para el proyecto se describen con más
detalle en [datos](../datos/datos.md).

## [HU001] Dificultad para estudiar situaciones concretas durante el entrenamiento

Durante la preparación de una competición pierdo tiempo intentando reproducir
situaciones concretas mediante partidas de entrenamiento, ya que no puedo
controlar cuándo aparecen ni bajo qué condiciones.

Una situación de combate puede variar en función de los Pokémon implicados, sus
estadísticas, tipos, habilidades, naturaleza y EVs, el movimiento utilizado y
las condiciones del combate que puedan afectar al resultado.

Necesito poder estudiar estas situaciones porque pequeñas variaciones en estos
elementos pueden modificar el resultado y algunas situaciones relevantes pueden
no llegar a aparecer durante el entrenamiento antes de una competición.


## [HU002] Incertidumbre sobre el resultado de una acción

Cuando me encuentro ante una situación concreta no siempre puedo determinar con
seguridad qué resultado puede producir una acción.

El daño depende de las estadísticas efectivas del atacante y del defensor, de la
potencia y categoría del movimiento, de los tipos implicados y de los
modificadores que sean aplicables en ese momento.

Además, el daño no tiene siempre un único valor debido a la variación aleatoria,
por lo que el resultado de una misma acción puede encontrarse dentro de un rango.

## [HU003] Dificultad para saber si una acción alcanza el objetivo buscado

Durante una partida puedo encontrar una situación en la que necesito debilitar a
un Pokémon rival pero no sé con seguridad si una determinada acción será
suficiente.

Para determinarlo intervienen el rango de daño que puede producir la acción, los
puntos de salud que conserva el defensor y las condiciones concretas presentes
en el combate.

Esta incertidumbre puede hacer que tome una decisión sin saber si realmente puede
alcanzar el objetivo que persigo.

## [HU004] Dificultad para valorar distintas decisiones en las mismas condiciones

En una misma situación de combate puedo disponer de varias decisiones posibles y
no siempre resulta sencillo determinar cómo cambia el resultado al escoger una u
otra.

Para poder valorar correctamente esas alternativas necesito mantener las mismas
condiciones de combate y conocer qué elementos cambian entre una decisión y otra,
como el movimiento elegido o la configuración utilizada.

Si las condiciones no son equivalentes, los resultados obtenidos no permiten
valorar correctamente las distintas decisiones.

## [HU005] Tiempo invertido en Pokémon o configuraciones que finalmente se descartan

Antes de una competición dedico tiempo a preparar Pokémon y probar distintas
configuraciones sin saber previamente si responderán adecuadamente ante las
situaciones que considero importantes.

La elección del propio Pokémon influye en el resultado debido a sus estadísticas
base, tipos, habilidades y movimientos disponibles. Además, dentro de un mismo
Pokémon, elementos como la naturaleza y los EVs pueden modificar sus estadísticas
y cambiar su comportamiento ante una misma situación.

Cuando después del entrenamiento compruebo que un Pokémon o una configuración no
cubre las situaciones para las que había sido preparado, parte del tiempo
invertido en su preparación y prueba se pierde.

## [HU006] Dificultad para continuar el análisis desde distintos equipos

La preparación de una competición no siempre la realizo desde el mismo ordenador.

Esto dificulta continuar trabajando con las mismas situaciones y resultados
cuando cambio de equipo, especialmente si la información necesaria depende de una
instalación local concreta.

Necesito que el trabajo realizado durante la preparación no dependa del ordenador
concreto desde el que lo estoy realizando.
