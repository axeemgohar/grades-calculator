'use client';
import { useState } from 'react';
import BlookCard from './BlookCard';
import BlookModal from './BlookModal';
// Pack Section Component
export default function PackSection({ pack }) {
  const [selectedBlook, setSelectedBlook] = useState(null);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b border-gray-400 pb-2">
        {pack.name}
      </h2>

      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-10 gap-4">
        {pack.blooks.map((blook, index) => (
          <BlookCard
            key={index}
            blook={blook}
            onClick={() => setSelectedBlook(blook)}
          />
        ))}
      </div>

      {selectedBlook && (
        <BlookModal
          pack={pack.name}
          blook={selectedBlook}
          onClose={() => setSelectedBlook(null)}
        />
      )}
    </div>
  );
}
