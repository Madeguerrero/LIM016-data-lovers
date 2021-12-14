/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { datasearch, filtroDirector, filtroProductor } from "./data.js";
import data from "./data/ghibli/ghibli.js";

/* ------------ codigo del carrusel(slider) ---------------*/

const slider = document.querySelector("#slider");
let seccion = document.querySelectorAll(".img-pagina");
let seccion2 = seccion[seccion.length - 1];

const btnizquierda = document.querySelector("#boton-left");
const btnderecha = document.querySelector("#boton-right");

slider.insertAdjacentElement("afterbegin", seccion2);

function moverDerecha() {
  let seccionprimero = document.querySelectorAll(".img-pagina")[0];
  slider.style.marginleft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", seccionprimero);
    slider.style.marginleft = "-100%";
  }, 500);
}

function moverIzquierda() {
  let seccion = document.querySelectorAll(".img-pagina");
  let seccionfinal = seccion[seccion.length - 1];
  slider.style.marginleft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", seccionfinal);
    slider.style.marginleft = "-100%";
  }, 500);
}

btnderecha.addEventListener("click", function () {
  moverDerecha();
});

btnizquierda.addEventListener("click", function () {
  moverIzquierda();
});

setInterval(function () {
  moverDerecha();
}, 5000);

/* ------------ obteniendo imagen,titulo ,year y score de las peliculas -----------*/

const destacadas = document.getElementById("contenedor-destacadas");

let peliculas = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let filmBox = document.createElement("div");
    filmBox.className = "filmBox";
    destacadas.appendChild(filmBox);

    let imgPoster = document.createElement("img");
    imgPoster.src = arr[i].poster;
    imgPoster.className = "imagen";
    filmBox.appendChild(imgPoster);

    let movTitle = document.createElement("div");
    movTitle.textContent = arr[i].title;
    movTitle.className = "titulo";
    filmBox.appendChild(movTitle);

    let movYearScore = document.createElement("div");
    movYearScore.className = "movYearScore";
    filmBox.appendChild(movYearScore);

    let movYear = document.createElement("span");
    movYear.textContent = arr[i].release_date;
    movYear.className = "year";
    movYearScore.appendChild(movYear);

    let movScore = document.createElement("span");
    movScore.innerHTML = arr[i].rt_score + " ⭐️ ";
    movScore.className = "clase-score";
    movYearScore.appendChild(movScore);

    let movInfo = document.createElement("div");
    movInfo.innerHTML =
      "<span class='close'>&times;</span>" +
      arr[i].title +
      "<br />" +
      arr[i].description;
    movInfo.classList = "description";
    destacadas.appendChild(movInfo);
  }
};

//aqui guardamos toda la data de las peliculas
peliculas(data.films);

/* ------------- boton filtro director productor --------------*/

const filtroBotonDirector = document.querySelector("#opcionDirecProduc");
filtroBotonDirector.addEventListener("change", (e) => {
  const selection = e.target.value;
  const selectIndex = e.target.selectedIndex;
  const selectType = e.target[selectIndex].className;
  destacadas.innerHTML = " ";

  if (selectType == "Directores") {
    const filtroDire = filtroDirector(data.films, selection);
    peliculas(filtroDire);
  } else {
    const filtroProduc = filtroProductor(data.films, selection);
    peliculas(filtroProduc);
  }
});

/* ----------- ordenando de la A-Z -------------*/

let ordenArray = [];

const ordenandoPeli = document.getElementById("opcionOrden");
ordenandoPeli.addEventListener("change", (e) => {
  const selectValue = e.target.value;
  destacadas.innerHTML = "";

  function SortArray(x, y) {
    if (selectValue == "alfaAsc" || selectValue == "alfaDesc") {
      return x.title.localeCompare(y.title);
    } else if (selectValue == "fecAsc" || selectValue == "fecDesc") {
      return x.release_date.localeCompare(y.release_date);
    } else if (selectValue == "scorAsc" || selectValue == "scorDesc") {
      console.log(typeof x.rt_score);
      return x.rt_score - y.rt_score;
    }
  }
  ordenArray = data.films.sort(SortArray);
  console.log(ordenArray);

  if (
    selectValue == "fecAsc" ||
    selectValue == "alfaAsc" ||
    selectValue == "scorAsc"
  ) {
    peliculas(ordenArray);
  } else {
    let j = ordenArray.reverse();
    peliculas(j);
  }
});

/* -------------- realizando barra de busqueda por peliculas -------------------*/

const buscador = document.getElementById("buscador");
buscador.addEventListener("keyup", function () {
  destacadas.innerHTML = "";
  let texto = buscador.value.toLowerCase();
  let datatex = datasearch(data.films, texto);
  peliculas(datatex);
});

/*--------------- obteniendo la data de cada pelicula para mostrarla -------------*/

var informacion = document.getElementById("contenedor-destacadas");
var filmIndex = NaN;

informacion.addEventListener("mouseover", function () {
  for (var i = 0, len = informacion.children.length; i < len; i++) {
    (function (index) {
      informacion.children[i].firstChild.onclick = function () {
        filmIndex = index / 2;
        destacadas.innerHTML = "";

        const filmInfo = document.createElement("div");
        filmInfo.innerHTML = "&times;";
        filmInfo.className = "close";
        destacadas.appendChild(filmInfo);

        const filmDiv = document.createElement("div");
        filmDiv.textContent = " ";
        filmDiv.className = "filmInfoStyle";
        destacadas.appendChild(filmDiv);

        const contenedorFilmInfo = document.createElement("div");
        contenedorFilmInfo.className = "contenidoPeli";
        filmDiv.appendChild(contenedorFilmInfo);

        const imgInfo = document.createElement("img");
        imgInfo.src = data.films[filmIndex].poster;
        imgInfo.className = "imagenInfo";
        contenedorFilmInfo.appendChild(imgInfo);

        const filmCard = document.createElement("div");
        filmCard.className = "descripcinPeli";
        contenedorFilmInfo.appendChild(filmCard);

        const tituloInfo = document.createElement("div");
        tituloInfo.textContent = "Título: " + data.films[filmIndex].title;
        tituloInfo.className = "tituloPeli";
        filmCard.appendChild(tituloInfo);

        const descripcionInfo = document.createElement("div");
        descripcionInfo.textContent =
          "Descripción: " + data.films[filmIndex].description;
        descripcionInfo.className = "descripPeli";
        filmCard.appendChild(descripcionInfo);

        const directInfo = document.createElement("div");
        directInfo.textContent = "Director: " + data.films[filmIndex].director;
        directInfo.className = "directInfo";
        filmCard.appendChild(directInfo);

        const productInfo = document.createElement("div");
        productInfo.textContent =
          "Productor: " + data.films[filmIndex].producer;
        productInfo.className = "productInfo";
        filmCard.appendChild(productInfo);

        const dateInfo = document.createElement("div");
        dateInfo.textContent =
          "Fecha de Lanzamiento: " + data.films[filmIndex].release_date;
        dateInfo.className = "fechaInfo";
        filmCard.appendChild(dateInfo);

        const scoreInfo = document.createElement("div");
        scoreInfo.textContent = "Score: " + data.films[filmIndex].rt_score;
        scoreInfo.className = "scorInfo";
        filmCard.appendChild(scoreInfo);

        const personajesGrupo = document.createElement("div");
        personajesGrupo.textContent = " ";
        personajesGrupo.className = "personajesGrupo";
        filmDiv.appendChild(personajesGrupo);
        /* -------------- creando titulo para cada seccion de las peliculas -------------- */

        const tituloPersonajes = document.createElement("h5");
        tituloPersonajes.textContent = "Personajes de Pelicula";
        tituloPersonajes.className = "titulopersonajes";
        personajesGrupo.appendChild(tituloPersonajes);

        const tituloLocacion = document.createElement("h5");
        tituloLocacion.textContent = "Locaciones";
        tituloLocacion.className = "tituloLocaciones";
        filmDiv.appendChild(tituloLocacion);

        /* ---------- sacamos info de los personajes ------------- */

        let personajes = data.films[filmIndex].people;
        for (let i = 0; i < personajes.length; i++) {
          const personajesCards = document.createElement("div");
          personajesCards.className = "cardPersonaje";
          personajesGrupo.appendChild(personajesCards);

          const contenorPersonajes = document.createElement("div");
          contenorPersonajes.className = "contenidoPersonaje";
          personajesCards.appendChild(contenorPersonajes);

          const contenedorCards = document.createElement("div");
          contenedorCards.className = "contenidoCard";
          contenorPersonajes.appendChild(contenedorCards);

          const imgPersonaje = document.createElement("img");
          imgPersonaje.src = personajes[i].img;
          imgPersonaje.className = "imgPersonaje-frontal";
          contenedorCards.appendChild(imgPersonaje);

          const nomInfo = document.createElement("div");
          nomInfo.textContent = "Nombre: " + personajes[i].name;
          nomInfo.className = "nomPerso-trasera";
          contenedorCards.appendChild(nomInfo);

          const generoPersonaje = document.createElement("div");
          generoPersonaje.textContent = "Género: " + personajes[i].gender;
          generoPersonaje.className = "generoPer";
          nomInfo.appendChild(generoPersonaje);

          const agePersonaje = document.createElement("div");
          agePersonaje.textContent = "Edad: " + personajes[i].age;
          agePersonaje.className = "edadPer";
          nomInfo.appendChild(agePersonaje);

          const ojoPersonaje = document.createElement("div");
          ojoPersonaje.textContent =
            "Color de Ojos: " + personajes[i].eye_color;
          ojoPersonaje.className = "ojoPer";
          nomInfo.appendChild(ojoPersonaje);

          const cabelloPersonaje = document.createElement("div");
          cabelloPersonaje.textContent =
            "Color de Cabello: " + personajes[i].hair_color;
          cabelloPersonaje.className = "cabePer";
          nomInfo.appendChild(cabelloPersonaje);

          const especiePersonaje = document.createElement("div");
          especiePersonaje.textContent = "Especie: " + personajes[i].specie;
          especiePersonaje.className = "espePer";
          nomInfo.appendChild(especiePersonaje);
        }

        /* ----------- sacamos la info de locaciones -------------- */

        let infoLocacion = data.films[filmIndex].locations;
        if (infoLocacion.length == 0) {
          const locacionVacio = document.createElement("div");
          locacionVacio.innerHTML = "Esta pelicula no tiene Locación";
          locacionVacio.className = "locacionVacio";
          filmDiv.appendChild(locacionVacio);
        } else {
          for (let i = 0; i < infoLocacion.length; i++) {
            const contenLocacion = document.createElement("div");
            contenLocacion.className = "unionImgInfoLocacion";
            filmDiv.appendChild(contenLocacion);

            const locaPeli = document.createElement("img");
            locaPeli.src = infoLocacion[i].img;
            locaPeli.className = "imagenLocacion";
            contenLocacion.appendChild(locaPeli);

            const locaNombre = document.createElement("div");
            locaNombre.textContent = "Lugar: " + infoLocacion[i].name;
            locaNombre.className = "contenidoLocacion";
            contenLocacion.appendChild(locaNombre);

            const climaLoca = document.createElement("div");
            climaLoca.textContent = "Clima: " + infoLocacion[i].climate;
            climaLoca.className = "clima";
            locaNombre.appendChild(climaLoca);

            const terrenoLoca = document.createElement("div");
            terrenoLoca.textContent = "Terreno: " + infoLocacion[i].terrain;
            terrenoLoca.className = "terreno";
            locaNombre.appendChild(terrenoLoca);

            const aguaLoca = document.createElement("div");
            aguaLoca.textContent =
              "Superficie: " + infoLocacion[i].surface_water;
            aguaLoca.className = "superficie";
            locaNombre.appendChild(aguaLoca);

            const residenteLoca = document.createElement("div");
            residenteLoca.textContent =
              "Residentes: " + infoLocacion[i].residents;
            residenteLoca.className = " residentes";
            locaNombre.appendChild(residenteLoca);
          }
        }
        /* ------------- titulo de vehiculos --------------- */
        const tituloVehiculos = document.createElement("h5");
        tituloVehiculos.textContent = "Vehículos";
        tituloVehiculos.className = "tituloVehiculos";
        filmDiv.appendChild(tituloVehiculos);

        /* -------------- sacando info de vehiculos ----------------- */

        let infoVehiculos = data.films[filmIndex].vehicles;
        if (infoVehiculos.length == 0) {
          const vehiculoVacio = document.createElement("div");
          vehiculoVacio.innerHTML = "Esta pelicula no tiene Vehiculos.";
          vehiculoVacio.className = "vehiculoVacio";
          filmDiv.appendChild(vehiculoVacio);
        } else {
          for (let i = 0; i < infoVehiculos.length; i++) {
            if (infoVehiculos == data.films[filmIndex].vehicles) {
              const contenidoVehiculo = document.createElement("div");
              contenidoVehiculo.className = "unionImgInfo";
              filmDiv.appendChild(contenidoVehiculo);

              const imagenVehiculo = document.createElement("img");
              imagenVehiculo.src = infoVehiculos[i].img;
              imagenVehiculo.className = "imgVehiculo";
              contenidoVehiculo.appendChild(imagenVehiculo);

              const contenedorVehiculos = document.createElement("div");
              contenedorVehiculos.className = "contenVehiculo";
              contenidoVehiculo.appendChild(contenedorVehiculos);

              const nameVehiculo = document.createElement("div");
              nameVehiculo.textContent = "Nombre: " + infoVehiculos[i].name;
              nameVehiculo.className = "nombreVehiculo";
              contenedorVehiculos.appendChild(nameVehiculo);

              const descripcionVehiculo = document.createElement("div");
              descripcionVehiculo.textContent =
                "Descripción: " + infoVehiculos[i].description;
              descripcionVehiculo.className = "DescripcionVeehiculo";
              contenedorVehiculos.appendChild(descripcionVehiculo);

              const claseVehiculo = document.createElement("div");
              claseVehiculo.textContent =
                "Clase de Vehiculo: " + infoVehiculos[i].vehicle_class;
              claseVehiculo.className = "claseVehiculo";
              contenedorVehiculos.appendChild(claseVehiculo);
            }
          }
        }

        document.getElementById("destacadas").scrollIntoView();

        const closeInfo = document.querySelector(".close");
        console.log(closeInfo);
        closeInfo.onclick = function () {
          destacadas.innerHTML = "";
          peliculas(data.films);
        };
      };
    })(i);
  }
});
