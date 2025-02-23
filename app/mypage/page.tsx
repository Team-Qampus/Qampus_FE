'use client';

import SearchBar from '@/components/SearchBar';
import InfoCard from './_components/InfoCard';
import SelectField from '@/components/SelectField';
import Pagination from '@/components/Pagination';
import {useState} from 'react';
import PreviewCard from '@/components/PreviewCard';
import {mockQuestions} from '@/constants/mockQuestions';

export default function MyPage() {
  const [selectedField, setSelectedField] = useState<string>('전체');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;
  const totalPages = Math.ceil(mockQuestions.length / pageSize);

  const paginatedQuestions = mockQuestions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <main className="flex w-full flex-col items-center bg-white min-h-screen">
      <SearchBar />
      <InfoCard name="김하나" university="홍익대학교" department="경영학부" />
      <SelectField
        selectedField={selectedField}
        setSelectedField={setSelectedField}
      />

      <p className="w-[70%] text-black font-[600] py-8">
        지금까지 총 {mockQuestions.length.toLocaleString()}개의 질문을
        작성했어요
      </p>

      <div className="w-[70%] flex flex-col">
        {paginatedQuestions.map(question => (
          <PreviewCard
            key={question.id}
            title={question.title}
            content={question.content}
            answerCount={question.answerCount}
            createdDate={question.createdDate}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
