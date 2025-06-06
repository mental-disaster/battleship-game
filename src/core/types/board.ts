import { CellState } from "@/core/types/game";

export interface Cell {
    row: number;
    col: number;
    state: CellState;
    onCellClick: (row: number, col: number) => void;
    onHover: (row: number | null, col: number | null) => void;
}

export interface Row {
    row: number;
    cells: CellState[];
    onCellClick: (row: number, col: number) => void;
    onHover: (row: number | null, col: number | null) => void;
}