/** @format */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CARDS_DATA = [
  { id: 1, title: "Smart Auditor", desc: "Automated ledger reconciliation." },
  { id: 2, title: "Cyber Ice UI", desc: "Glassmorphism components." },
  { id: 3, title: "Geospatial Data", desc: "Real-time coordinate tracking." },
  { id: 4, title: "Feature Slicing", desc: "Vertical architecture." },
  { id: 5, title: "Embedded Study", desc: "8-hour interval tracking." },
  { id: 6, title: "Vite + .NET", desc: "PostgreSQL backend performance." },
];

export default function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // On desktop, we show 4. On mobile, we show 1.
  const itemsPerPage = 4;
  const maxIndex = CARDS_DATA.length - itemsPerPage;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className='w-full max-w-7xl mx-auto py-12 px-10'>
      <div className='relative'>
        {/* 1. THE VIEWPORT (Hides the overflow) */}
        <div className='overflow-hidden'>
          {/* 2. THE SLIDING TRACK (The long horizontal row) */}
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              width: `${(CARDS_DATA.length / itemsPerPage) * 100}%`,
            }}>
            {CARDS_DATA.map((card) => (
              /* 3. THE INDIVIDUAL CARD WRAPPER */
              <div
                key={card.id}
                className='px-2'
                style={{ width: `${100 / CARDS_DATA.length}%` }}>
                <div className='bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-xl h-48 flex flex-col justify-center border-t-4 border-t-blue-500'>
                  <h3 className='font-bold text-xl text-slate-800'>
                    {card.title}
                  </h3>
                  <p className='text-slate-600 text-sm mt-2'>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className='absolute -left-12 top-1/2 -translate-y-1/2 p-3 bg-white shadow-lg rounded-full hover:bg-blue-600 hover:text-white transition-colors'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className='absolute -right-12 top-1/2 -translate-y-1/2 p-3 bg-white shadow-lg rounded-full hover:bg-blue-600 hover:text-white transition-colors'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
        <div>
          
        </div>
      </div>
    </div>
  );
}
