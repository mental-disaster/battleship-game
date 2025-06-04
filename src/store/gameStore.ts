import { create } from 'zustand';

interface GameState {
    name: string;
    selectedMode: string | null;
    setName: (name: string) => void;
    setSelectedMode: (mode: string) => void;
  }
  
  export const useGameStore = create<GameState>((set) => ({
    name: '',
    selectedMode: null,
    setName: (name) => set({ name }),
    setSelectedMode: (mode) => set({ selectedMode: mode }),
  }));