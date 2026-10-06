# Historias de usuario

Los datos de referencia necesarios para trabajar con los conceptos del dominio,
como Pokémon, estadísticas, tipos, movimientos, habilidades y naturalezas, se
obtendrán a partir de los ficheros CSV descargables de PokeAPI.

La procedencia y los datos necesarios para el proyecto se describen con más
detalle en [datos](../datos/datos.md).

## [HU001] Tiempo invertido en comprobar configuraciones antes de una competición

Antes de una competición dedico tiempo a preparar Pokémon y probar distintas
configuraciones sin saber previamente si responderán adecuadamente ante las
situaciones que considero importantes.

Comprobarlo mediante partidas de entrenamiento puede requerir varias partidas,
ya que no puedo controlar qué situaciones aparecen ni bajo qué condiciones.

Cuando después del entrenamiento compruebo que un Pokémon o una configuración no
responde adecuadamente ante las situaciones para las que había sido preparado,
parte del tiempo invertido en su preparación y prueba se pierde.

## [HU002] Dificultad para conocer el resultado de una situación concreta de combate

Durante la preparación no siempre puedo anticipar qué puede ocurrir en una
situación concreta de combate sin reproducirla previamente durante una partida.

Una situación queda determinada por los Pokémon implicados, sus configuraciones
y las condiciones presentes en ese momento del combate.

El resultado puede cambiar cuando varía alguno de estos elementos, por lo que no
siempre puedo anticipar cómo responderá la configuración que estoy preparando.

## [HU003] Incertidumbre sobre el resultado de una acción dentro de una situación

Dentro de una misma situación de combate puedo considerar distintas acciones,
como utilizar uno de los movimientos disponibles.

No siempre puedo determinar con seguridad qué resultado producirá una acción, ya
que el daño depende de las estadísticas del atacante y del defensor, del
movimiento utilizado, de los tipos implicados y de los modificadores aplicables.

Además, el daño puede variar dentro de un rango debido a la componente aleatoria
del cálculo.

## [HU004] Dificultad para comparar distintas acciones en una misma situación

En una misma situación de combate puedo disponer de varias acciones posibles y
no siempre resulta sencillo determinar cómo cambia el resultado al escoger una u
otra.

Para poder valorar correctamente esas alternativas necesito mantener constantes
los Pokémon, sus configuraciones y las condiciones del combate, y conocer cómo
cambia el resultado cuando cambia únicamente la acción considerada, como el
movimiento utilizado.

Si las condiciones no son equivalentes, los resultados obtenidos no permiten
comparar correctamente las distintas acciones.

## [HU005] Dificultad para continuar el análisis desde distintos equipos

La preparación de una competición no siempre la realizo desde el mismo ordenador.

Esto dificulta continuar trabajando con las mismas situaciones y resultados
cuando cambio de equipo, especialmente si la información necesaria depende de una
instalación local concreta.

Necesito que el trabajo realizado durante la preparación no dependa del ordenador
concreto desde el que lo estoy realizando.
