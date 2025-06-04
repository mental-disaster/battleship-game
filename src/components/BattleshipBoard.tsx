import React from 'react';

interface BattleshipBoardProps {
  boardSize?: number;
}

export default function BattleshipBoard({ boardSize = 10 }: BattleshipBoardProps) {
  const renderBoard = () => {
    const board = [];
    for (let i = 0; i < boardSize; i++) {
      const row = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(
          <div
            key={`${i}-${j}`}
            className="w-8 h-8 border border-gray-300 bg-blue-100 hover:bg-blue-200 cursor-pointer"
          />
        );
      }
      board.push(
        <div key={i} className="flex">
          {row}
        </div>
      );
    }
    return board;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col">
      {renderBoard()}
    </div>
  );
} 