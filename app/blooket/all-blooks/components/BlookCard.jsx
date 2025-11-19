import Image from 'next/image';

// Blook Card Component
export default function BlookCard({ blook, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer hover:scale-105 transition-transform duration-200 flex flex-col items-center justify-center aspect-square"
    >
      <Image
        src={blook.poster}
        alt={blook.name}
        className="max-sm:w-12 w-18 h-auto  object-contain"
        width={64}
        height={64}
      />
      <img />
    </div>
  );
}
