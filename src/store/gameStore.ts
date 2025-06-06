import { BOARD_SIZE, SHIPS } from '@/core/constants/game';
import { CellState } from '@/core/types/game';
import { create } from 'zustand';
import { toast } from 'sonner';

interface GameState {
  name: string;
  selectedMode: string | null;
  board: CellState[][];
  isPlacingShip: boolean;
  hoverPosition: { row: number; col: number } | null;
  currentShip: keyof typeof SHIPS;
  setName: (name: string) => void;
  setSelectedMode: (mode: string) => void;
  placeShip: (row: number, col: number) => void;
  setHoverPosition: (position: { row: number; col: number } | null) => void;
}

export const useGameStore = create<GameState>((set) => ({
  name: '',
  selectedMode: null,
  board: Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill('empty')),
  isPlacingShip: true,
  hoverPosition: null,
  currentShip: 'carrier' as keyof typeof SHIPS,
  
  setName: (name) => set({ name }),
  setSelectedMode: (mode) => set({ selectedMode: mode }),
  
  placeShip: (row, col) => set((state) => {
    if (!state.isPlacingShip) return state;

    const shipType = SHIPS[state.currentShip];
    const positions: number[][] = [];

    // 배치 가능 여부 확인
    for (let i = 0; i < shipType.size; i++) {
      if (col + i >= BOARD_SIZE || state.board[row][col + i] !== 'empty') {
        toast.error('배치할 수 없는 위치입니다.', {
          duration: 1500,
        });
        return state;
      }
      positions.push([row, col + i]);
    }

    // 배치
    const newBoard = state.board.map(row => [...row]);
    positions.forEach(([r, c]) => {
      newBoard[r][c] = 'ship';
    });

    // 다음 배로 이동
    const shipTypes = Object.keys(SHIPS) as (keyof typeof SHIPS)[];
    const currentIndex = shipTypes.indexOf(state.currentShip);
    const nextShip = shipTypes[currentIndex + 1];

    return {
      board: newBoard,
      currentShip: nextShip,
      isPlacingShip: nextShip !== undefined,
      hoverPosition: null,
    };
  }),

  setHoverPosition: (position) => set({ hoverPosition: position }),
}));