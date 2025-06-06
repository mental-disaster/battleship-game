import { SHIPS } from '@/core/constants/game';
import { useGameStore } from '@/store/gameStore';
import React, { memo, useCallback } from 'react';
import { Cell, Row } from '@/core/types/board';

const BoardCell = memo(({ row, col, state, onCellClick, onHover }: Cell) => {
  const { isPlacingShip, hoverPosition, currentShip } = useGameStore();
  
  let cellClass = "w-8 h-8 border border-gray-300 cursor-pointer";
  
  if (state === 'ship') {
    cellClass += " bg-gray-800";
  } else {
    cellClass += " bg-blue-100 hover:bg-blue-200";
  }

  if (isPlacingShip && hoverPosition) {
    const size = SHIPS[currentShip].size;
    const isHovered = hoverPosition.row === row && 
      col >= hoverPosition.col && 
      col < hoverPosition.col + size;
    
    if (isHovered) {
      cellClass = cellClass.replace("bg-blue-100", "bg-yellow-200");
      cellClass = cellClass.replace("hover:bg-blue-200", "hover:bg-yellow-300");
    }
  }

  return (
    <div
      className={cellClass}
      onClick={() => onCellClick(row, col)}
      onMouseEnter={() => onHover(row, col)}
      onMouseLeave={() => onHover(null, null)}
    />
  );
});
BoardCell.displayName = 'BoardCell';

const BoardRow = memo(({ row, cells, onCellClick, onHover }: Row) => {
  return (
    <div className="flex">
      {cells.map((state, col) => (
        <BoardCell
          key={`${row}-${col}`}
          row={row}
          col={col}
          state={state}
          onCellClick={onCellClick}
          onHover={onHover}
        />
      ))}
    </div>
  );
});
BoardRow.displayName = 'BoardRow';

export default function BattleshipBoard() {
  const { board, isPlacingShip, placeShip, setHoverPosition, currentShip } = useGameStore();

  const handleCellClick = useCallback((row: number, col: number) => {
    if (isPlacingShip) {
      placeShip(row, col);
    }
  }, [isPlacingShip, placeShip]);

  const handleCellHover = useCallback((row: number | null, col: number | null) => {
    if (isPlacingShip && row !== null && col !== null) {
      setHoverPosition({ row, col });
    } else {
      setHoverPosition(null);
    }
  }, [isPlacingShip, setHoverPosition]);

  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col">
      {isPlacingShip ? (
        <div className="mb-4 text-center">
          <p className="text-lg font-semibold">
            {SHIPS[currentShip].name}을 배치하세요
          </p>
        </div>
      ) : (
        <div className="mb-4 text-center">
          <p className="text-lg font-semibold">
            배치가 완료되었습니다.
          </p>
        </div>
      )}
      {board.map((row, rowIndex) => (
        <BoardRow
          key={rowIndex}
          row={rowIndex}
          cells={row}
          onCellClick={handleCellClick}
          onHover={handleCellHover}
        />
      ))}
    </div>
  );
} 