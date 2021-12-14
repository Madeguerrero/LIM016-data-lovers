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

Para el proyecto se optó por la temática de una de las películas de Studio Ghibli, Mi vecino Totoro, ya que vimos el buen contraste de colores que nos permitiría transmitir la información de forma clara y precisa, y que a su vez pueda ser amigable ante la vista de nuestros usuarios.

#### Prototipo de baja fidelidad

     este prototipo fue realizado a mano y este seria la vista en desktop:



![prototipo-desktop_00_00](https://user-images.githubusercontent.com/91804406/146047243-376923ee-749d-4f7c-964a-75c46176f2c7.jpg)

#### Prototipo de alta fidelidad

       Este prototipo fue realizado en Figma para aplicar colores:


![Captura de pantalla 2021-12-13 a la(s) 21 41 49](https://user-images.githubusercontent.com/91804406/146035642-e9bd4f1c-e822-4eba-976a-1affb735b972.png)

![Captura de pantalla 2021-12-13 a la(s) 21 42 44](https://user-images.githubusercontent.com/91804406/146037545-bf7c8c85-8140-441b-8ffe-b9a99cdb0b9d.png)

![Captura de pantalla 2021-12-14 a la(s) 17 08 37](https://user-images.githubusercontent.com/91804406/146046612-5b6d7e62-d416-4afe-90af-eaec15b8b0c6.png)

![Captura de pantalla 2021-12-14 a la(s) 17 09 41](https://user-images.githubusercontent.com/91804406/146046654-d5b37b15-b612-480e-bcfb-d23bc59584b0.png)

![Captura de pantalla 2021-12-14 a la(s) 17 10 39](https://user-images.githubusercontent.com/91804406/146046672-80b889e6-e3e1-48b3-9258-2ebbc1510c0b.png)

### Historias de Usuario y criterios de aceptacion

HU 1: yo COMO usuario QUIERO una web con las portadas de las peliculas PARA recordar que peliculas me gustan.

    👉🏻 Criterios de aceptación:

       - Darle una buena funcionalidad a nuestro carrusel de portada.
       - Obtener una buena posicion  y calidad de cada imagen .

HU 2: yo COMO usuario QUIERO ver información relevante PARA saber más de cada pelicula que me gusta.

    👉🏻 Criterios de aceptación:

       - Colocar en la pagina principal nombre de la pelicula, año de lanzamiento y el score.
       - Mostrar cada pelicula con la fecha de lanzamiento,reseña, personajes,locaciones y vehiculos.

HU 3: yo COMO usuario QUIERO ordenar y poder filtrar peliculas PARA ver de forma mas rapida las peliculas que me gustan.

    👉🏻 Criterios de aceptación:

       - Colocar botones de filtrado por Directores y Productores.
       - Colocar botones de ordenado por score,fecha de lanzamiento y alfabeticamente.
       - Implementar una barra de busqueda por peliculas.

HU 4: yo COMO usuario QUIERO visualizar los datos en graficos estadisticos PARA tener información y ser un conocedor de las peliculas de Studio Ghibli.

    👉🏻 Criterios de aceptación:

      - Tener un mejor entendimiento de las gráficas estadísticas.
      - Se puede identificar las estadísticas por score y fecha de lanzamiento de cada pelicula.
      - Se puede visualizar las estadísticas con colores amigables.

HU 5: yo COMO usuario Quiero poder visualizar la página web desde distintos dispositivos PARA tener acceso a la información desde cualquier lugar.

    👉🏻 Criterios de aceptación:

      - Es adatable para celulares y tablets.
      - Es adaptable en diferentes desktops.

### Definición determinado

- El proyecto estará en el repositorio de Git Hub.
- El código pasa los tests de las pruebas unitarias.
- La página web fue vista y aceptada por el usuario.
- La página cumple con el prototipo diseñado.
- El usuario brindó feedback al proyecto.

## 5. Pruebas Unitarias

Para las pruebas Unitarias `(tests)`, creamos nuestras propias funciones, así como la configuración necesaria para ejecutar los tests usando el comando `npm test`. Logrando superar la cobertura mínima del 70% de statements, functions y lines, y un mínimo del 50% de branches.

## 6. Objectivos de aprendizaje

### HTML

- [x] **Uso de HTML semántico**

### CSS

- [x] **Uso de selectores de CSS**

- [x] **Modelo de caja (box model): borde, margen, padding**

- [x] **Uso de flexbox en CSS**

### Web APIs

- [x] **Uso de selectores del DOM**

- [x] **Manejo de eventos del DOM (listeners, propagación, delegación)**

- [x] **Manipulación dinámica del DOM**

### JavaScript

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [x] **Arrays (arreglos)**

- [x] **Objetos (key, value)**

- [x] **Variables (declaración, asignación, ámbito)**

- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [x] **Uso de bucles/ciclos (while, for, for..of)**

- [x] **Funciones (params, args, return)**

- [x] **Pruebas unitarias (unit tests)**

- [x] **Módulos de ECMAScript (ES Modules)**

- [x] **Uso de linter (ESLINT)**

- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**

- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [x] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### UX (User eXperience)

- [x] **Diseñar la aplicación pensando en y entendiendo al usuario**

- [x] **Crear prototipos para obtener feedback e iterar**

- [x] **Aplicar los principios de diseño visual (contraste, alineación, jerarquía)**

- [ ] **Planear y ejecutar tests de usabilidad**

## 7. Checklist

- [x] Usa VanillaJS.
- [x] Pasa linter (`npm run pretest`)
- [x] Pasa tests (`npm test`)
- [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
      lines y branches.
- [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
- [ ] Incluye historias de usuario en `README.md`.
- [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
      `README.md`.
- [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
      en `README.md`.
- [ ] Incluye link a Zeplin en `README.md`.
- [ ] Incluye el listado de problemas que detectaste a través de tests de
      usabilidad en el `README.md`.
- [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
- [x] UI: Permite ordenar data por uno o más campos (asc y desc).
- [x] UI: Permite filtrar data en base a una condición.
- [x] UI: Es _responsive_.
