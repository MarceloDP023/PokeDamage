import { Tipo } from './tipos.ts';
import { Movimiento } from './movimiento.ts';

export class Pokemon {
	vida: number;
	ataque: number;
	ataque_especial: number;
	defensa: number;
	defensa_especial: number;
	velocidad: number;
	tipo_1: Tipo;
	tipo_2: Tipo;
	quemado: boolean;
	movimientos: Movimiento[];
}
