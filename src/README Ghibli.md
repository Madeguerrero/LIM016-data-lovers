# Animacion Ghibli

## Índice

- [1. Studio Ghibli](#1-introducción-studio-ghibli)
- [2. Historias de Usuario](#2-historias-de-usuario)
- [3. Descripcion del proyecto](#3-descripcion-del-proyecto)
- [4. Realizacion del Diseño](#4-realizacion-del-diseño)
- [5. Pruebas Unitarias](#5-pruebas-unitarias)
- [6. Objectivos de aprendizaje](#6-objectivos-de-aprendizaje)
- [7. Checklist](#7-checklist)

---

## 1. Introducción Studio Ghibli

El Studio Ghibli (スタジオジブリ Sutajio Jiburi?) es un estudio de animación japonés, con sede en Tokio. Fue fundada en 1985 por Hayao Miyazaki y Isao Takahata, y a día de hoy, han realizado más de 20 películas, además de otras clases de trabajos (cortometrajes, anuncios publicitarios, ...).

Las animaciones tienen gran acogida a nivel mundial y algunas han recibido varias nominaciones y premios. De todo este fandom hay un grupo que desea poder interactuar y ver la información de las animaciones y sus personajes.

## 2. Historias de Usuario

En este proyecto para entender que información podrían necesitar nuestros usuarios, hicimos una rápida investigación y estos son algunos de los hallazgos:

    1.El proyecto estará dirigido al público en general ( niños, jóvenes y adultos).

    2.Tendra Una interfaz interactiva y amigable.

    3.La página web contará con información relevante de cada animación (Número de animaciones, lista de productores, directores por animaciones, fecha de lanzamiento, personajes y sus características, locaciones, vehículos).

    4.Ser responsive en smartphones,desktops y tablets.

## 3. Descripcion del Proyecto

En este proyecto tendremos que construir una pagina web responsive con datos que le permita a un usuario saber más sobre este estudio de producción de animaciones. Además, de implementar la funcionalidad, estadísticas, directores, productores, personajes, tipos de especies de cada animación, así como locaciones y vehículos empleados en algunas animacions del studio Ghibli. El usuario podra tener la accesibilidad de poder `filtrar` y `ordenarla` según el criterio del usuario.

## 4. Realizacion del Diseño

#### Prototipo de baja fidelidad

#### Prototipo de alta fidelidad

## 5. Pruebas Unitarias

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita.
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que tendrás que escribirlas tú para las funciones encargadas de _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 6. Objectivos de aprendizaje

## 7. Checklist

- [ ] Usa VanillaJS.
- [ ] Pasa linter (`npm run pretest`)
- [ ] Pasa tests (`npm test`)
- [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
      lines y branches.
- [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
- [ ] Incluye historias de usuario en `README.md`.
- [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
      `README.md`.
- [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
      en `README.md`.
- [ ] Incluye link a Zeplin en `README.md`.
- [ ] Incluye el listado de problemas que detectaste a través de tests de
      usabilidad en el `README.md`.
- [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
- [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
- [ ] UI: Permite filtrar data en base a una condición.
- [ ] UI: Es _responsive_.
