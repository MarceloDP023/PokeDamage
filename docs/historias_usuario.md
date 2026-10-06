# Historias de usuario

Los conceptos utilizados en estas historias, como configuración, situación de
combate y acción, se describen en el [user journey](user_journey.md).

Los datos de referencia necesarios se obtienen de los ficheros CSV de PokeAPI.
Su procedencia y contenido se detallan en [datos](../datos/datos.md).


## [HU001] Incertidumbre sobre el resultado de una acción concreta

Durante la preparación de una competición puedo encontrar situaciones en las que
no sé con suficiente seguridad qué resultado tendría realizar una acción
concreta, como utilizar un determinado movimiento contra el Pokémon rival.

El resultado no depende únicamente del movimiento elegido. También intervienen
las características y configuraciones de los Pokémon implicados y las
condiciones presentes en ese momento del combate.

En particular, para determinar el daño intervienen las estadísticas del atacante
y del defensor, la potencia y categoría del movimiento, los tipos implicados,
la efectividad entre tipos, las habilidades, la naturaleza, los EVs y las
condiciones del combate que puedan modificarlo.

Además, el daño puede variar dentro de un rango debido a la componente aleatoria
del cálculo, por lo que una misma acción no tiene necesariamente un único
resultado posible.

Los datos necesarios sobre Pokémon, estadísticas, tipos, movimientos,
habilidades y naturalezas proceden de PokeAPI y se detallan en
[datos](../datos/datos.md).


## [HU002] Dificultad para reproducir una situación concreta de combate

Durante la preparación puedo encontrar una situación de combate cuyo resultado
quiero analizar con más detalle posteriormente.

El problema es que durante una partida de entrenamiento no puedo controlar que
vuelvan a aparecer los mismos Pokémon, configuraciones y condiciones de combate.

Esto hace que reproducir un caso concreto pueda requerir varias partidas y que,
aunque aparezca una situación parecida, alguna de sus condiciones sea diferente
y el resultado ya no sea directamente comparable.

Como consecuencia, algunas situaciones que considero importantes pueden ser
difíciles de volver a comprobar durante el entrenamiento, especialmente cuando
dependen de una combinación poco frecuente de condiciones.

Los elementos que describen una situación de combate se definen en el
[user journey](user_journey.md).


## [HU003] Dificultad para comprobar si una configuración responde ante los casos que quiero cubrir

Antes de una competición preparo configuraciones pensando en determinadas
situaciones que considero importantes y necesito saber si esa configuración
responde adecuadamente ante ellas.

Comprobar una configuración no depende de un único caso. Una misma configuración
puede responder correctamente ante una situación y no hacerlo ante otra, por lo
que necesito considerar distintos casos relevantes de preparación antes de
decidir si mantenerla o modificarla.

Actualmente estas comprobaciones se realizan principalmente mediante partidas de
entrenamiento. Esto puede requerir varias partidas, ya que no puedo controlar
qué situaciones aparecerán ni reproducir siempre las mismas condiciones.

Como consecuencia, puedo invertir tiempo en preparar y probar una configuración
y descubrir después que no cubre alguno de los casos para los que había sido
preparada, teniendo que modificarla y repetir parte de las comprobaciones.

Para describir cada caso se utilizan los Pokémon implicados, sus configuraciones
y las condiciones del combate, según los conceptos definidos en el
[user journey](user_journey.md).


## [HU004] Dificultad para continuar el análisis desde distintos equipos

## [HU004] Dificultad para continuar el análisis desde distintos equipos

La preparación de una competición no siempre la realizo desde el mismo ordenador.

Esto dificulta continuar trabajando con las mismas situaciones y resultados
cuando cambio de equipo, especialmente si la información necesaria depende de una
instalación local concreta.

Como consecuencia, cambiar de ordenador puede obligarme a trasladar manualmente
la información necesaria o a repetir parte del trabajo realizado anteriormente.
