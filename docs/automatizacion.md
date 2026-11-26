# Comparación de herramientas de automatización

Se comparan `npm`, `pnpm` y `yarn` mediante tres criterios medibles: tiempo de instalación limpia, instalación con caché y tiempo medio de ejecución de `check`.

## Entorno de pruebas

Las pruebas se realizan en Docker con Node.js 22.23.5. Se utiliza `time` para las instalaciones y `hyperfine` para `check` (10 mediciones).

## npm

- Instalación limpia: 1.219 s.
- Instalación con caché: 0.863 s.
- Tiempo medio de `check`: 0.663 s.

Evidencias:
- [Instalaciones de npm](medidas_instalaciones/instalacion_npm.png)
- [Medición de check](medidas_instalaciones/tarea_check_npm.png)

## pnpm

- Instalación limpia: 1.379 s.
- Instalación con caché: 1.311 s.
- Tiempo medio de `check`: 1.043 s.

Evidencias:
- [Instalaciones de pnpm](medidas_instalaciones/instalacion_pnpm.png)
- [Medición de check](medidas_instalaciones/tarea_check_pnpm.png)

## Yarn

- Instalación limpia: 5.553 s.
- Instalación con caché: 0.596 s.
- Tiempo medio de `check`: 0.902 s.

Evidencias:
- [Instalaciones de Yarn](medidas_instalaciones/instalacion_yarn.png)
- [Medición de check](medidas_instalaciones/tarea_check_yarn.png)

## Elección

Se selecciona npm como gestor de dependencias y tareas, ya que presenta el menor tiempo de instalación limpia (1.219 s) y el menor tiempo medio de ejecución de `check` (0.663 s).

Aunque Yarn obtiene el menor tiempo de instalación con caché (0.596 s), npm consigue los mejores resultados en dos de los tres criterios evaluados.