import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import GamePage from "@/app/game/page";
import { useGameStore } from "@/store/gameStore";

// Zustand 스토어 모킹
jest.mock("@/store/gameStore", () => ({
  useGameStore: jest.fn(),
}));

// BattleshipBoard 컴포넌트 모킹
jest.mock("@/components/BattleshipBoard", () => {
  return function MockBattleshipBoard() {
    return <div data-testid="mock-battleship-board">배틀쉽 보드</div>;
  };
});

describe("GamePage", () => {
  const mockUseGameStore = useGameStore as unknown as jest.Mock;
  let renderResult: ReturnType<typeof render>;

  beforeEach(() => {
    // 기본 스토어 상태 설정
    mockUseGameStore.mockImplementation(() => ({
      name: "테스트 플레이어",
      selectedMode: "싱글 플레이",
    }));

    // 컴포넌트 렌더링
    renderResult = render(<GamePage />);
  });

  afterEach(() => {
    // 모킹 초기화
    jest.clearAllMocks();
  });

  it("플레이어명, 게임모드 표시 확인", () => {
    // 초기 상태 확인
    expect(screen.getByText("테스트 플레이어")).toBeInTheDocument();
    expect(screen.getByText("싱글 플레이")).toBeInTheDocument();
  });

  it("보드 렌더링 확인", () => {
    // 보드 렌더링 확인
    expect(screen.getByTestId("mock-battleship-board")).toBeInTheDocument();
  });

  it("상태 변경 UI 업데이트 확인", () => {
    // 초기 상태 확인
    expect(screen.getByText("테스트 플레이어")).toBeInTheDocument();
    expect(screen.getByText("싱글 플레이")).toBeInTheDocument();

    // 스토어 상태 변경
    mockUseGameStore.mockImplementation(() => ({
      name: "새 플레이어",
      selectedMode: "멀티 플레이",
    }));

    // 컴포넌트 리렌더링
    renderResult.rerender(<GamePage />);

    // 업데이트된 상태 확인
    expect(screen.getByText("새 플레이어")).toBeInTheDocument();
    expect(screen.getByText("멀티 플레이")).toBeInTheDocument();
  });
});
