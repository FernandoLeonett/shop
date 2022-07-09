const rutas = {
  home: "/",
  cart: "/cart",
  detalle: (id) => (id ? `/detalle/:${id}` : "/detalle/:id"),
  categorias: (categoria) =>
    categoria ? `/categorias/:${categoria}` : "/categorias/:categoria",
};

export default rutas;
