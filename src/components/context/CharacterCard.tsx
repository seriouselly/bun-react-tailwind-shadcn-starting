interface Character {
  id: string;
  name: string;
  image: string;
}

export function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="p-4 rounded-xl shadow bg-white hover:bg-gray-200 transition-shadow duration-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-shadow duration-300 duration-300 cursor-[pointer]">
      <img src={character.image} alt={character.name} className="rounded-md w-full h-55 object-contain" />
      <h3 className="text-[22px] font-bold mt-2 text-center dark:text-white">{character.name}</h3>
    </div>
  );
}
