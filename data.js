/* --------- filtrado por director y productor ---------*/
export const filtroDirector = (movies, selection) => {
  let peliDirector = movies.filter((movie) => movie.director === selection);
  return peliDirector;
};

export const filtroProductor = (movies, selection) => {
  let peliProductor = movies.filter((movie) => movie.producer === selection);
  return peliProductor;
};

/* -------- filtrando por busqueda --------*/
export const datasearch = (data, texto) => {
  let textFiltro = data.filter((filtro) =>
    filtro.title.toLowerCase().includes(texto)
  );
  return textFiltro;
};
