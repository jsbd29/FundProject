/** @format */

// pages/Dashboard.jsx
import { useState } from "react";

export default function Dashboard({ user }) {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState("");

  const addCard = (e) => {
    e.preventDefault();
    const newCard = { id: Date.now(), title, creator: user.name };
    setCards([newCard, ...cards]);
    setTitle(""); // Reset input
  };

  return (
    <div className='max-w-4xl mx-auto py-10'>
      <h1 className='text-3xl font-bold mb-6'>Welcome, {user?.name}</h1>

      {/* Card Creation Form */}
      <form onSubmit={addCard} className='mb-10 flex gap-4'>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Card Title (e.g., My Best Friend)'
          className='flex-1 p-3 border rounded-xl shadow-sm'
          required
        />
        <button className='bg-green-600 text-white px-6 py-2 rounded-xl font-bold'>
          + Create Card
        </button>
      </form>

      {/* Displaying the Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {cards.map((card) => (
          <div
            key={card.id}
            className='p-6 bg-white rounded-2xl shadow-md border-t-4 border-t-green-500'>
            <h3 className='font-bold text-lg'>{card.title}</h3>
            <p className='text-xs text-slate-400 mt-2'>
              Created by {card.creator}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
