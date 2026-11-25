# Comparación de herramientas de automatización

Para automatizar las tareas habituales del proyecto se comparan las siguientes herramientas:

- `npm`
- `pnpm`
- `yarn`

Las tres permiten definir y ejecutar tareas desde `package.json`.

## Criterios de comparación

La comparación se realiza utilizando únicamente criterios medibles:

- Tiempo de instalación limpia de las dependencias.
- Tiempo de instalación utilizando la caché.
- Tiempo de ejecución de la tarea `check`.

Para la ejecución de `check` se realizan cinco ejecuciones por herramienta y se utiliza la media aritmética de los tiempos obtenidos.

## Entorno de comparación

Las pruebas se realizan en un entorno aislado mediante Docker.

El entorno utilizado contiene:

- Node.js 22.23.5.
- npm 10.9.9.

El mismo proyecto y las mismas dependencias se utilizan para las tres herramientas.

La tarea `check` ejecuta la misma operación en todos los casos:

```bash
tsc --noEmit
```

Para medir el tiempo de ejecución se utiliza el comando `time` de Bash, tomando el valor `real`, que representa el tiempo total transcurrido.

## Tiempo de instalación

Se mide el tiempo necesario para instalar las dependencias tanto en una instalación limpia como reutilizando la caché.

| Herramienta | Instalación limpia | Instalación con caché |
|---|---:|---:|
| npm | 3.895 s | 2.492 s |
| pnpm | 7.657 s | 5.824 s |
| yarn | 5.631 s | 0.430 s |

Las capturas de estas mediciones se encuentran en:

- [Instalación de npm](medidas_instalaciones/instalacion_npm.png)
- [Instalación de pnpm](medidas_instalaciones/instalacion_pnpm.png)
- [Instalación de yarn](medidas_instalaciones/instalacion_yarn.png)

En instalación limpia, `npm` obtiene el menor tiempo, mientras que `yarn` obtiene el menor tiempo al utilizar la caché.

## Tiempo de ejecución de `check`

Se ejecuta cinco veces la tarea `check` con cada herramienta, utilizando el mismo código TypeScript.

Las mediciones iniciales presentaron variaciones considerables, por lo que se realizó una segunda serie de cinco ejecuciones por herramienta. Los resultados siguientes corresponden a esta segunda serie.

### npm

Comando utilizado:

```bash
for i in {1..5}; do time npm run check; done
```

| Ejecución | Tiempo |
|---|---:|
| 1 | 0.475 s |
| 2 | 0.465 s |
| 3 | 0.434 s |
| 4 | 0.435 s |
| 5 | 0.457 s |
| **Media** | **0.453 s** |

[Captura de npm](medidas_instalaciones/tarea_check_npm.png)

### pnpm

Comando utilizado:

```bash
for i in {1..5}; do time pnpm run check; done
```

| Ejecución | Tiempo |
|---|---:|
| 1 | 0.574 s |
| 2 | 0.444 s |
| 3 | 0.435 s |
| 4 | 0.453 s |
| 5 | 0.461 s |
| **Media** | **0.473 s** |

[Captura de pnpm](medidas_instalaciones/tarea_check_pnpm.png)

### yarn

Comando utilizado:

```bash
for i in {1..5}; do time yarn run check; done
```

| Ejecución | Tiempo |
|---|---:|
| 1 | 0.681 s |
| 2 | 0.655 s |
| 3 | 0.663 s |
| 4 | 0.715 s |
| 5 | 0.677 s |
| **Media** | **0.678 s** |

[Captura de yarn](medidas_instalaciones/tarea_check_yarn.png)

## Comparación de resultados

| Herramienta | Instalación limpia | Instalación con caché | Media de `check` |
|---|---:|---:|---:|
| npm | **3.895 s** | 2.492 s | **0.453 s** |
| pnpm | 7.657 s | 5.824 s | 0.473 s |
| yarn | 5.631 s | **0.430 s** | 0.678 s |

Los resultados muestran que:

- `npm` obtiene el menor tiempo de instalación limpia.
- `yarn` obtiene el menor tiempo de instalación utilizando la caché.
- `npm` obtiene el menor tiempo medio de ejecución de `check`, aunque la diferencia respecto a `pnpm` es de apenas 0.020 s.

## Elección

Se selecciona `npm` como herramienta de automatización.

En las mediciones realizadas, `npm` obtiene el menor tiempo de instalación limpia, con 3.895 s, frente a los 5.631 s de `yarn` y los 7.657 s de `pnpm`.

También obtiene el menor tiempo medio de ejecución de `check`, con 0.453 s, aunque la diferencia con `pnpm` es pequeña.

Por otra parte, `yarn` obtiene el mejor resultado en la instalación con caché, con 0.430 s, pero presenta tiempos superiores en las otras dos medidas.

Por tanto, considerando las mediciones obtenidas, se elige `npm` para gestionar las dependencias y ejecutar las tareas del proyecto mediante los scripts definidos en `package.json`.