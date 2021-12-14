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

Para el proyecto se optó por la temática de una de las películas de Studio Ghibli, El viaje de Chihiro, ya que vimos el buen contraste de colores que nos permitiría transmitir la información de forma clara y precisa, y que a su vez pueda ser amigable ante la vista de nuestros usuarios, asi ellos puedan tener un rápido reconocimiento de la interfaz de nuestra pagina web.

#### Prototipo de baja fidelidad

     este prototipo fue realizado a mano y este seria la vista en desktop:

#### Prototipo de alta fidelidad

       Este prototipo fue realizado en `Figma` para aplicar colores

## 5. Pruebas Unitarias

Para las pruebas Unitarias `(tests)`, creamos nuestras propias funciones, así como la configuración necesaria para ejecutar los tests usando el comando `npm test`. Logrando superar la cobertura mínima del 70% de statements, functions y lines, y un mínimo del 50% de branches.

#### Testeos de usabilidad

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que tendrás que escribirlas tú para las funciones encargadas de _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 6. Objectivos de aprendizaje

### HTML

- [ ] **Uso de HTML semántico**

### CSS

- [ ] **Uso de selectores de CSS**

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
