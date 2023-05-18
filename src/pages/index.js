import { questionsData } from '@/questions';
import React, { useState } from 'react';
import { Question } from '../components/Question';
import { ProgressBar } from "../components/ProgressBar"


function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const [questions, setQuestions] = useState(questionsData)
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);
  const [active, setActive] = useState(true);
  const [progress, setProgress] = useState(0);



  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    setProgress(prev => prev + 20)
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
    setProgress(prev => prev - 25)
  };


  return (
    <>
      <main className="max-w-[1100px] mx-auto px-5 md:p-0 md:px-5" >

        <div className='w-full'>
          <h1 className='h1 text-[22px] font-bold ml-[0px]'>Career Profiling Test</h1>
          <div className='w-full' >
            {currentQuestions.map((item) => (
              <div key={item.id} className='box mb-7' >
                <Question key={item.id} item={item} />
                {/* <h2 >{item.question}</h2>
                <div className='options flex gap-[10px] ml-[16px] mt-[4px] p-[5px] '>
                  {item.options.map((option) => (
                    <div key={option} onClick={() => handleClick(item, option)} className={`btn-style ${!active ? "color-green" : "color-white"}`}   >
                      {option}
                    </div>
                  ))}
                </div> */}
              </div>
            ))}
          </div>
          <div className='pagination'>
            <div className='pagination inline-flex ml-[0px] mt-[0px] gap-[12px]' >
              {currentPage > 1 && (
                <button className='prev-button bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l' onClick={handlePreviousPage}>
                  Previous
                </button>
              )}
              {currentQuestions.length === questionsPerPage && (
                <button onClick={handleNextPage} className='next-button bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r' >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
      <ProgressBar currentPage={currentPage} progress={progress } />
    </>
  );
}

export default Home;

