import { Pokemon } from './pokemon.ts';
import { Movimiento } from './movimiento.ts';

export class Pokedex {
	static readonly POKEMON: ReadonlyMap<number, Pokemon>;
	static readonly MOVIMIENTOS: ReadonlyMap<number, Movimiento>
}
