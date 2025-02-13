import InfoCard from './_components/InfoCard';
import Stepper from './_components/Stepper';

export const metadata = {
  title: '질문 작성 | MyApp',
  description: '사용자가 새로운 질문을 작성할 수 있는 페이지입니다.',
};

export default function QuestionCreatePage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-20 py-10 bg-white">
      <div className="flex w-full gap-6">
        <div className="w-1/5">
          <Stepper />
        </div>

        <div className="w-4/5 flex flex-col gap-4">
          <InfoCard
            name="김하나"
            university="홍익대학교"
            department="경영학부"
            // profileImage="https://example.com/image.jpg"
          />
        </div>
      </div>
    </main>
  );
}
