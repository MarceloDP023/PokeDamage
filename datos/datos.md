# Datos

Los datos necesarios para resolver el problema se obtendrán del repositorio
público de PokeAPI, concretamente de los ficheros CSV disponibles en su
directorio de datos:

[PokeAPI - ficheros CSV](https://github.com/PokeAPI/pokeapi/tree/master/data/v2/csv)

No será necesario realizar peticiones a la API durante la ejecución

Para el problema planteado se necesitan principalmente los siguientes datos:

- Pokémon y sus identificadores (`pokemon.csv`).
- Estadísticas base de cada Pokémon (`pokemon_stats.csv` y `stats.csv`).
- Tipos de cada Pokémon (`pokemon_types.csv` y `types.csv`).
- Ventajas y desventajas entre tipos (`type_efficacy.csv`).
- Movimientos y sus características, como potencia, precisión, tipo y categoría
  física o especial (`moves.csv` y `move_damage_classes.csv`).
- Movimientos que puede aprender cada Pokémon (`pokemon_moves.csv`).
- Habilidades disponibles y su relación con cada Pokémon
  (`abilities.csv` y `pokemon_abilities.csv`).
- Efectos de las habilidades (`ability_prose.csv`), necesarios para conocer cómo
  una habilidad puede modificar una situación de combate.
- Naturalezas y las estadísticas que modifican (`natures.csv`).

Los EVs, el clima presente en el combate, los movimientos seleccionados para
una configuración concreta y otras condiciones de una situación determinada
no son datos que haya que obtener de una fuente externa, sino parámetros del
caso que se quiera analizar.

La lógica de negocio estará en combinar estos datos con la configuración de una
situación de combate y aplicar las reglas que afectan al daño: estadísticas de
atacante y defensor, potencia y categoría del movimiento, efectividad de tipos,
habilidades, naturaleza, EVs y condiciones de combate.

A partir de estos elementos se podrá determinar el rango de daño producido en
una situación concreta y analizar si una acción puede debilitar al rival,
incluyendo la variación aleatoria que forma parte del cálculo de daño.

## Licencia y procedencia de los datos

Los datos utilizados proceden del repositorio público de PokeAPI, distribuido
bajo licencia BSD-3-Clause.

La licencia permite la redistribución y el uso del contenido, con o sin
modificaciones, siempre que se mantengan los avisos de copyright, las
condiciones de la licencia y la cláusula de exención de responsabilidad.

Pokémon y los nombres de los personajes Pokémon son marcas de Nintendo, tal y
como indica la propia licencia de PokeAPI.

El uso de estos datos en PokeDamage no implica afiliación ni respaldo por parte
de Nintendo ni de PokeAPI.

La licencia original puede consultarse en:
https://github.com/PokeAPI/pokeapi/blob/master/LICENSE.md
