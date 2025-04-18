import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {memo} from 'react';

function SearchAreaComponent() {
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      const keyword = e.currentTarget.value.trim();
      router.push(
        `/community/${encodeURIComponent(keyword.replace('학교', ''))}`,
      );
    }
  };

  return (
    <div className="absolute w-screen h-screen top-[10vw]">
      <div className="w-screen flex flex-col items-center justify-center absolute z-10">
        <h1 className="text-white text-[1.875vw]">
          대전과 챌린지로 학교 순위 올리기
        </h1>
        <p className="text-grey2 text-[1vw] mt-[0.6vw]">
          현재 상위 학교들의 랭킹과 순위 지표를 확인하고 대전을 통해 순위를
          올려보세요!
        </p>

        <div className="mt-[2.8vw] w-[43vw] aspect-[837/67] relative text-[1vw] text-white border border-communityGrey rounded-[3vw] flex justify-center items-center">
          <input
            className="w-full bg-inherit border-none text-center placeholder:text-white outline-none"
            placeholder="학교 이름을 검색해보세요"
            onKeyDown={handleKeyDown}
          />
          <div className="absolute w-[1.2vw] aspect-[1/1] right-[1vw]">
            <Image fill src="/svg/search.svg" alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
}

const SearchArea = memo(SearchAreaComponent);
export default SearchArea;
