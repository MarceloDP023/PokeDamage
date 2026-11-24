import { Pokemon } from './pokemon.ts';
import { Movimiento } from './movimiento.ts';

export class Pokedex {
	POKEMON: Map<number, Pokemon>;
	MOVIMIENTOS: Map<number, Movimiento>
}
