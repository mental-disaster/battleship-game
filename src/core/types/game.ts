import { SHIPS } from '@/core/constants/game';

export type ShipType = keyof typeof SHIPS;
export type ShipOrientation = 'horizontal' | 'vertical';
export type CellState = 'empty' | 'ship' | 'hit' | 'miss';

export interface Ship {
  type: ShipType;
  positions: number[][];
}