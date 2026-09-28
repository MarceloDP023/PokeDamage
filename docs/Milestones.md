# Milestones

## Milestone 0 — Modelo de una situación de combate

Primera base interna del proyecto para poder representar una situación sencilla
de combate entre dos Pokémon.

En esta etapa se definirán los datos necesarios para describir al atacante, al
defensor, el movimiento utilizado y el resto de información básica que haga falta
para trabajar después con el cálculo de daño.

La idea es empezar con un caso simple y no intentar cubrir desde el principio
todas las reglas y situaciones posibles del juego.

Se considerará terminado cuando se pueda crear correctamente una situación de
combate con estos datos.


## Milestone 1 — Cálculo básico de daño

Segunda versión interna del proyecto, construida sobre el modelo anterior, que
añada la lógica necesaria para calcular el daño en situaciones sencillas de combate.

Todavía no será una versión pensada para que la utilice directamente el usuario,
sino una parte interna del proyecto que permita comprobar que la lógica principal
funciona correctamente.

Se considerará terminado cuando podamos probar casos conocidos y comprobar con
tests que los resultados obtenidos son los esperados.


## Milestone 2 — Primera versión utilizable de PokeDamage

Primera versión del proyecto pensada para que Marcelo pueda utilizarla durante la
preparación de una competición.

Esta versión reunirá lo desarrollado en los milestones anteriores y permitirá
introducir una situación concreta de combate y consultar los resultados necesarios
para estudiar distintas alternativas.

Se considerará terminada cuando pueda utilizarse de principio a fin para analizar
una situación real y obtener información suficiente para comparar distintas
decisiones.