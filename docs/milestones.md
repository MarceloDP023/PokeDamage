# Milestones del proyecto

## Milestone 0 — Primera implementación interna del modelo del problema

El primer milestone consistirá en una implementación interna del modelo necesario
para representar las situaciones de combate que aparecen en las historias de
usuario.

Esta implementación deberá recoger las relaciones entre los elementos relevantes
del dominio sin incorporar todavía la lógica completa necesaria para resolver las
situaciones.

El producto obtenido servirá como base para incorporar posteriormente la lógica
de negocio sin tener que sustituir lo desarrollado en esta etapa.

Se considerará válido cuando permita representar una situación de combate con los
elementos necesarios para describirla, como los Pokémon implicados, sus
configuraciones, las condiciones del combate y las acciones que pueden
considerarse dentro de ella, manteniendo las relaciones definidas entre estos
elementos.


## Milestone 1 — Incorporación de la lógica de negocio

Este milestone partirá de la implementación interna obtenida en el milestone
anterior y añadirá la lógica necesaria para obtener resultados a partir de las
situaciones de combate representadas.

La solución deberá utilizar los elementos ya definidos en el modelo para aplicar
las reglas que determinan el resultado de una acción, sin sustituir la base
desarrollada previamente.

El producto obtenido será una versión interna capaz de resolver las situaciones
de combate descritas en las historias de usuario a partir de la información que
las define.

Se considerará válido cuando, dada una situación de combate correctamente
representada, la solución pueda obtener el resultado de las acciones consideradas
de acuerdo con las reglas definidas para el problema.


## Milestone 2 — Primera versión utilizable de la solución

Este milestone partirá del modelo y de la lógica de negocio desarrollados en los
milestones anteriores y añadirá los elementos necesarios para poder utilizar la
solución fuera del entorno interno de desarrollo.

La nueva versión deberá permitir trabajar con las situaciones de combate y las
acciones ya resueltas por la lógica existente, sin duplicar ni sustituir el
comportamiento desarrollado previamente.

El producto obtenido será una primera versión utilizable de PokeDamage sobre la
que el usuario pueda plantear las situaciones que necesita analizar durante su
preparación.

Se considerará válido cuando la solución pueda utilizarse de forma reproducible
desde un entorno distinto al utilizado durante el desarrollo, manteniendo el
comportamiento desarrollado en los milestones anteriores.