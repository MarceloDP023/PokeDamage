# Milestones del proyecto

## Milestone 0 — Modelado del problema

Este milestone estará vinculado a la [HU001].

Se obtendrá un primer PMV interno a partir del análisis del problema descrito en
esta historia de usuario.

Para su desarrollo se seguirá una metodología de modelado del dominio que permita
identificar los conceptos relevantes y las relaciones que surgen del propio
problema, sin decidir de antemano qué funcionalidades o estructuras concretas
formarán parte de la implementación.

En esta etapa no se desarrollará todavía la lógica necesaria para resolver la
historia de usuario. El resultado será una primera implementación interna que
sirva como base para continuar el desarrollo en el siguiente milestone.

Se considerará válido cuando pueda justificarse, a partir del proceso seguido,
que los elementos incorporados a la implementación proceden del análisis de la
HU001 y exista trazabilidad entre la historia de usuario, los issues derivados
de su análisis y los cambios realizados en el código.


## Milestone 1 — Lógica del problema

Este milestone continuará vinculado a la [HU001] y partirá de la implementación
obtenida en el milestone anterior.

Se obtendrá un nuevo PMV interno incorporando la lógica mínima necesaria para
avanzar en la resolución del problema descrito en la historia de usuario,
utilizando como base el trabajo desarrollado previamente.

La lógica incorporada se acompañará de tests automáticos que permitan comprobar
su comportamiento.

Se considerará válido cuando los tests definidos se ejecuten automáticamente y
permitan comprobar que el comportamiento incorporado responde a los casos
desarrollados a partir de la HU001.


## Milestone 2 — Primera versión para uso externo

Este milestone estará vinculado a la [HU004] y partirá del producto obtenido en
los milestones anteriores.

Se obtendrá una primera versión que pueda utilizarse fuera del entorno interno
de desarrollo, manteniendo el modelo y la lógica incorporados previamente.

El desarrollo de esta versión partirá del problema descrito en la HU002 y de los
issues derivados de su análisis, sin sustituir el trabajo realizado para la HU001.

Se considerará válido cuando el producto pueda utilizarse de forma reproducible
desde un entorno distinto al utilizado durante su desarrollo y exista
trazabilidad entre la HU004, los issues abordados y los cambios realizados.