//Url base para el uso del api
export const urlBase: string = "http://localhost:63107/api";

//Controladores del api
export const controladorPokemon: string = "/Pokemones";
export const controladorMovimientos: string = "/Movimiento";
export const controladorTipos: string = "/Tipos";

//Metodos Pokemones
export const crearPokemones: string = "/GuardarNuevoPokemon";
export const leerPokemones: string = "/ObtenerPokemonesConFiltros";
export const actualizarPokemones: string = "/ModificarPokemon";
export const borrarPokemones: string = "/EliminarPokemon";
export const getCantidadRegistros: string = "/ObtenerCantidadPokemonFiltrados";

//Metodos Movimientos
export const leerMovimientos: string = "/ListaMovimientos";

//Metodos Tipos
export const leerTipos: string = "/ListaTipos";
