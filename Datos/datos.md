# Datos

Los datos necesarios para resolver el problema se pueden obtener del conjunto
de datos mantenido por PokeAPI. No será necesario realizar peticiones a su API
durante la ejecución, ya que los datos están disponibles en ficheros CSV que
pueden descargarse previamente y procesarse de forma local.

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

## Licencia de los datos

Los datos utilizados proceden del repositorio público de PokeAPI. El repositorio
permite la redistribución y el uso de su contenido, con o sin modificaciones,
siempre que se conserven el aviso de copyright, las condiciones de la licencia
y la cláusula de exención de responsabilidad.

Por este motivo, si los ficheros CSV necesarios se incorporan a este proyecto,
se incluirá también una copia de la licencia original de PokeAPI junto a los
datos y se indicará claramente su procedencia.

La licencia también especifica que ni el nombre de PokeAPI ni el de sus
colaboradores puede utilizarse para promocionar productos derivados sin permiso.

Pokémon y los nombres de los personajes Pokémon son marcas de Nintendo, tal y
como indica la propia licencia de PokeAPI. La utilización de los datos de PokeAPI
no implica ningún tipo de afiliación o respaldo por parte de Nintendo o PokeAPI.
