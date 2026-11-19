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


