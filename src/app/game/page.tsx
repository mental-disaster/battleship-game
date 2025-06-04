"use client";

import { useGameStore } from '@/store/gameStore';
import BattleshipBoard from '@/components/BattleshipBoard';

export default function GamePage() {
  const { name, selectedMode } = useGameStore();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl flex flex-col items-center">
        <div className="mb-2">플레이어: <span className="font-semibold">{name}</span></div>
        <div className="mb-6">모드: <span className="font-semibold">{selectedMode}</span></div>
        <BattleshipBoard />
      </div>
    </main>
  );
} 