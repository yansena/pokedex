import express from 'express';
const routes = express.Router();

routes.get('/pokemons' );
routes.get('/pokemons/:pokemon_name');
routes.get('/evolutions/:id');

export { routes };