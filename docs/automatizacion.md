# Comparación de herramientas de automatización

Para automatizar las tareas habituales del proyecto se compararán distintas herramientas del ecosistema de Node.js compatibles con `package.json`.

Las alternativas consideradas son:

- `npm`
- `pnpm`
- `yarn`

La comparación se realizará utilizando criterios objetivos relacionados con el uso real del proyecto.

## Criterios de comparación

Se tendrán en cuenta los siguientes aspectos:

- Integración con Node.js y TypeScript;
- Necesidad de instalación adicional;
- Uso de ficheros de bloqueo para garantizar la reproducibilidad de las dependencias;
- Soporte para definir y ejecutar tareas desde `package.json`;
- Mantenimiento activo de la herramienta;
- Complejidad adicional introducida en el proyecto;
- Tiempo de instalación limpia de dependencias;
- Tiempo de instalación utilizando la caché disponible.

Los tiempos de instalación se utilizarán como apoyo cuantitativo a la comparación técnica, pero la elección no dependerá únicamente de las diferencias de rendimiento.

## Entorno de comparación

Las pruebas se realizan en un entorno aislado mediante Docker para evitar que las herramientas o dependencias instaladas previamente en el sistema local influyan en los resultados.

El entorno utilizado contiene:

- Node.js 22.23.5
- npm 10.9.9

El proyecto mínimo utilizado para las pruebas contiene un fichero `package.json`, un `tsconfig.json` y código TypeScript dentro de `src/`.

La tarea `check` se ejecuta mediante:

```bash
npm run check
```

y utiliza:

```bash
tsc --noEmit
```

De esta forma, se comprueba que el código TypeScript puede compilarse correctamente sin generar archivos de salida ni ejecutar tests.

## Comparaciones de tiempos de instalación

| Herramienta | Instalación limpia | Instalación con caché |
|---|---:|---:|
| npm | 3.895 s | 2.492 s  |
| pnpm | 7.657 s | 5.824 s |
| yarn | 5.631 s | 0.430 s |

## Comparación técnica

Además de los tiempos medidos, se han comparado las herramientas según su integración con el ecosistema de Node.js y TypeScript, la necesidad de instalación adicional, el mecanismo de bloqueo de dependencias y la complejidad que introducen en el proyecto.

| Herramienta | Integración con Node.js | Instalación adicional | Lockfile | Scripts en `package.json` | Complejidad añadida |
|---|---|---|---|---|---|
| npm | Se distribuye junto con Node.js | No | `package-lock.json` | Sí | Baja |
| pnpm | Compatible con el ecosistema Node.js | Sí | `pnpm-lock.yaml` | Sí | Baja |
| yarn | Compatible con el ecosistema Node.js | Sí | `yarn.lock` | Sí | Media |

Las tres alternativas permiten definir y ejecutar las tareas del proyecto desde `package.json` y proporcionan un fichero de bloqueo para mantener versiones reproducibles de las dependencias.

`npm` presenta la ventaja de estar disponible junto con Node.js, por lo que no requiere instalar ni mantener una herramienta adicional.

`pnpm` mantiene compatibilidad con el funcionamiento habitual del ecosistema Node.js, pero requiere disponer de la herramienta de forma adicional.

`yarn` también permite gestionar las dependencias y ejecutar las tareas del proyecto, aunque sus versiones actuales incorporan mecanismos y configuración propios adicionales respecto al flujo básico utilizado por `npm`.

## Mantenimiento

Para comprobar el estado de mantenimiento de las herramientas se ha tenido en cuenta su versión estable actual y la fecha de publicación de sus últimas versiones.

| Herramienta | Versión estable | Última actualización |
|---|---|---|
| npm | 12.2.2 | noviembre de 2026 |
| pnpm | 12.19.0 | noviembre de 2026 |
| yarn | 4.18.1 | septiembre de 2026 |

Las tres alternativas presentan mantenimiento activo, por lo que este criterio no permite descartar ninguna de ellas.

## Coste de adopción

Además de los tiempos de instalación, se ha tenido en cuenta el esfuerzo necesario para incorporar cada herramienta al proyecto.

`npm` no requiere instalación adicional porque se distribuye junto con Node.js.

`pnpm` necesita instalarse o activarse aparte, aunque mantiene un flujo de trabajo muy similar al habitual en proyectos Node.js.

`yarn` también requiere una activación o configuración adicional. En las versiones actuales, su uso suele apoyarse en Corepack para gestionar la versión utilizada por el proyecto.

Dado que las tres alternativas permiten ejecutar scripts definidos en `package.json`, la principal diferencia en este proyecto se encuentra en el coste de adopción y en el rendimiento observado durante las pruebas.

## Elección de la herramienta

Las tres alternativas permiten cubrir las necesidades actuales del proyecto, por lo que la elección se realiza teniendo en cuenta conjuntamente las mediciones obtenidas y el coste de introducir cada herramienta (Donde mayoritariamente se ha tenido en cuenta el segundo factor, ir a lo mas simple).

En las pruebas realizadas, `npm` obtuvo el menor tiempo de instalación limpia, con 3.895 s. `yarn` fue claramente más rápido al reutilizar la caché, con 0.430 s, mientras que `pnpm` obtuvo los mayores tiempos en ambas situaciones.

Para PokeDamage se ha elegido `npm`. El proyecto no necesita características específicas de `pnpm` o `yarn` y `npm` permite definir las tareas necesarias directamente en `package.json` sin incorporar otra herramienta al entorno. 

Aunque `yarn` obtuvo un mejor resultado en la instalación con caché, esta diferencia no compensa en este caso la necesidad de incorporar una herramienta adicional para un proyecto cuyas necesidades de automatización son sencillas.

Por tanto, las tareas del proyecto se definirán mediante los scripts de `package.json` y se ejecutarán utilizando `npm`.

