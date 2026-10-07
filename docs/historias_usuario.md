# Historias de usuario

Los conceptos utilizados en estas historias, como configuración, situación de
combate y acción, se describen en el [user journey](user_journey.md).

Los datos de referencia necesarios se obtienen de los ficheros CSV de PokeAPI.
Su procedencia y contenido se detallan en [datos](../datos/datos.md).


## [HU001] Incertidumbre sobre el resultado de una acción concreta

Durante la preparación de una competición puedo necesitar saber qué resultado
tendría utilizar un movimiento concreto de uno de mis Pokémon contra un Pokémon
rival.

Incluso en este caso básico, el resultado depende de las características de ambos
Pokémon y no únicamente del movimiento elegido.

Para determinar el daño es necesario considerar las estadísticas del atacante y
del defensor, sus tipos, la potencia y categoría del movimiento, la efectividad
entre tipos y los elementos de sus configuraciones que afectan a sus
estadísticas, como la naturaleza y los EVs.

Además, el daño puede variar dentro de un rango debido a la componente aleatoria
del cálculo, por lo que una misma acción no tiene necesariamente un único
resultado posible.

Los datos necesarios sobre Pokémon, estadísticas, tipos, movimientos y
naturalezas proceden de PokeAPI y se detallan en
[datos](../datos/datos.md).

### Ejemplo

Marcelo quiere saber qué rango de daño puede producir un movimiento concreto de
uno de sus Pokémon contra un Pokémon rival, conocidas las configuraciones de
ambos.

En este primer caso solo se consideran los datos propios de los Pokémon y del
movimiento utilizado, sin añadir otras condiciones externas del combate.


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

### Ejemplo HU002

Marcelo quiere volver a analizar una situación que apareció durante una partida
de entrenamiento.

Parte del mismo caso básico de la HU001, pero ahora necesita tener en cuenta
también las condiciones concretas que estaban presentes en ese momento del
combate, como el clima o los aumentos y reducciones temporales de estadísticas
producidos durante la partida.

El problema es que durante otra partida no puede controlar que vuelvan a
coincidir los mismos Pokémon, sus configuraciones y esas mismas condiciones.


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

### Ejemplo HU003

Marcelo ha preparado una configuración concreta para uno de sus Pokémon y quiere
comprobar si responde adecuadamente ante varias situaciones que considera
importantes para una competición.

Puede analizar primero cómo se comporta frente a un rival concreto y después
repetir el análisis frente a otros Pokémon o bajo condiciones de combate
diferentes, como cambios de clima o modificaciones temporales de estadísticas.

Que una configuración funcione correctamente en una de estas situaciones no
garantiza que lo haga en las demás, por lo que necesita valorar su comportamiento
ante varios casos antes de decidir si mantenerla o modificarla.


## [HU004] Dificultad para continuar el análisis desde distintos equipos

La preparación de una competición no siempre la realizo desde el mismo ordenador.

Esto dificulta continuar trabajando con las mismas situaciones y resultados
cuando cambio de equipo, especialmente si la información necesaria depende de una
instalación local concreta.

Como consecuencia, cambiar de ordenador puede obligarme a trasladar manualmente
la información necesaria o a repetir parte del trabajo realizado anteriormente.
