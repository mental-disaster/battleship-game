'use client';

import { GAME_MODES } from '@/data/gameModes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGameStore } from '@/store/gameStore';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { name, selectedMode, setName, setSelectedMode } = useGameStore();

  const handleEnter = () => {
    if (!name) {
      alert('닉네임을 입력해주세요');
      return;
    } else if (!selectedMode) {
      alert('게임 모드를 선택해주세요');
      return;
    }
    router.push('/game');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEnter();
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100" onKeyDown={handleKeyDown} tabIndex={-1}>
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">배틀쉽 게임</h1>

        <div className="mb-6">
          <label className="block text-lg mb-2" htmlFor="username">이름 입력</label>
          <Input
            id="username"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="닉네임을 입력하세요"
            maxLength={12}
          />
        </div>

        <div className="mb-6">
          <div className="text-lg mb-2">게임 모드 선택</div>
          <div className="flex flex-col gap-2">
            {GAME_MODES.map(mode => (
              <Button
                key={mode.key}
                type="button"
                onClick={() => setSelectedMode(mode.key)}
                variant={selectedMode === mode.key ? 'default' : 'outline'}
                className="w-full"
              >
                {mode.label}
              </Button>
            ))}
          </div>
        </div>

        <Button
          disabled={!name || !selectedMode}
          onClick={handleEnter}
          className="w-full"
        >
          입장하기
        </Button>
      </div>
    </main>
  );
}
