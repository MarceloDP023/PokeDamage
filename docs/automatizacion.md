# Comparación de herramientas de automatización

Para automatizar las tareas habituales del proyecto se comparan las siguientes herramientas:

- `npm`
- `pnpm`
- `yarn`

Las tres permiten definir y ejecutar tareas desde `package.json`.

## Criterios de comparación

La comparación se realiza utilizando únicamente criterios medibles obtenidos bajo las mismas condiciones:

- tiempo de instalación limpia de las dependencias;
- tiempo de instalación utilizando la caché;
- tiempo de ejecución de la tarea `check`.

Para la ejecución de `check` se realizan cinco ejecuciones por herramienta y se utiliza la media de los tiempos obtenidos.

## Entorno de comparación

Las pruebas se realizan en un entorno aislado mediante Docker para evitar que las herramientas o dependencias instaladas previamente en el sistema local influyan en los resultados.

El entorno utilizado contiene:

- Node.js 22.23.5;
- npm 10.9.9.

El mismo proyecto y las mismas dependencias se utilizan para las tres herramientas.

La tarea `check` realiza la misma operación en todos los casos:

```bash
tsc --noEmit
```

## Tiempo de instalación

| Herramienta | Instalación limpia | Instalación con caché |
|---|---:|---:|
| npm | 3.895 s | 2.492 s |
| pnpm | 7.657 s | 5.824 s |
| yarn | 5.631 s | 0.430 s |

En instalación limpia, `npm` obtiene el menor tiempo.

En instalación utilizando la caché, `yarn` obtiene el menor tiempo.

## Tiempo de ejecución de `check`

Para cada herramienta se ejecuta cinco veces la misma tarea y se mide el tiempo real de ejecución.

### npm

Tiempos obtenidos:

- 1.117 s
- 0.986 s
- 1.125 s
- 1.072 s
- 1.034 s

Media:

```text
1.067 s
```

### pnpm

Tiempos obtenidos:

- 1.083 s
- 0.906 s
- 0.939 s
- 1.137 s
- 1.033 s

Media:

```text
1.020 s
```

### yarn

Tiempos obtenidos:

- 1.563 s
- 6.949 s
- 1.086 s
- 1.385 s
- 1.266 s

Media:

```text
2.450 s
```

## Comparación de resultados

| Herramienta | Instalación limpia | Instalación con caché | Media de `check` |
|---|---:|---:|---:|
| npm | **3.895 s** | 2.492 s | 1.067 s |
| pnpm | 7.657 s | 5.824 s | **1.020 s** |
| yarn | 5.631 s | **0.430 s** | 2.450 s |

Los resultados muestran que ninguna herramienta obtiene el mejor resultado en todas las medidas:

- `npm` obtiene el menor tiempo de instalación limpia;
- `pnpm` obtiene el menor tiempo medio de ejecución de `check`;
- `yarn` obtiene el menor tiempo de instalación utilizando la caché.

## Elección

Se selecciona `npm` como herramienta de automatización.

Aunque `pnpm` obtiene un tiempo ligeramente menor en la ejecución de `check`, la diferencia respecto a `npm` es de 0.047 s.

En cambio, `npm` obtiene un tiempo de instalación limpia de 3.895 s frente a los 7.657 s de `pnpm`.

Respecto a `yarn`, aunque obtiene el mejor tiempo de instalación utilizando la caché, presenta un tiempo medio de ejecución de `check` superior al de las otras dos alternativas.

A partir de las medidas obtenidas, `npm` ofrece el resultado más equilibrado entre instalación y ejecución de tareas para este proyecto.

Por tanto, las tareas del proyecto se definirán mediante los scripts de `package.json` y se ejecutarán utilizando `npm`.
