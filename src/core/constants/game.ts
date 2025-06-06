export const BOARD_SIZE = 10;
export const SHIPS = {
    carrier: { size: 5, name: '항공모함' },
    battleship: { size: 4, name: '전함' },
    cruiser: { size: 3, name: '순양함' },
    submarine: { size: 3, name: '잠수함' },
    destroyer: { size: 2, name: '구축함' },
  } as const;